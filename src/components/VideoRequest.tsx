import { Items } from '../Types/TypesList';

type VideoRequestProps = {
    datas: Items,
    name: string
}

const VideoRequest = ({ datas, name }: VideoRequestProps) => {

    const AddToLibrary = () => {
        const app = {
            ...datas, name
        }
        fetch('http://localhost:8400/addvideo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(app)
        })
            .then(response => response.json())
            .catch(err => console.log(err));
        console.log(app)
    }

    return (
        <div className="videoBordered">
            <h3>{datas.snippet.title}</h3>
            <img src={datas.snippet.thumbnails.default.url} alt={datas.snippet.title} />
            <button onClick={AddToLibrary}>+</button>
        </div>
    )
}
export default VideoRequest