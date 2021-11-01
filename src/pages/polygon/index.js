import Head from 'next/head'
import Image from 'next/image'
import Minter from "../../components/minter";
import Header from "../../components/header";
import store from "../../redux/store";
import { Provider } from "react-redux";
import CryptoBabys from '../../../public/cryptobabys.png'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Lottie from 'react-lottie-player'
import lottieJson from '../babysmachine.json'


const navigation = [
    { name: 'Matic', href: '/polygon' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]

export default function Home() {
    return (
        <div>
            <Head>
                <title>Crypto Babys Attacks Polygon Matic</title>
                <meta name="description" content="First NFT Babys Attack on Polygon Matic" />
                <link rel="icon" href="/favicon.ico" />
            </Head>



            <div className="relative overflow-hidden">
                <Popover as="header" className="relative">
                    <div className="bg-gray-900 pt-6">
                        <nav
                            className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
                            aria-label="Global"
                        >
                            <div className="flex items-center flex-1">
                                <div className="flex items-center justify-between w-full md:w-auto">
                                    <a href="./">
                                        <span className="sr-only">Workflow</span>
                                        <Image
                                            className="h-8 w-auto sm:h-10"
                                            src={CryptoBabys}
                                            alt=""
                                        />
                                    </a>
                                    <div className="-mr-2 flex items-center md:hidden">
                                        <Popover.Button className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                                            <span className="sr-only">Open main menu</span>
                                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                </div>
                                <div className="hidden space-x-8 md:flex md:ml-10">
                                    {navigation.map((item) => (
                                        <a key={item.name} href={item.href} className="text-base font-medium text-white hover:text-gray-300">
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div className="hidden md:flex md:items-center md:space-x-6">
                                <a href="#" className="text-base font-medium text-white hover:text-gray-300">
                                    Log in
                                </a>
                                <a
                                    href="#"
                                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700"
                                >
                                    Start free trial
                                </a>
                            </div>
                        </nav>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="duration-150 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel focus className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top md:hidden">
                            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div className="px-5 pt-4 flex items-center justify-between">
                                    <div>
                                        <Image
                                            className="h-8 w-auto"
                                            src={CryptoBabys}
                                            alt=""
                                        />
                                    </div>
                                    <div className="-mr-2">
                                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600">
                                            <span className="sr-only">Close menu</span>
                                            <XIcon className="h-6 w-6" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                </div>
                                <div className="pt-5 pb-6">
                                    <div className="px-2 space-y-1">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                    <div className="mt-6 px-5">
                                        <a
                                            href="#"
                                            className="block text-center w-full py-3 px-4 rounded-md shadow bg-indigo-600 text-white font-medium hover:bg-indigo-700"
                                        >
                                            Start free trial
                                        </a>
                                    </div>
                                    <div className="mt-6 px-5">
                                        <p className="text-center text-base font-medium text-gray-500">
                                            Existing customer?{' '}
                                            <a href="#" className="text-gray-900 hover:underline">
                                                Login
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </Popover>

                <main>
                    <Provider store={store}>
                        <div className=" bg-gray-900 h-screen lg:flex p-8 sm:p-12">
                            <div className="mx-auto max-w-screen lg:px-8">
                                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                                    <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:flex">
                                        <Lottie
                                            loop
                                            animationData={lottieJson}
                                            play
                                        />
                                    </div>
                                    <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                                        <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">

                                            <Minter />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div >
                    </Provider>
                </main>
            </div >





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
        </div >
    )
}