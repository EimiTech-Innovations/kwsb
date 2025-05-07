import { sundayProgram } from "../../data/program"
import { Button } from "../ui/button"


const SundayProgram = () => {
    return (
        <section className=" body-font">
            <div className="container mx-auto py-2">
                <h3 className="text-xl font-bold">Sunday service & Events</h3>
                <div className="flex flex-wrap -m-4">
                    {
                        sundayProgram.slice(0, 3).map((event, index) => (

                            event.url === "" ? null :
                                <div className="lg:w-2/6 md:w-1/2 p-4 w-full " key={index}>
                                    <a className="lg:block lg:relative h-48  rounded border-0 overflow-hidden md:border border-gray-400 box-shadow-xl hover:shadow-xl">
                                        <img alt="program"
                                            className="  w-full h-full object-cover transition-transform duration-300 hover:scale-150"
                                            src={event.url} />
                                    </a>
                                    <div className="mt-4">
                                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{event.date}</h3>
                                        <h2 className="text-gray-900 title-font text-lg font-medium">{event.name}</h2>

                                    </div>
                                </div>
                        ))
                    }

                    <div className="w-full text-right -mt-4 mb-2 mr-4">
                        <Button className="inline-flex  text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded">View All</Button>
                    </div>




                </div>
            </div>
        </section>
    )
}

export default SundayProgram