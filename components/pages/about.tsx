import Image from 'next/image'
import React from 'react'
import style from '@/assets/styles/about.module.css'
import AccordionComp from '../section/accordion'
import { aboutItems } from '@/utils/data'
import about from '@/assets/images/team.jpg'
import teamphoto from '@/assets/images/team-building.jpg'
import { team } from '@/utils/link'
import { FaGithub } from "react-icons/fa";
import me from '@/assets/images/IMG_5656.jpg'

const About = () => {
    return (
        <div className='relative overflow-x-hidden dark:bg-black dark:text-white'>
            <div
                className={style.hero}
                style={{
                    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.56)), url(${teamphoto.src})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                }}
            >
                <div className={style.heroText}>
                    <h2>We are</h2>
                    <h1>Essential Aid.</h1>
                </div>
            </div>
            <div className={style.about}>
                <div className={style.blurb}>
                    <h1 className='font-extrabold text-center text-4xl'>About Us</h1>
                    <p>
                        At Essential Aid, we are committed to providing immediate and impactful support to communities in need. Our mission is to deliver essential resources, including food, healthcare, education, and disaster relief, to vulnerable populations worldwide. We believe in fostering resilience and empowering individuals to rebuild and thrive after crises. Through collaborative efforts, we aim to make a lasting difference, ensuring that aid reaches those who need it most.
                    </p>
                </div>
                <div className={style.detailedInfo}>
                    <div className={style.textSection}>
                        <h1 className='font-extrabold text-center text-4xl'>Our Vision</h1>
                        <p>
                            At Essential Aid, we To create a world where every individual has access to essential resources and opportunities, empowering communities to thrive with dignity and resilience.
                        </p>

                        <div className='mt-5'>
                            <h1 className='font-extrabold text-center text-4xl'>Our Mission</h1>
                            <AccordionComp accordionItems={aboutItems} />
                        </div>
                    </div>
                    <div className={style.imageSection}>
                        <Image
                            src={about}
                            width={350}
                            height={350}
                            alt="IMAGE ABOUT US"
                        />
                        <p className={style.imageCaption}>EA</p>
                    </div>
                </div>
            </div>
            <div className="py-14 max-w-screen-xl mx-auto px-4 md:px-24">
                <div className="max-w-xl">
                    <h3 className="text-3xl font-semibold sm:text-4xl">
                        Meet our team
                    </h3>
                    {/* <p className="mt-3">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy.
                    </p> */}
                </div>
                <div className="mt-10">
                    <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            team.map((item, idx) => (
                                <li key={idx} className="flex gap-4 items-center">
                                    <div className="flex-none w-24 h-24">
                                        <img
                                            src={me.src}
                                            className="w-full h-full rounded-full"
                                            alt="Avatar"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold sm:text-lg">{item.name}</h4>
                                        <p className="text-indigo-600">{item.title}</p>
                                        <div className="mt-3 flex gap-4 text-gray-400">
                                            <a href={item.twitter}>
                                                <FaGithub className='hover:text-gray-500' size={20} />
                                                {/* <svg className="w-5 h-5 duration-150 hover:text-gray-500" fill="currentColor" viewBox="0 0 48 48"><g clipPath="url(#clip0_17_80)"><path fill="currentColor" d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z" /></g><defs><clipPath id="clip0_17_80"><path fill="currentColor" d="M0 0h48v48H0z" /></clipPath></defs></svg> */}
                                            </a>
                                            <a href={item.linkedin}>
                                                <svg className="w-5 h-5 duration-150 hover:text-gray-500" fill="none" viewBox="0 0 48 48"><g clipPath="url(#clip0_17_68)"><path fill="currentColor" d="M44.447 0H3.544C1.584 0 0 1.547 0 3.46V44.53C0 46.444 1.584 48 3.544 48h40.903C46.407 48 48 46.444 48 44.54V3.46C48 1.546 46.406 0 44.447 0zM14.24 40.903H7.116V17.991h7.125v22.912zM10.678 14.87a4.127 4.127 0 01-4.134-4.125 4.127 4.127 0 014.134-4.125 4.125 4.125 0 010 8.25zm30.225 26.034h-7.115V29.766c0-2.653-.047-6.075-3.704-6.075-3.703 0-4.265 2.896-4.265 5.887v11.325h-7.107V17.991h6.826v3.13h.093c.947-1.8 3.272-3.702 6.731-3.702 7.21 0 8.541 4.744 8.541 10.912v12.572z" /></g><defs><clipPath id="clip0_17_68"><path fill="currentColor" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About