import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import CryptoBabys from '../../public/cryptobabys.png'
import BabyMachine from '../../public/baby-machine.png'

const navigation = [
    { name: 'Matic', href: '/polygon' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]

export default function Hero() {
    return (
        <div className="relative overflow-hidden">
            <Popover as="header" className="relative">
                <div className="bg-gray-900 pt-6">
                    <nav
                        className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
                        aria-label="Global"
                    >
                        <div className="flex items-center flex-1">
                            <div className="flex items-center justify-between w-full md:w-auto">
                                <a href="#">
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
                <div className=" bg-gray-900 h-screen lg:flex lg:items-center p-8 sm:p-12">
                    <div className="mx-auto max-w-7xl lg:px-8">
                        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                                <div className="lg:py-24">

                                    <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                                        <span className="block">A better way to</span>
                                        <span className="block text-indigo-400">ship web apps</span>
                                    </h1>
                                    <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                        Anim aute id magna aliqua ad ad non deserunt sunt.Qui irure qui Lorem cupidatat commodo.Elit sunt
                                        amet fugiat veniam occaecat fugiat.
                                    </p>
                                    <div>
                                        <button className="relative block mt-10 cursor-pointer">
                                            <div className="absolute h-14 inset-x-0 bg-gray-400 border border-gray-500" />
                                            <div className="relative bottom-1 right-1 text-xl font-thin leading-none tracking-wider py-4 px-10 bg-gray-100 border border-gray-500 transform hover:translate-y-1 hover:translate-x-1 transition duration-200 ease-in-out">
                                                Click Me!
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">

                                    <Image
                                        className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                        src={BabyMachine}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </main>
        </div >
    )
}