"use client"
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { IoMdPlay } from "react-icons/io";
import Link from 'next/link';
import { faqs, takes } from '@/utils/data';
import AccordionComp from '../section/accordion';
import faq from '@/assets/images/faq.png'
import MarqueeComp from '../ui/marquee';
import SwiperCards from '../ui/swiper';

const HomePage = () => {
    return (
        <div className="mt-10 mx-auto max-w-screen-xl pb-10 px-4 sm:px-8">
            <div>
                <div className="text-center space-y-4">
                    <h1 className="font-bold text-2xl sm:text-3xl md:text-5xl">
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

            <div className="mt-10 grid gap-4">
                <div>
                    <img
                        className="h-auto max-w-full rounded-lg hidden sm:flex"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
                        alt=""
                    />

                    <figure className="relative max-w-full transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 sm:hidden">
                        <img className="rounded-lg h-auto max-w-full" src="https://images.unsplash.com/photo-1701189991917-162ce50220e4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBvb3IlMjBjaGlsZHJlbiUyMGluJTIwYWZyaWNhfGVufDB8fDB8fHww" alt="image description" />
                        <figcaption className="absolute px-4 text-2 text-white font-extrabold bottom-6">
                            <p>Wanna help children in Africa?</p>
                        </figcaption>
                    </figure>
                </div>
                <div className="grid grid-cols-5 gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt="" />
                    </div>
                </div>
            </div>

            <section className="mt-10 py-14 bg-lime-300 rounded-md">
                <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
                    <div className="">
                        <h3 className="text-gray-800 text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
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

            <div className='bg-black text-white rounded-t-md p-5 mt-10'>
                <h1 className='font-extrabold text-xl md:text-2xl mb-6'>Fundraisers in Extreme Need</h1>
                <SwiperCards />
            </div>

            <section className=''>
                <div className="mx-auto sm:px-6 lg:px-8">
                    <div className="relative isolate overflow-hidden px-6 py-24 text-center sm:rounded-3xl sm:px-16">
                        <h2 className="font-nudge-extrabold mx-auto max-w-2xl text-xl md:text-3xl font-bold uppercase tracking-wide">
                            Join our community now
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl text-lg leading-8">
                            Join our community for donating and be a part of a positive change in the world
                        </p>
                        <div className="isolate mt-8 flex items-center justify-center -space-x-2 overflow-hidden">
                            <img className="relative z-30 inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/men/34.jpg" alt="" />
                            <img className="relative z-20 inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/women/2.jpg" alt="" />
                            <img className="relative z-10 inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/women/3.jpg" alt="" />
                            <img className="relative z-0 inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/men/4.jpg" alt="" />
                            <span className="!ml-2 font-bold italic text-teal-500">Join these awesome members</span>
                        </div>
                        <div className='mt-5'>
                            <p className='font-extrabold text-6xl'>120, 859+</p>
                            <p className='mt-6 mb-2'>people already joining</p>
                        </div>
                        <div className="flex items-center justify-center gap-x-6">
                            <Button size={'lg'}>Join Now</Button>
                        </div>
                        <svg viewBox="0 0 1024 1024"
                            className="absolute left-1/2 top-1/2 -z-10 h-[72rem] w-[72rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                            aria-hidden="true">
                            <circle cx="512" cy="512" r="512" fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fill-opacity="0.7"></circle>
                            <defs>
                                <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                                    <stop stop-color="#15b8a6"></stop>
                                    <stop offset="1" stop-color="#15b8a6"></stop>
                                </radialGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            </section>

            <div className='mt-10 p-5'>
                <h1 className='font-bold text-2xl md:text-3xl text-center mb-3'>
                    Companies That Trust Essential Aid
                </h1>
                <MarqueeComp />
            </div>

            <div className="mt-10 bg-green-900 rounded-md">
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

            <section className="mt-10 py-14 rounded-md">
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
                        className="rounded-tr-md rounded-bl-md my-auto"
                        src={faq}
                        alt=""
                        width={400}
                    />
                    <AccordionComp accordionItems={faqs} />
                </div>
            </section>
        </div>
    )
}

export default HomePage

