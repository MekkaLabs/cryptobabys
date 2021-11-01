
export default function Machine() {
    return (
        <div className="relative bg-blue-900 pt-16 overflow-hidden sm:pt-24 lg:pt-32">
            <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
                <div>
                    <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">Genetic</h2>
                    <p className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                        THE GENETIC POLYMERIZATION CHAMBER
                    </p>
                    <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                        Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper
                        malesuada. Eleifend condimentum id viverra nulla.
                    </p>
                </div>
                <div className="m-12">
                    <img
                        className="object-scale-down"
                        src="/crypto-babys-machine.gif"
                        height="500px"
                        alt=""
                    />
                </div>
            </div>
        </div>

    )
}