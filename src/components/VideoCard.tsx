import { useState, useEffect } from 'react';

import { Videos, User } from '../Types/TypesList'

type VideoCardProps = {
    data: Videos,
    user: User
    setVideoDisplay: (video: Videos) => void,
}

export default function VideoCard({ data, setVideoDisplay, user }: VideoCardProps) {

    const videoData = data;
    const usrName = user.name;
    const [searchedVideo, setSearchedVideo] = useState<any>();

    useEffect(() => {
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBvB-BitIcApU0hr-1D6GzR-YmPKgFTjJQ&q=${data.title}`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => setSearchedVideo(data))
    }, [data.title]);

    const handleDelete = () => {
        let app = {
            ...data, usrName
        };
        fetch('http://localhost:8400/delete', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(app)
        })
            .then(response => response.json())
            .catch(err => console.log(err));
        document.location.reload();
    }

    return (
        <>
            <button onClick={handleDelete}>X</button>
            <div className="ytbMinia" onClick={() => setVideoDisplay(searchedVideo.items[0])}>
                {
                    searchedVideo
                        ? <img src={searchedVideo.items[0].snippet.thumbnails.default.url}
                            alt={searchedVideo.title} />
                        : `${videoData.title}`
                }

            </div>
        </>
    )
}