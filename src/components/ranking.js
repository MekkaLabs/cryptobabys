import Image from 'next/image'

const variety = [
    {
        name: 'Total Babys',
        number: '10.000',

    },
    {
        name: 'Animals',
        number: '130',

    },
    {
        name: 'Eyes',
        number: '30',

    },
    {
        name: 'Hair',
        number: '30',

    },
]

export default function Ranking() {
    return (
        <div className="py-16 bg-gray-900 overflow-hidden lg:py-24">
            <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">


                <div className="relative">
                    <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                        Ranking System
                    </h2>
                </div>
                <div className="grid grid-cols-2 mt-10">
                    <div>
                        <Image
                            className="relative mx-auto"
                            width={400}
                            height={400}
                            src="/crypto-babies-007-site.jpg"
                            alt=""
                        />
                    </div>

                    <table className="min-w-full divide-y divide-gray-200">

                        <tbody>
                            {variety.map((tips, tipsIdx) => (
                                <tr key={tips.name} className={tipsIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{tips.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tips.number}</td>

                                </tr>
                            ))}
                        </tbody>
                    </table>



                </div>
            </div>
        </div>

    )
}