import React, { useState } from 'react';
import axios from 'axios'
import fileDownload from 'js-file-download'
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, TelegramShareButton, RedditShareButton, LinkedinShareButton } from "react-share"
import { FacebookIcon, LinkedinIcon, RedditIcon, TelegramIcon, WhatsappIcon, TwitterIcon } from "react-share"
import './Editor.scss'


const Editor = ({ Meme, setMeme }) => {
    

    const [CaptionOnTop, setCaptionOnTop] = useState("")
    const [CaptionOnBottom, setCaptionOnBottom] = useState("")
    const [MemeUpdated, setMemeUpdated] = useState(false)
    

    const Form = { templateId: Meme.id, username: process.env.REACT_APP_USERNAME, password: process.env.REACT_APP__PASSWORD, Top: CaptionOnTop, Bottom: CaptionOnBottom}
    

    const GenerateMeme = () => {
        
        const URL = `https://api.imgflip.com/caption_image?template_id=${Form.templateId}&username=${Form.username}&password=${Form.password}&text0=${Form.Top}&text1=${Form.Bottom}`

        fetch(URL)
            .then(response => response.json())
            .then((data) => {
                setMeme({ ...Meme, url: data.data.url })
                setMemeUpdated(true)
            })
        
    }

    const DownloadMeme = (URL, FileName) => {
        axios.get(URL, {
            responseType: 'blob',
        })
            .then((response) => {
                fileDownload(response.data, FileName)
            })
    }
 
    return <div className="EditorPage">
            <div className="EditContainer">
                <div className="EditContent">
                <div className="Left">
                        <h3>Enter Caption To Generate Your Meme</h3>
                        <div className="Inputs">
                        <input type="text" placeholder="Enter Caption To Place At Top" onChange={(event) => setCaptionOnTop(event.target.value)} />
                        <input type="text" placeholder="Enter Caption To Place At Bottom" onChange={(event) => setCaptionOnBottom(event.target.value)} />
                        </div>
                        <div className="Buttons">
                        <button className="Generate" onClick={GenerateMeme}>Generate</button>
                            <button className="GoBack" onClick={() => setMeme(null)} >Choose New Template</button>
                        </div>
                        
                    </div>
                    <div className="Right">
                        <img className="MemeImage" src={Meme.url} alt={Meme.name} />
                        <h5>Template Name:- {Meme.name}</h5>

                    {MemeUpdated ?
                        <div className="Buttons">
                            <butoon className="DownloadButton" onClick={() => { DownloadMeme(Meme.url, 'Meme.jpg') }} ><span>Download</span></butoon>
                            <div className="ShareButton">
                                <FacebookShareButton url={Meme.url}  quote={Meme.name}><FacebookIcon size={32} round={true} /></FacebookShareButton>
                                <WhatsappShareButton url={Meme.url}  quote={Meme.name}><WhatsappIcon size={32} round={true} /></WhatsappShareButton>
                                <TwitterShareButton url={Meme.url}  quote={Meme.name}><TwitterIcon size={32} round={true} /></TwitterShareButton>
                                <TelegramShareButton url={Meme.url}  quote={Meme.name}><TelegramIcon size={32} round={true} /></TelegramShareButton>
                                <LinkedinShareButton url={Meme.url}  quote={Meme.name}><LinkedinIcon size={32} round={true} /></LinkedinShareButton>
                                <RedditShareButton url={Meme.url}  quote={Meme.name}><RedditIcon size={32} round={true} /></RedditShareButton>

                            </div>
                            
                        </div>
                        : ""}
                        
                    </div>
                </div>
            </div>
        </div>
};

export default Editor;
