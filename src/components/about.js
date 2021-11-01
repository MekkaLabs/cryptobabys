import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, MailIcon, ScaleIcon } from '@heroicons/react/outline'
import Image from 'next/image'

const transferFeatures = [
    {
        id: 1,
        name: '4 Blockchains',
        description:
            'Crypto babys is in Polygon Matic, Binance Smart Chain, Ethereum and Solana Blockchains',
        icon: GlobeAltIcon,
    },
    {
        id: 2,
        name: '10.000 Uniques NFTs',
        description:
            '2500 by blockachain.',
        icon: ScaleIcon,
    },
    {
        id: 3,
        name: 'Copyright',
        description:
            'Includes full creative and commercial rights usage of your panda as long as you keep the NFT',
        icon: LightningBoltIcon,
    },
]


export default function Example() {
    return (
        <div className="py-16 bg-indigo-700 overflow-hidden lg:py-24">
            <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">


                <div className="relative">
                    <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                        What Is
                    </h2>
                    <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-200">
                        Babies are revolting against cats and dog memes, which fill all the internet gossip pages and the blockchain as well. They claim they are the future of the blockchain and demand more space.

                        Crypto Babys is a random collection using #Zero model, Each template is unique and designed with shapes and mouse in illustrator.
                    </p>
                </div>

                <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                    <div className="relative">
                        <h3 className="text-2xl font-extrabold text-white tracking-tight sm:text-3xl">
                            Transfer funds world-wide
                        </h3>
                        <p className="mt-3 text-lg text-gray-200">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima sequi recusandae, porro maiores
                            officia assumenda aliquam laborum ab aliquid veritatis impedit odit adipisci optio iste blanditiis facere.
                            Totam, velit.
                        </p>

                        <dl className="mt-10 space-y-10">
                            {transferFeatures.map((item) => (
                                <div key={item.id} className="relative">
                                    <dt>
                                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                            <item.icon className="h-6 w-6" aria-hidden="true" />
                                        </div>
                                        <p className="ml-16 text-2xl leading-6 font-medium text-white">{item.name}</p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-gray-200">{item.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    <div>
                        <Image
                            className="relative mx-auto"
                            width={500}
                            height={500}
                            src="/crypto-babies-007-site.jpg"
                            alt=""
                        />
                    </div>
                </div>

            </div>
        </div >
    )
}