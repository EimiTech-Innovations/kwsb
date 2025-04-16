import { Event } from "../../types/event"

type Props = {
    events: Event[];
}

const Events = ({ events }: Props) => {
    return (
        <div>

            <ul>
                {events.map((event) => (
                    <>
                        <hr className="border border-gray-300" />
                        <li key={event.id} className="py-3">
                            <strong>{event.eventName}</strong> <br />
                            <span className="text-sm">{event.eventDate.toLocaleDateString()}</span>
                        </li>

                    </>


                ))}
            </ul>
        </div>
    )
}
export default Events