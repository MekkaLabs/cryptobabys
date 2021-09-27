import Image from "next/image"

const features = [
    { name: 'Origin', description: 'Designed by Damião Araujo and Gustavo Vicente MekkaLabs MKT360º' },
    { name: 'NFT', description: 'ERC-721 token on polygon, is hosted on IPFS, with an initial mint cost of .0420 wETH' },
    { name: 'Dimensions', description: '1920 x 1920px' },
    { name: 'Numbers', description: '1500 Cards' },

]

export default function About() {
    return (
        <div className="bg-white">
            <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
                <div>
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">What is?</h2>
                    <p className="mt-4 text-gray-500">
                        Babies are revolting against cats and dog memes, which fill all the internet gossip pages and the blockchain as well. They claim they are the future of the blockchain and demand more space.
                    </p>
                    <p className="mt-4 text-gray-500">
                        Crypto Babys is a random collection using #Zero model, Each template is unique and designed with shapes and mouse in illustrator.
                    </p>

                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        {features.map((feature) => (
                            <div key={feature.name} className="border-t border-gray-400 pt-4">
                                <dt className="font-medium text-gray-900">{feature.name}</dt>
                                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-2">
                    <Image
                        src="/crypto-babies-Zero1.jpg"
                        width={400}
                        height={400}
                    />
                    <Image
                        src="/crypto-babies-Zero2.jpg"
                        width={400}
                        height={400}
                    />
                    <Image
                        src="/crypto-babies-Zero3.jpg"
                        width={400}
                        height={400}
                    />
                    <Image
                        src="/crypto-babies-Zero4.jpg"
                        width={400}
                        height={400}
                    />
                </div>
            </div>
        </div>
    )
}