import { youtubeVideo } from "../../data/youtube"

const VideoFeed = () => {
    return (
        <section className="text-gray-600 body-font  bg-gray-200">
            <div className="container px-5 py-24 mx-auto">

                <div className="flex w-full mb-20 flex-wrap">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Videos</h1>
                    <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base"> Houbung Events, Kaikhom na program a video jatchom chom ho.... </p>
                </div>
                <div className="flex flex-wrap ">
                    {
                        youtubeVideo.map((video, index) => (
                            <div key={index} className="lg:w-1/3 sm:w-1/2 p-4 ">
                                <div className="flex relative h-56 overflow-hidden rounded-lg hover:scale-105 transition-transform duration-500 ease-in-out">

                                    <iframe className=" shadow-lg hover:shadow-2xl w-full h-full object-cover object-center" src={`https://www.youtube.com/embed/${video.videoId}`} frameBorder="0"></iframe>

                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default VideoFeed