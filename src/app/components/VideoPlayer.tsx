'use client'
import { useState } from "react"

export default function VideoPlayer({ title, video }: { title: string, video: string }) {
    const [open, setOpen] = useState(false)

    const handleClose = (e: any) => {
        if (e.target.tagName !== "VIDEO") setOpen(false)

    }

    return (
        <>
            <img src="https://generated.vusercontent.net/placeholder.svg" alt="Video thumbnail" onClick={() => setOpen(!open)}
                className="w-full h-48 object-cover" width="350" height="200" style={{ aspectRatio: '350/200', objectFit: 'cover' }} />
            {
                open &&
                <div className={`transition-opacity duration-500 ease-out opacity-0 hover:opacity-100 w-full min-h-screen bg-opacity-60 bg-black flex fixed justify-center items-center top-0 left-0 text-white`} onClick={handleClose}>
                    <div className="w-full flex justify-between fixed top-0 right-0">
                        <div></div>
                        {title}
                        <button onClick={() => setOpen(false)} type="button" className="p-2 inline-flex items-center justify-center text-gray-400 hover:text-red-500 ">
                            <span className="sr-only">Close menu</span>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <video className="z[1090] w-full lg:w-1/2 object-cover m-5" style={{ aspectRatio: '450/300' }} controls>
                        <source src="/videso.mp4" />
                    </video>
                </div >
            }

        </>
    )
}