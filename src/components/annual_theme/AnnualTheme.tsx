import { useEffect, useState } from "react";
import { Button } from "../ui/button"


const AnnualTheme = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);
  return (

    <section className={`slide-up ${visible ? "visible" : ""}  text-gray-600 body-font py-24`}>
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 rounded-lg overflow-hidden">
          <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/iEiRozc34ek?si=xMNdtqvmx0SYhWq-&amp;controls=0"
            title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
            picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"> "Hunguvin Pakai Henga Kile Kit
            <br className="hidden lg:inline-block" /> tau hite..."
          </h1>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"> ~ Hosea 10:10
          </h1>
          <p className="mb-8 leading-relaxed"> Kum thup by ~ Rev. Minlen Haokip Pastor KWSB</p>
          <div className="flex justify-center">
            <Button className=" inline-flex text-white bg-indigo-500 border-0 py-6 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg hover:cursor-pointer">Read more..</Button>
          </div>
        </div>
      </div>
    </section>

  )
}

export default AnnualTheme