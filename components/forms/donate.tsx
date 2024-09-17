"use client"
import axios from 'axios';
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { BiDonateHeart, BiDonateBlood } from "react-icons/bi";
import Spinner from '../ui/spinner';
import { PaystackButton } from 'react-paystack'
import Link from 'next/link';

const Donate = () => {
    const [loading, setLoading] = useState<Boolean>(false);
    const {
        register, handleSubmit, watch, formState: { errors }, reset
    } = useForm<DonateValues>({ mode: "onChange" });
    const data = watch();
    const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_TEST_PUBLIC_KEY!

    const componentProps = {
        publicKey,
        email: data.email,
        amount: data.amount * 100,
        currency: 'GHS',
        text: 'Donate',
        onSuccess: () => toast.success("Thank you for donating"),
        onclose: () => alert("Are you sure you want to close?")
    };

    const onSubmit: SubmitHandler<FooterValues> = async (data) => {
        try {
            setLoading(true);
            // const response = await axios.post(
            //     `${process.env.BASE_URL}/paystack/pay`,
            //     data
            // );
            // toast.success("Email Subscribed Successfully!");
            // console.log('Email Subscribed Successfully!', response.data);
            // console.log('Success:', data);
        } catch (error) {
            console.error('Failed to send email:', error);
            toast.error("Uh oh! Something went wrong.")
        } finally {
            setLoading(false);
            reset();
        }
    };

    return (
        <div className="h-screen md:flex">
            <div
                className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
                <div>
                    <h1 className="text-white font-bold text-4xl font-sans">Essential Aid</h1>
                    <p className="text-white mt-1">
                        We're on a mission to support communites in need. You can join us. No matter how much you give, every cent funds projects around the world.
                    </p>
                </div>
                <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
            </div>
            <div className="flex md:w-1/2 justify-center py-10 items-center">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="bg-white"
                >
                    <Link
                        className='text-blue-500 mb-5'
                        href={'/'}
                    >
                        Return Home
                    </Link>
                    <h1 className="flex items-center gap-2 font-bold text-2xl mb-1">
                        Donate Now
                        <BiDonateHeart />
                    </h1>
                    <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                clipRule="evenodd" />
                        </svg>
                        <input
                            className="pl-2 outline-none border-none"
                            type="text"
                            placeholder="Full name"
                            {...register("name")}
                            required
                        />
                    </div>
                    <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                        </svg>
                        <input
                            className="pl-2 outline-none border-none"
                            type="number"
                            {...register("number")}
                            placeholder="Number"
                        // required
                        />
                    </div>
                    <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                        </svg>
                        <input
                            className="pl-2 outline-none border-none"
                            type="text"
                            {...register("email")}
                            placeholder="Email Address"
                            required
                        />
                    </div>
                    <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                        <BiDonateBlood className='text-gray-400' size={20} />
                        <input
                            type="number"
                            {...register("amount")}
                            placeholder="Amount"
                            className="pl-2 outline-none border-none"
                            required
                        />
                    </div>
                    {/* <button
                        type="submit"
                        className=""
                    >
                        {loading ? <Spinner /> : 'Donate'}
                    </button> */}
                    <PaystackButton
                        className='block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2'
                        {...componentProps}
                    />
                </form>
            </div>
        </div>
    )
}

export default Donate
