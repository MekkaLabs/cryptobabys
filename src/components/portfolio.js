import Image from "next/image"

export default function Portfolio() {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-4 gap-2 md:grid-cols-6 lg:grid-cols-8">
                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                        <Image
                            src="/crypto-babies-001-site.jpg"
                            width={200}
                            height={200}
                        />
                    </div>
                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                        <Image
                            src="/crypto-babies-002-site.jpg"
                            width={200}
                            height={200}
                        />
                    </div>
                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                        <Image
                            src="/crypto-babies-003-site.jpg"
                            width={200}
                            height={200}
                        />
                    </div>
                    <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                        <Image
                            src="/crypto-babies-004-site.jpg"
                            width={200}
                            height={200}
                        />
                    </div>
                    <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
                        <Image
                            src="/crypto-babies-005-site.jpg"
                            width={200}
                            height={200}
                        />
                    </div>
                    <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
                        <Image
                            src="/crypto-babies-006-site.jpg"
                            width={200}
                            height={200}
                        />
                    </div>
                    <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
                        <Image
                            src="/crypto-babies-007-site.jpg"
                            width={200}
                            height={200}
                        />
                    </div>

                    <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
                        <Image
                            src="/crypto-babies-003-site.jpg"
                            width={200}
                            height={200}
                        />
                    </div>

                </div>
            </div>


        </div>
    )
}