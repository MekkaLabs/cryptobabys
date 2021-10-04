import Head from 'next/head'
import Image from 'next/image'
import Minter from "../components/minter";


import About from '../components/about'
import Description from '../components/description'
import Header from '../components/header'
import Portfolio from '../components/portfolio'
import Roadmap from '../components/roadmap'
import SectionOne from '../components/sectionone'

import store from "../redux/store";
import { Provider } from "react-redux";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Triangules Eyes Dapp Rikeby</title>
        <meta name="description" content="First NFT Mint NextJs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
        <Provider store={store}>
        <Header />
        <SectionOne />
        <Minter />
        <Portfolio />
        <About />
        <Description />
        <Roadmap />
          
        </Provider>,
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
