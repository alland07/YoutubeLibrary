import Library from './components/Library';

import { useState, useEffect } from 'react';

type Videos = {
  title: string,
  id: string
}

export type User = {
  name: string,
  videos: Videos[],
  libName: string
}
function App() {

  const [user, setUser] = useState<User>();

  useEffect(() => {
    fetch("http://localhost:8400", {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => setUser(data))
  }, []);

  return (
    <div className="App">
      {user ? <Library user={user} /> : <h1>Chargement</h1>}
      {/* Library component which displays the lib name + videos in the lib */}
      <div className="SearchAndDisplay">

      </div>
    </div>
  );
}

export default App;
