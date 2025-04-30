import heroImage from "../../assets/Images/heroImage.jpeg"
import { useEffect, useState } from "react";
const Hero = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
    }, []);

    return (
        <section className={`slide-up ${visible ? "visible" : ""}`}>
            <div className="h-96 absolute w-full bg-gradient-to-b from-transparent via-transparent to-black/70"></div>
            <img
                className="h-96 w-full object-cover"
                src={heroImage}
                alt="KWS Bangalore church"
            />
        </section >


    );
};

export default Hero;