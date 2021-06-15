import { useState } from 'react';

import VideoCard from './VideoCard';

import { User, Videos } from '../Types/TypesList';

type LibraryProps = {
    user: User,
    setVideoDisplay: (video: Videos) => void,
    setDisplaySearchOrVideo: (arg: any) => void,
    displayBoolean: boolean
}

function Library({ user, setVideoDisplay, setDisplaySearchOrVideo, displayBoolean }: LibraryProps) {

    //onChange Filtered
    const [filtered, setFiltered] = useState<string>('');

    //Filter by app name
    let VIDEOS;
    if (filtered) {
        VIDEOS = user.videos.filter(app => app.title.toLowerCase().indexOf(filtered.toLowerCase()) !== -1)
            .map((datas, i) => {
                return (
                    <div key={i} className="userVideo">
                        <h1>{datas.title}</h1>
                        <VideoCard setVideoDisplay={setVideoDisplay} data={datas} user={user} />
                    </div>
                )
            })
    }
    else {
        VIDEOS = user.videos.map((datas, i) => {
            return (
                <div key={i} className="userVideo">
                    <h1>{datas.title}</h1>
                    <VideoCard setVideoDisplay={setVideoDisplay} data={datas} user={user} />
                </div>
            )
        })
    }


    return (
        <div className="lib_container">
            <div className="lib_name_container">
                <h1>{user.libName}</h1>
                <div className="displaySearch">
                    {!displayBoolean
                        ? < button onClick={() => { setDisplaySearchOrVideo((prevState: boolean) => !prevState) }}>Ajouter une vidéo à ma librairie</button>
                        : < button onClick={() => { setDisplaySearchOrVideo((prevState: boolean) => !prevState) }}>Retourner sur ma librairie</button>
                    }
                </div>
                <input type="text" onChange={(e) => setFiltered(e.target.value)} placeholder="Filtrer ma librairie"></input>
                <div className="Videos">
                    {VIDEOS}
                </div>
            </div>
        </div >
    );
}

export default Library;