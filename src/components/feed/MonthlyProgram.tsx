import { Button } from "../ui/button"


const MonthlyProgram = () => {
    return (
        <section className=" body-font">
            <div className="container px-5 mx-auto py-2">
                <h3 className="text-xl font-bold">Monthly Program</h3>
                <div className="flex flex-wrap -m-4">
                    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <a className="block relative h-48 rounded overflow-hidden">
                            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/425x265" />
                        </a>
                        <div className="mt-4">
                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">23/04/2025</h3>
                            <h2 className="text-gray-900 title-font text-lg font-medium">February</h2>

                        </div>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <a className="block relative h-48 rounded overflow-hidden">
                            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/427x267" />
                        </a>
                        <div className="mt-4">
                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">23/04/2025</h3>
                            <h2 className="text-gray-900 title-font text-lg font-medium">March</h2>

                        </div>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <a className="block relative h-48 rounded overflow-hidden">
                            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/428x268" />
                        </a>
                        <div className="mt-4">
                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">23/04/2025</h3>
                            <h2 className="text-gray-900 title-font text-lg font-medium">April</h2>

                        </div>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <a className="block relative h-48 rounded overflow-hidden">
                            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/428x268" />
                        </a>
                        <div className="mt-4">
                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">23/04/2025</h3>
                            <h2 className="text-gray-900 title-font text-lg font-medium">May</h2>

                        </div>
                    </div>
                    <div className="w-full text-right -mt-6 mb-2 mr-4">
                        <Button className="inline-flex  text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded">View All</Button>
                    </div>




                </div>
            </div>
        </section>
    )
}

export default MonthlyProgram