import heroImage from "../../assets/Images/heroImage.jpeg"

const Hero = () => {
    return (
        <>
            <div className="h-96 absolute w-full bg-gradient-to-b from-transparent via-transparent to-black/70"></div>
            <img
                className="h-96 w-full object-cover"
                src={heroImage}
                alt="KWS Bangalore church"
            />
        </ >


    );
};

export default Hero;