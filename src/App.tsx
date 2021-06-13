import Library from './components/Library';
import VideoDisplay from './components/VideoDisplay';
import { User, Videos } from './Types/TypesList';

import { useState, useEffect } from 'react';

function App() {

  const [user, setUser] = useState<User>();
  const [videoDisplay, setVideoDisplay] = useState<Videos | any>();

  useEffect(() => {
    fetch("http://localhost:8400", {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => setUser(data))
  }, []);

  console.log(videoDisplay);
  return (
    <div className="App">
      {user ? <Library user={user} setVideoDisplay={setVideoDisplay} /> : <h1>Chargement</h1>}
      {/* Library component which displays the lib name + videos in the lib */}
      <div className="SearchAndDisplay">
        {videoDisplay ? <VideoDisplay video={videoDisplay} /> : null}
      </div>
    </div>
  );
}

export default App;
