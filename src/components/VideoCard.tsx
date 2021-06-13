import { useState, useEffect } from 'react';

import { Videos } from '../Types/TypesList'

type VideoCardProps = {
    data: Videos,
    setVideoDisplay: (video: Videos) => void
}

export default function VideoCard({ data, setVideoDisplay }: VideoCardProps) {

    const videoData = data;
    const [searchedVideo, setSearchedVideo] = useState<any>();

    useEffect(() => {
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBvB-BitIcApU0hr-1D6GzR-YmPKgFTjJQ&q=${data.title}`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => setSearchedVideo(data))
    }, [data.title]);

    return (
        <div className="ytbMinia" onClick={() => setVideoDisplay(searchedVideo.items[0])}>
            {
                searchedVideo
                    ? <img src={searchedVideo.items[0].snippet.thumbnails.default.url}
                        alt={searchedVideo.title} />
                    : `${videoData.title}`
            }

        </div>
    )
}