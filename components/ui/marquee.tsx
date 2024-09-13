import React from "react";
import Marquee from "react-fast-marquee";
import { images as marqueeImages } from '../../utils/data'
import Image from "next/image";

const MarqueeComp = () => {
    return (
        <div className="w-[100%]">
            <Marquee className="h-16 w-16 mr-7 object-cover" speed={60} gradient={false}>
                {marqueeImages.map((item) => {
                    return (
                        <Image
                            key={item.name}
                            src={item.image}
                            alt={item.name}
                            priority={true}
                            height={50}
                            className="mx-3"
                        />
                    );
                })}
            </Marquee>
        </div>
    );
};

export default MarqueeComp;