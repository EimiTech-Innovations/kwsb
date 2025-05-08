import kwsbLogo from "../../assets/Images/kwslogo.ico"

const Footer = () => {
    return (
        <footer className="text-gray-600 body-font">
            <div className="container px-5 py-6 mx-auto flex  md:flex-nowrap flex-wrap items-center justify-center">
                <div className=" flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    {/* TODO: align everything center */}
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <img src={kwsbLogo} alt="KWSB Logo" className="w-20 h-20 rounded-full" />
                        <span className="ml-3 text-xl">KWS Bangalore</span>
                    </a>
                    <p className="mt-2 text-sm text-gray-500"> Develop & maintain by KWSB media team</p>
                </div>

            </div>
            <div className="bg-gray-100">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-gray-500 text-sm text-center sm:text-left">© 2025 Kuki Worship Service —

                        <a title="mail to KWS Bangalore" href="mailto:kwsbangalore@gmail.com" rel="noopener noreferrer" className="text-gray-600 ml-1 hover:text-blue-500" target="_blank">kwsbangalore@gmail.com</a>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <a title="KWS Bangalore Facebook Page" className="text-gray-500  hover:text-blue-500" href="https://www.facebook.com/groups/kwsbangalore" target="_blank" rel="noopener noreferrer">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>

                        <a className="ml-3 text-gray-500" title="Instagram yet to be launch!">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>

                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer