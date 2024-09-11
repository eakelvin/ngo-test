"use client"
import React, { useState } from 'react'
import Spinner from '../ui/spinner'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { useForm, SubmitHandler } from 'react-hook-form'
import { RxEnvelopeClosed } from 'react-icons/rx'
import { IoCallOutline } from 'react-icons/io5'
import toast from 'react-hot-toast'
import axios from 'axios'

const Contact = () => {
    const [loading, setLoading] = useState<Boolean>(false);
    const {
        register, handleSubmit, formState: { errors }, reset
    } = useForm<ContactValues>({ mode: "onChange" });

    const onSubmit: SubmitHandler<ContactValues> = async (data) => {
        try {
            setLoading(true);
            const response = await axios.post(
                `${process.env.BASE_URL}/messages/create`,
                data
            );
            if (response.status === 201) {
                toast.success('Message Sent Successfully!');
            };
            // console.log(response);
        } catch (error) {
            console.error('Failed to send email:', error);
            toast.error("Uh oh! Something went wrong.");
        } finally {
            setLoading(false);
            reset();
        }
    };

    return (
        <div className="mx-auto max-w-7xl px-8 py-14 lg:p-12">
            <div className=''>
                <h1 className='font-extrabold text-3xl'>Contact</h1>
                <p className='mt-2 font-normal text-base'>
                    We are available to respond to you. Send us your enquiries for swift respond
                </p>
            </div>
            <div className="flex items-stretch justify-center mt-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-1 w-full bg-[#FFFFFF] shadow md:p-2 p-5 h-full">
                        <ul className="">
                            <li className='mb-4'>
                                <div className='ml-4 flex flex-row items-center'>
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#040D7F] text-gray-50">
                                        <IoCallOutline size={20} />
                                    </div>
                                    <h3 className="ml-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                                        Call Us
                                    </h3>
                                </div>
                                <div className="my-4">
                                    <p className="text-gray-600 dark:text-slate-400">We are available within 48 hours</p>
                                    <p className="text-gray-600 dark:text-slate-400">Phone: 0211110009</p>
                                    <p className=" text-gray-600 dark:text-slate-400">Email: essentialaid@gmail.com</p>
                                </div>
                            </li>
                            <hr className="h-px my-8 bg-black border-0" />
                            <li className='mt-5'>
                                <div className='ml-4 flex flex-row items-center'>
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#040D7F] text-gray-50">
                                        <RxEnvelopeClosed size={20} />
                                    </div>
                                    <h3 className="ml-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                                        Send us a Message
                                    </h3>
                                </div>
                                <div className="ml-4 my-4">
                                    <p className="mb-2 text-gray-600 dark:text-slate-400">
                                        Fill out our form and we will contact you within 24 hours
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="md:col-span-2 w-full shadow card h-full max-w-6xl p-5 md:p-12">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-6">
                                <div className="md:flex md:flex-row md:space-x-4 space-y-3 md:space-y-0">
                                    <div className="w-full mx-0 mb-1 sm:mb-4">
                                        <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider"></label>
                                        <Input
                                            type="text"
                                            placeholder="Your Name*"
                                            className="mb-2 bg-[#F5F5F5] border border-gray-400 shadow-md dark:text-gray-300 sm:mb-0"
                                            {...register("name")}
                                            required
                                        />
                                    </div>
                                    <div className="w-full mx-0 mb-1 sm:mb-4">
                                        <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider"></label>
                                        <Input
                                            type="email"
                                            placeholder="Your Email*"
                                            className="mb-2 bg-[#F5F5F5] border-gray-400 shadow-md dark:text-gray-300 sm:mb-0"
                                            {...register("email")}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="mx-0 mb-1 sm:mb-4 mt-3 md:mt-3">
                                    <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider"></label>
                                    <textarea
                                        cols={30}
                                        rows={7}
                                        placeholder="Your Message"
                                        className="mb-2 w-full bg-[#F5F5F5] rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md0 sm:mb-0"
                                        {...register("message")}
                                        required
                                    >
                                    </textarea>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <Button type='submit'>
                                    {loading ? <Spinner /> : 'Send Message'}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
