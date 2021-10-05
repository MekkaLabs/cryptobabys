import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../redux/blockchain/blockchainActions";
import { fetchData } from "../redux/data/dataActions";
import Link from 'next/link'


const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;


export default function Minter() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 10) {
      newMintAmount = 10;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  });

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div>
        <div>
          <div>
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">{data.totalSupply} / </span>
              <span className="block text-indigo-600 xl:inline">{CONFIG.MAX_SUPPLY}</span>
            </h1>
          </div>
          <div className="py-10">
            <p className="mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Contract:
              <Link target={"_blank"} href={CONFIG.SCAN_LINK}>
                {(CONFIG.CONTRACT_ADDRESS)}
              </Link>
            </p>
          </div>
          <div>
            {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
              <div>
                <div>
                  The sale has ended.
                </div>
                <div>
                  You can still find {CONFIG.NFT_NAME} on
                </div>

                <Link target={"_blank"} href={CONFIG.MARKETPLACE_LINK}>
                  {CONFIG.MARKETPLACE}
                </Link>
              </div>
            ) : (
              <div>
                <div>
                  <h1 className="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-2xl md:text-2xl">
                    <span className="block xl:inline">1 {CONFIG.SYMBOL} costs </span>
                    <span className="block text-indigo-600 xl:inline">{CONFIG.DISPLAY_COST}{" "}
                      {CONFIG.NETWORK.SYMBOL}.</span>
                  </h1>

                </div>

                <div>
                  Excluding gas fees.
                </div>
                {blockchain.account === "" ||
                  blockchain.smartContract === null ? (
                  <div>
                    <div className="py-4">
                      Connect to the {CONFIG.NETWORK.NAME} network
                    </div>
                    <button type="button"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(connect());
                        getData();
                      }}
                    >
                      CONNECT
                    </button>
                    {blockchain.errorMsg !== "" ? (
                      <div>
                        <div>
                          {blockchain.errorMsg}
                        </div>
                      </div>
                    ) : null}
                  </div>
                ) : (
                  <div>
                    <div>
                      {feedback}
                    </div>

                    <div className="space-x-4 py-4">
                      <div className="inline-block">
                        <button type="button"
                          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          disabled={claimingNft ? 1 : 0}
                          onClick={(e) => {
                            e.preventDefault();
                            decrementMintAmount();
                          }}
                        >
                          -
                        </button>
                      </div>
                      <div className="inline-block">
                        <p class="text-xl font-semibold text-gray-900  px-12">
                          {mintAmount}
                        </p>
                      </div>
                      <div className="inline-block">
                        <p class="text-xl font-semibold text-gray-900">
                          <button type="button"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            disabled={claimingNft ? 1 : 0}
                            onClick={(e) => {
                              e.preventDefault();
                              incrementMintAmount();
                            }}
                          >
                            +
                          </button>
                        </p>
                      </div>
                    </div>


                    <div className="py-4">
                      <button type="button"
                        className="inline-flex items-center px-24 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"

                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          claimNFTs();
                          getData();
                        }}
                      >
                        {claimingNft ? "BUSY" : "BUY"}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="py-4">
            <div>
              Please make sure you are connected to the right network (
              {CONFIG.NETWORK.NAME} Mainnet) and the correct address. Please note:
              Once you make the purchase, you cannot undo this action.
            </div>
            <div>
              We have set the gas limit to {CONFIG.GAS_LIMIT} for the contract to
              successfully mint your NFT. We recommend that you don't lower the
              gas limit.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}