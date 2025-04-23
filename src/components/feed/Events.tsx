import { Event } from "../../types/event"

type Props = {
    events: Event[];
}

const Events = ({ events }: Props) => {
    return (
        <div>

            <ul className="w-full">
                {events.map((event) => (
                    <>

                        <li key={event.id} className="py-3">
                            <strong>{event.eventName}</strong> <br />
                            <span className="text-sm">{event.eventDate.toLocaleDateString()}</span>
                        </li>
                        <hr className="border-b-0 border-gray-400 border-dashed" />

                    </>


                ))}
            </ul>
        </div>
    )
}
export default Events