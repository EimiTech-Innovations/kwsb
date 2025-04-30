import AboutUs from "../components/aboutUs/AboutUs"
import AnnualTheme from "../components/annual_theme/AnnualTheme"
import Feed from "../components/feed/Feed"
import ImageGallery from "../components/gallery/ImageGallery"
import Hero from "../components/hero/Hero"
import Team from "../components/Team/Team"
import VideoFeed from "../components/Video/VideoFeed"


const Home = () => {
    return (
        <>
            <Hero />
            <AnnualTheme />
            <Feed />
            <ImageGallery />
            <VideoFeed />
            <AboutUs />
            <Team />
        </>

    )
}

export default Home