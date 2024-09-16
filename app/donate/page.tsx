import React from 'react'
// import Donate from '@/components/forms/donate'
import dynamic from 'next/dynamic';

const Donate = dynamic(
    () => import("@/components/forms/donate"),
    { ssr: false }
);

const page = () => {
    return (
        <div>
            <Donate />
        </div>
    )
}

export default page
