import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { IoMdPlay } from "react-icons/io";
import Link from 'next/link';

const HomePage = () => {
    return (
        <div className="mt-10 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8">
            <div className="text-center space-y-4">
                <h1 className="text-gray-800 font-bold text-4xl md:text-5xl">
                    Great futures are built <br /> with a small charity
                </h1>
                <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
                    The world's largest social fundraising platform optimized for your charity in a more easy way
                </p>
            </div>
            <div className="mt-5 flex justify-center items-center gap-2">
                <Link href={'/donate'}>
                    <Button size={'lg'}>Donate Now</Button>
                </Link>
                <Button size={'lg'} variant={"secondary"}>
                    <IoMdPlay size={20} />
                    Watch Video
                </Button>
            </div>
        </div>
    )
}

export default HomePage

