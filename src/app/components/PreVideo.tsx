'use client'

import VideoPlayer from "./VideoPlayer"

export default function PreVideo({ number }: { number: number }) {
    return (
        <div className="bg-white rounded-lg shadow">
            <VideoPlayer title={`Video title ${number + 1}`} video={""} />
            <div className="p-4">
                <h2 className="text-lg font-bold">Video Title {number + 1}</h2>
                <p className="text-sm text-gray-500">Category 1</p>
            </div>
        </div>
    )
}