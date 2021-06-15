import Library from './components/Library';
import VideoDisplay from './components/VideoDisplay';
import SearchVideo from './components/SearchVideo';

import { User, Videos } from './Types/TypesList';

import { useState, useEffect } from 'react';

function App() {

  const [currentUser, setCurrentUser] = useState<string>();
  //Set User
  const [user, setUser] = useState<User>();

  const [name, setName] = useState<string>("john");

  //Video clicked in VideoCard
  const [videoDisplay, setVideoDisplay] = useState<Videos | any>();

  // Boolean de barre de recherche
  const [displaySearchVideo, setDisplaySearchOrVideo] = useState<any>(false);

  // Fetch user datas
  useEffect(() => {
    fetch(`http://localhost:8400/?user=${currentUser}`, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        setUser(data)
        setName(data.name)
      })
  }, [currentUser]);

  return (
    <div className="App">
      {user ? <Library user={user} setVideoDisplay={setVideoDisplay} setDisplaySearchOrVideo={setDisplaySearchOrVideo} displayBoolean={displaySearchVideo} />
        : <h1>Chargement</h1>
      }
      {/* Library component which displays the lib name + videos in the lib or the search bar */}
      <div className="SearchAndDisplay">
        {/* Ternary wich decide wich components gonna be displayed */}
        {
          displaySearchVideo
            ? <SearchVideo name={name} />
            : videoDisplay ? <VideoDisplay video={videoDisplay} />
              : <h1 className="title">Veuillez choisir un utilisateur, cliquer sur une vidéo ou ajouter une vidéo à votre librairie</h1>
        }
      </div>
      <div>
        {/* On choisi notre utilisateur afin de Fetch le bon */}
        <p>Veuillez séléctionner un utilisateur</p>
        <button onClick={() => setCurrentUser("john")}>John</button>
        <button onClick={() => setCurrentUser("mark")}>Mark</button>
      </div>

    </div>
  );
}
export default App;
