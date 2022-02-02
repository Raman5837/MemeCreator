import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Card from './../../Components/Card/Card';

import './Gallery.scss'
import Editor from '../Editor/Editor';

const Gallery = () => {

    const [Templates, setTemplates] = useState([])
    const [Meme, setMeme] = useState(null)

    useEffect(() => {

        const getTemplates = async () => {
            try {
                const response = await axios.get("https://api.imgflip.com/get_memes")
                setTemplates(response.data.data.memes)
            }
            catch (error) {
                console.log("Error : ", error)
            }
        }
        getTemplates()

    }, [])

    return <div className="GalleryPage">
        <div className="Heading">
            {Meme ? (<span className="h3">Create Your Desired Meme</span>) : <>
                <span className="h3">Meme Gallery</span>
                <span>Click On Any Card Of Your Choice To Edit That Meme</span>
            </> }
            
        </div>
        <div className="Content">
            {Meme === null ? (Templates.map((Template, id) => (<Card Template={Template} setMeme={setMeme} key={id} />))) : <Editor Meme={Meme} setMeme={setMeme} />}
            
        </div>
        
        </div>;
};

export default Gallery;
