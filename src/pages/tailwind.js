import Head from 'next/head'
import CryptoBabysMachine from '../../public/crypto-babys-machine.gif'




export default function Tailwind() {
    return (
        <div>
            <Head>
                <title>Triangules Eyes Dapp Rikeby</title>
                <meta name="description" content="First NFT Mint NextJs" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2">
                        <img
                            className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                            src="/crypto-babys-machine.gif"
                            alt=""
                        />
                    </div>
                    <div className="...">5</div>

                </div>

            </main >

            <footer>

            </footer>
        </div >
    )
}
