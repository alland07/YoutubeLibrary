import { useState } from 'react';

import { User } from '../App';

type LibraryProps = {
    user: User
}

function Library({ user }: LibraryProps) {

    const [searchOrVideo, setSearchOrVideo] = useState('');
    console.log(user.libName);

    return (
        <div className="lib_container">
            <div className="lib_name_container">
                <h1>{user.libName}</h1>
                <div className="displaySearch">
                    <button onClick={() => { setSearchOrVideo("Search") }}>Ajouter une vidéo à ma librairie</button>
                </div>
                <div className="Videos">

                </div>
            </div>
        </div>
    );
}

export default Library;