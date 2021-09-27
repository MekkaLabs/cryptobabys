import Image from "next/image"


export default function Description() {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                    <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">

                        <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                            <Image
                                className="max-h-12"
                                src="/crypto-babies-005-site.jpg"
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                            <Image
                                className="max-h-12"
                                src="/crypto-babies-004-site.jpg"
                                width={500}
                                height={500}
                            />
                        </div>

                    </div>



                    <div>
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Babies ask for more space in the NFT market
                        </h2>
                        <p className="mt-3 max-w-3xl text-lg text-gray-500">
                            Visit our official collection on OpenSea to buy a Crypto Baby.
                        </p>
                        <div className="mt-8 sm:flex">
                            <div className="rounded-md shadow">
                                <a
                                    href="#"
                                    className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                                >
                                    Buy Crypto Babys
                                </a>
                            </div>
                            <div className="mt-3 sm:mt-0 sm:ml-3">
                                <a
                                    href="#"
                                    className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                                >
                                    About
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}