import { useEffect, useState } from "react";
import { getSearchGif } from "../helpers/getGifs"

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    const getImages = async () => {
        const newImages = await getSearchGif(category);
        setImages(newImages);
    }

    useEffect(() => {
        getImages();
    }, [])


    return (
        <>
            <h3>{category}</h3>
            <ol>
                {images.map(({id, title, url}) => (
                    <>
                        <li key={id}>{title}</li>
                        <img src={url} alt={title} />
                    </>
                ))}
            </ol>
        </>
    )
}
