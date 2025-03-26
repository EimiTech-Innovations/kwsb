import heroImage from "../../assets/Images/heroImage.png"

const Hero = () => {
    return (
        <img
            className="h-96 w-full object-cover"
            src={heroImage}
            alt="KWS Bangalore church"
        />

    );
};

export default Hero;