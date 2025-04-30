import { Button } from "../ui/button"

const AboutUs = () => {
    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4316.867278913779!2d77.64527747546956!3d13.054834713047162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1756aa15193f%3A0x445afbe16241d0ec!2sKWS%20Bangalore%20Church!5e1!3m2!1sen!2sin!4v1746036298894!5m2!1sen!2sin" width="100%" height="100%" className="absolute inset-0" ></iframe>
                    <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                            <p className="mt-1">95/1, Byrathi Cross, Oppt. St. Theresa School, Kothanur, Bangalore - 560077 </p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                            <a className="text-indigo-500 leading-relaxed">kwsbangalore@gmail.com</a>
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                            <p className="leading-relaxed">123-456-7890</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact us</h2>
                    <p className="leading-relaxed mb-5 text-gray-600"> Fill in the form to get in touch.</p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    <Button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</Button>
                    {/* TODO: clickable button for more */}
                    <p className="text-xs text-gray-500 mt-3"> click here to learn more about us -&gt;</p>
                </div>
            </div>
        </section>
    )
}

export default AboutUs