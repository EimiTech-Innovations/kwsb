// import pr from "../../assets/Images/pastor.jpg"
// import astpr from "../../assets/Images/astpr.jpg"
// import chairman from "../../assets/Images/chairman.jpg"
// import sec from "../../assets/Images/sec.jpg"
// import vice from "../../assets/Images/vice.jpg"
// import astsec from "../../assets/Images/astsec.jpg"
// import fin from "../../assets/Images/fin.jpg"
// import treasure from "../../assets/Images/treasure.jpg"
// import property from "../../assets/Images/pro.jpg"
// import music from "../../assets/Images/music.jpg"
// import info from "../../assets/Images/info.jpg"
// import caretaker from "../../assets/Images/care.jpg"

import executives from "../../data/executive"

function About() {
    return (
        <>
            {/* banner section */}
            <div className="bg-gray-200 py-10">
                <div className=" container h-60 mx-auto ">
                    <div>
                        <a href="
                /">Home</a>
                        <span className="mx-2">/</span>
                        <a href="about" className="font-bold">About Us</a>
                    </div>
                    <div className="text-center py-10">
                        <h1 className="text-3xl font-bold"> About Us </h1>
                        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores sit in quis enim rerum laboriosam voluptatem ad laudantium distinctio ex.</p>
                    </div>
                </div>
            </div>

            {/* body section */}
            <div className="py-20 mx-auto container " >
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tenetur repellendus reprehenderit, in sequi nemo, ea quisquam expedita ducimus, quos distinctio officia eaque. Ipsam inventore minima reprehenderit ipsum temporibus dolore in animi unde quia minus quos, dolorum possimus et numquam nulla labore excepturi quidem. Tempore esse animi in deleniti officiis ducimus quod minus amet quasi nostrum! Qui aliquam id voluptatum recusandae, repellendus fugit exercitationem sapiente architecto molestiae quasi quas odio est vitae, sunt quae animi cum reiciendis necessitatibus ipsa? Dolore ipsum distinctio ratione voluptates nemo? Animi illo blanditiis repudiandae ab quidem, earum mollitia optio iure accusamus nisi architecto! Totam, iure.</p>
            </div>


            {/* executive section */}
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-10">
                    <h1 className="text-2xl font-medium title-font  text-gray-900">OUR TEAM</h1>

                </div>
                <div className="flex flex-wrap -m-4">

                    {
                        executives.map((profile, key) =>
                            <div className="p-4 lg:w-1/4 md:w-1/2">
                                < div key={key} className="h-full flex flex-col items-center text-center" >
                                    <img alt="team" className="hover:scale-110 transition ease-in-out flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={profile.image} />

                                    <div className="w-full" >
                                        <h2 className="title-font font-medium text-lg text-gray-900">{profile.name}</h2>
                                        <h3 className="text-gray-500 mb-3">{profile.portfolio}</h3>
                                        {/* <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p> */}
                                        {/* <span className="inline-flex">
                                            <a className="text-gray-500">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                                </svg>
                                            </a>
                                            <a className="ml-2 text-gray-500">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                                </svg>
                                            </a>
                                            <a className="ml-2 text-gray-500">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                </svg>
                                            </a>
                                        </span> */}
                                    </div>
                                </div>

                            </div>
                        )

                    }



                </div >
            </div >



        </>

    )
}

export default About