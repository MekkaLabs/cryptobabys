import Head from 'next/head'
import Image from 'next/image'
import About from '../components/about'
import Description from '../components/description'
import Header from '../components/header'
import Portfolio from '../components/portfolio'
import Roadmap from '../components/roadmap'
import SectionOne from '../components/sectionone'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Crypto Babys</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <SectionOne />
        <Portfolio />
        <About />
        <Description />
        <Roadmap />
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span >
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
