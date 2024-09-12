"use client"
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { IoMdPlay } from "react-icons/io";
import Link from 'next/link';
import paris from '@/assets/images/paris.jpg'
import { faqs, takes } from '@/utils/data';
import AccordionComp from '../section/accordion';
import faq from '@/assets/images/faq.png'

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
            <div>
                <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
                    <Image
                        src={paris}
                        alt="University of Southern California"
                        className="absolute inset-0 h-full w-full object-cover"
                        width={100}
                        height={100}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                    <h3 className="z-10 mt-3 text-3xl font-bold text-white">Paris</h3>
                    <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">City of love</div>
                </article>

                <div className="p-1 flex flex-wrap items-center justify-center">
                    <div className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg">

                        <div className="relative pt-10 px-10 flex items-center justify-center">
                            <div
                                className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                                style={{
                                    background: "radial-gradient(black, transparent 60%)",
                                    transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                                    opacity: "0.2"
                                }}
                            >
                            </div>
                            <img className="relative w-40" src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png" alt="" />
                        </div>
                        <div className="relative text-white px-6 pb-6 mt-6">
                            <span className="block opacity-75 -mb-1">Indoor</span>
                            <div className="flex justify-between">
                                <span className="block font-semibold text-xl">Peace Lily</span>
                                <span className=" bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">$36.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="py-14 bg-lime-300 rounded-md">
                <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
                    <div className="mx-auto">
                        <h3 className="text-gray-800 text-2xl md:text-3xl lg:text-4xl font-semibold">
                            Fundraising on Essential Aid takes <br /> just a few minutes
                        </h3>
                    </div>
                    <div className="mt-12">
                        <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                            {
                                takes.map((item, idx) => (
                                    <li key={idx}>
                                        <div className="w-24 h-24 mx-auto">
                                            <img
                                                src={item.avatar}
                                                className="w-full h-full rounded-full"
                                                alt=""
                                            />
                                        </div>
                                        <div className="mt-2">
                                            <h4 className="text-gray-700 font-semibold sm:text-lg">
                                                {item.name}
                                            </h4>
                                            <p className="text-gray-600 mt-2">{item.desc}</p>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </section>
            <div className="bg-green-900 mt-10 rounded-md">
                <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between text-white sm:flex md:px-8">
                    <div className="flex gap-x-2">
                        <div className="w-10 h-10 flex-none rounded-lg bg-indigo-800 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                            </svg>
                        </div>
                        <p className="py-2 font-extrabold">
                            * let's help each other *
                        </p>
                    </div>
                    <Link href={'/donate'}>
                        <Button variant={'secondary'}>Donate Now</Button>
                    </Link>
                </div>
            </div>
            <section className="mt-10 py-14 bg-slate-400 rounded-md">
                <div className=''>
                    <div className=''>
                        <h1 className="font-bold text-2xl lg:text-3xl text-center">
                            Frequently Asked Questions
                        </h1>
                        <p className="text-center">
                            Here are the most common questions people ask about Essential Aid in relation to it's assistants & services
                        </p>
                    </div>
                    <div className="p-10 md:p-20 grid md:grid-cols-2">
                        <Image
                            className="rounded-tr-[100px] rounded-bl-[100px] my-auto"
                            src={faq}
                            alt=""
                            width={400}
                        />
                        <AccordionComp accordionItems={faqs} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage

