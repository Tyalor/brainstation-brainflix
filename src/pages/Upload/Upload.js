import "./Upload.scss"
import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_URL, API_KEY } from '../../utils/apis';
import { NavLink } from "react-router-dom"
import preview from "../../assets/images/Upload-video-preview.jpg"
import publish  from "../../assets/svgs/publish.svg"

const Upload = () => {

    // const clickHandler = (id) => {
    //   let newActiveVideo = videosData.find(video => video.id === id)
    //   setVideoData(newActiveVideo)
    // }

    return (        
        <div className='upload'>
            <div className='upload__container'>
                <h1 className="upload__heading">Upload Video</h1>                
                <hr className="upload__hr"/>

                <div className="upload__item-container">
                <div className="upload__item">
                    <p className="upload__subheading">Video thumbnail</p>
                    <img className="upload__img" src={preview} alt="preview" />
                </div>
                <form className="upload__form">
                    <div className="upload__item">
                        <label className="upload__subheading" htmlFor="title">Title your video</label>
                        <input className="upload__input" type="text" placeholder="Add a title to your video" name="title"/>
                    </div>
                    <div className="upload__item">
                        <label className="upload__subheading" htmlFor="description">Add a video description</label>
                        <textarea className="upload__textarea" type="textarea" placeholder="Add a description to your video" name="description"/>
                    </div>
                    <NavLink to="/">
                        <div className="upload__btn-container">
                            <button className="upload__cancel-btn btn">
                                <p className="upload__cancel-text btn__text">Cancel</p>
                            </button>
                            <button className="upload__publish-btn btn" type="submit">
                                <img className="upload__publish-img btn__img" src={publish} alt="publish" />
                                <p className="upload__publish-text btn__text">Publish</p>
                            </button>
                        </div>
                    </NavLink>
                </form>
                </div>
                <hr />
            </div>
        </div>
    )
}

export { Upload }
