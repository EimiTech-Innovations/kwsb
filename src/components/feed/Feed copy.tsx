import { events } from "../../data/events"
import { Button } from "../ui/button"
import Events from "./Events"
import MonthlyProgram from "./MonthlyProgram"
import SundayProgram from "./SundayProgram"


const Feed = () => {
    return (
        <section className="  bg-gray-200">
            <div className="container px-5 py-24 mx-auto flex flex-wrap-reverse md:flex-nowrap">

                <div className="w-3/8">
                    <h3 className="text-2xl font-bold">List of Events</h3>
                    <hr className="px-5 border-b-0 border-gray-400" />
                    <div className="flex md:mt-4 mt-6 border-b border-gray-200 py-2">
                        <Events events={events.slice(0, 7)} />


                    </div>
                    <Button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded">View All</Button>
                </div>

                <div className="md:w-3/5 md:pl-6">

                    <h3 className=" text-2xl font-bold">Programs</h3>
                    <hr className="px-5 border-b-0 border-gray-400" />
                    <MonthlyProgram />
                    <SundayProgram />
                </div>
            </div>
        </section>
    )
}

export default Feed