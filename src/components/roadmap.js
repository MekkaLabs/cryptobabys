export default function Roadmap() {
    return (
        <div className="bg-gray-900 text-white py-8">
            <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
                <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
                    <div>
                        <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">Roadmap</h2>
                        <p className="mt-2 text-blue-500 text-3xl font-extrabold tracking-tight sm:text-4xl">ATTENTION</p>
                        <p className="mt-3 text-lg text-gray-300">
                            Dados vazados, mostram quais o que Zero planeja, foi descoberto os planos de ataque dos Crypto Babys nas mais diversas blockchains.
                        </p>
                    </div>
                </div>
                <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
                    <div className="container mx-auto w-full h-full">
                        <div className="relative wrap overflow-hidden p-10 h-full">

                            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                <div className="order-1 w-5/12"></div>
                                <div className="order-1 w-5/12 px-1 py-4 text-right">
                                    <p className="mb-3 text-base text-blue-500">10 to 24 Dec 2021</p>
                                    <h4 className="mb-3 font-bold text-lg md:text-2xl">Babys Attack on Polygon Matic</h4>
                                    <p className="text-base text-gray-300">
                                        Zero prepara seu primeiro ataque contra a Blockchain, indo direto na Matic.
                                    </p>
                                </div>
                            </div>
                            <div className="mb-8 flex justify-between items-center w-full right-timeline">
                                <div className="order-1 w-5/12"></div>
                                <div className="order-1  w-5/12 px-1 py-4 text-left">
                                    <p className="mb-3 text-base text-blue-500">07 to 21 Jan 2022</p>
                                    <h4 className="mb-3 font-bold text-lg md:text-2xl">Babys Attack on Binance Smart Chain</h4>
                                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                                        Acompanhar as evoluções que existem no seu mercado, e as novas demandas de seus clientes.
                                    </p>
                                </div>
                            </div>
                            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                <div className="order-1 w-5/12"></div>
                                <div className="order-1 w-5/12 px-1 py-4 text-right">
                                    <p className="mb-3 text-base text-blue-500">47.642133, -122.136548</p>
                                    <h4 className="mb-3 font-bold text-lg md:text-2xl">Pesquisa Espacial</h4>
                                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                                        Testar novos públicos, produtos e serviços para aumentar velocidade de evolução do seu negócio.
                                    </p>
                                </div>
                            </div>

                            <div className="mb-8 flex justify-between items-center w-full right-timeline">
                                <div className="order-1 w-5/12"></div>

                                <div className="order-1  w-5/12 px-1 py-4">
                                    <p className="mb-3 text-base text-blue-500">39.9724515, 116.3293496</p>
                                    <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">Mineração de Asteroídes</h4>
                                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                                        Ter um objetivo com seus clientes já traçado, faltando apenas a tecnologia e o caminho para fazer isso.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}