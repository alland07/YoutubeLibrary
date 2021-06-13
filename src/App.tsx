import Library from './components/Library';
import VideoDisplay from './components/VideoDisplay';
import SearchVideo from './components/SearchVideo';

import { User, Videos } from './Types/TypesList';

import { useState, useEffect } from 'react';

function App() {

  //Set User
  const [user, setUser] = useState<User>();
  //Video clicked in VideoCard
  const [videoDisplay, setVideoDisplay] = useState<Videos | any>();
  // Boolean de barre de recherche
  const [displaySearchVideo, setDisplaySearchOrVideo] = useState<any>(false);

  // Fetch user datas
  useEffect(() => {
    fetch("http://localhost:8400", {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => setUser(data))
  }, []);

  return (
    <div className="App">
      {user ? <Library user={user} setVideoDisplay={setVideoDisplay} setDisplaySearchOrVideo={setDisplaySearchOrVideo} />
        : <h1>Chargement</h1>}

      {/* Library component which displays the lib name + videos in the lib or the search bar */}
      <div className="SearchAndDisplay">
        {!displaySearchVideo ? <VideoDisplay video={videoDisplay} /> : <SearchVideo />}
      </div>
    </div>
  );
}
export default App;
