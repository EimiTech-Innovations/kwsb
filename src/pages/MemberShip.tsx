

// interface Member {
//     name: string,
//     dob: string,
//     maritalStatus: string,
//     guardianName: string,
//     currentAddress: string,
//     permanentAddress: string,
//     phone: string,
//     email: string,
// }

import { Button } from "../components/ui/button"

const MemberShip = () => {
    return (
        <div>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-14 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">KWSB MEMBERS</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base"> Search for KWSB member details by name or phone number.</p>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                    <input placeholder="Enter member name" type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone Number</label>
                                    <input placeholder="Enter member phone number" type="text" id="phone" name="phone" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            {/* TODO: add recaptcha over here */}
                            <div className="p-2 w-full">
                                <Button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Search</Button>
                            </div>

                        </div>
                    </div>
                </div>


                {/* search result */}

                <div className="container px-5 mx-auto pb-20">
                    <div className="flex flex-col text-center w-full mb-5">
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base"> Member search Result</p>
                    </div>
                    <div className=" w-full mx-auto overflow-auto">
                        <table className="table-auto w-full text-left whitespace-no-wrap">
                            <thead>
                                <tr>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Name</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Phone Number</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Email</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Date of Birth</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Marital Status </th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Guardian Name</th>
                                    <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br">currentAddress</th>
                                    <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br">Permanent Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="px-4 py-3">Mamang Touthang</td>
                                    <td className="px-4 py-3">88875846932</td>
                                    <td className="px-4 py-3">mang@gmail.com</td>
                                    <td className="px-4 py-3 text-lg text-gray-900">12/12/12</td>
                                    <td className="px-4 py-3 text-lg text-gray-900">single</td>
                                    <td className="px-4 py-3 text-lg text-gray-900">Veineikim touthang</td>
                                    <td className="px-4 py-3 text-lg text-gray-900">Kothanur</td>
                                    <td className="px-4 py-3 text-lg text-gray-900">Saikul</td>

                                </tr>

                            </tbody>
                        </table>
                    </div>

                </div>
            </section>
        </div >
    )
}

export default MemberShip