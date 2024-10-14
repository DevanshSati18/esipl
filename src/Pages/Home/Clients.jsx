import React from "react";
import { useSpring, animated } from "@react-spring/web";

// Import all images from the Clients folder
const importAll = (r) => r.keys().map(r);
const clientImages = importAll(require.context('../../Assets/Clients', false, /\.(png|jpe?g|svg)$/));

function Clients() {
    // Split images into four rows
    const rows = [];
    const imagesPerRow = Math.ceil(clientImages.length / 4);
    
    for (let i = 0; i < 4; i++) {
        rows.push(clientImages.slice(i * imagesPerRow, (i + 1) * imagesPerRow));
    }
  
    // Animation configuration
    const marqueeAnimation = useSpring({
        from: { transform: "translateX(0%)" },
        to: { transform: "translateX(-100%)" },
        config: { duration: 30000 },
        reset: true,
        loop: true,
    });

    const marqueeReverseAnimation = useSpring({
        from: { transform: "translateX(100%)" },
        to: { transform: "translateX(0%)" },
        config: { duration: 30000 },
        reset: true,
        loop: true,
        delay: 3000,
    });

    return (
        <div className="w-screen h-screen flex items-center justify-center bg-white text-black">
            <div className="w-full max-w-6xl flex flex-col items-center">
                <div className="text-4xl font-medium text-orange-500 mb-2">Our Clients</div>
                <div className="text-lg font-light text-gray-600 mb-10">
                    Earthcon Systems (India) Pvt. Ltd.
                </div>
                
                {rows.map((row, rowIndex) => (
                    <div className="overflow-hidden w-full relative mt-10" key={rowIndex}>
                        <animated.div
                            className="flex whitespace-nowrap"
                            style={marqueeAnimation}
                        >
                            {row.map((el, index) => (
                                <div key={index} className="flex-shrink-0 flex items-center justify-around whitespace-nowrap p-2">
                                    <img src={el} className="w-40 h-auto rounded-lg shadow-md" alt={`client-${index}`} />
                                </div>
                            ))}
                        </animated.div>
                        <animated.div
                            className="absolute top-0 left-0 flex whitespace-nowrap"
                            style={{
                                ...marqueeReverseAnimation,
                                transform: "translateX(-100%)", // Ensure this is the starting position
                            }}
                        >
                            {row.map((el, index) => (
                                <div key={index} className="flex-shrink-0 flex items-center justify-around whitespace-nowrap p-2">
                                    <img src={el} className="w-40 h-auto rounded-lg shadow-md" alt={`client-${index}`} />
                                </div>
                            ))}
                        </animated.div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Clients;