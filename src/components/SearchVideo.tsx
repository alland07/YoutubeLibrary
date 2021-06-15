import { useState } from 'react';

import VideoRequest from './VideoRequest';

interface SearchVideoProps {
    name: string
}

const SearchVideo: React.FC<SearchVideoProps> = ({ name }) => {

    //Search Bar
    const [toSearch, setToSearch] = useState<string>();
    //Resultat de la requête Fetch auprès de l'API
    //Si le nombre de requêtes n'était pas limité, la requête serait dans un useEffect
    //Elle serait donc mise à jour en même temps que le onChange
    const [fetchReturn, setFetchReturn] = useState<any>([]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&key=AIzaSyBvB-BitIcApU0hr-1D6GzR-YmPKgFTjJQ&q=${toSearch}`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => setFetchReturn(data))
    }
    console.log(fetchReturn)
    return (
        <>
            <div className="formRequest">
                <form onSubmit={handleSubmit}>
                    <label>
                        Rechercher :
                        <input type="text" onChange={(e) => setToSearch(e.target.value)} placeholder="Rechercher"></input>
                    </label>
                    <input className="rechercher" type="submit" value="Rechercher" />
                </form>
            </div>
            <div className="resultSearch">
                {
                    fetchReturn.items
                        ? fetchReturn.items.map((datas: any, i: number) => {
                            return (
                                <div key={i}>
                                    <VideoRequest datas={datas} name={name} />
                                </div>
                            )
                        })

                        : <h1 className="title"> Chargement, veuillez soumettre la recherche ou patienter.</h1>
                }
            </div>
        </>
    )
}
export default SearchVideo