import "./Upload.scss"
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import { API_URL, API_KEY } from '../../utils/APIs';
import { NavLink } from "react-router-dom"
import preview from "../../assets/images/Upload-video-preview.jpg"
import publish  from "../../assets/svgs/publish.svg"

const Upload = () => {
    
    const [videoForm, setVideoForm] = useState({
        title: "",
        description: ""
    })

    // on change for both of the input fields 
    const changeHandler = (e) => {
        setVideoForm(
            // setting new object
            // take object as is
            // change whichever value for name
            {...videoForm, [e.target.name]:e.target.value}
        )
    }
    
    const addVideo = (e) => {
        alert('upload')
        e.preventDefault();
        console.log(videoForm)
        axios.post(`${API_URL}/videos/`, videoForm)
    }

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
                <form className="upload__form" onSubmit={addVideo}>
                    <div className="upload__item">
                        <label className="upload__subheading" htmlFor="title">Title your video</label>
                        <input className="upload__input" type="text" placeholder="Add a title to your video" name="title" onChange={changeHandler} value={videoForm.title} />
                    </div>
                    <div className="upload__item">
                        <label className="upload__subheading" htmlFor="description">Add a video description</label>
                        <textarea className="upload__textarea" type="textarea" placeholder="Add a description to your video" name="description" onChange={changeHandler} value={videoForm.description}/>
                    </div>
                    <div className="upload__btn-container">
                        <button className="upload__cancel-btn btn">
                            <p className="upload__cancel-text btn__text">Cancel</p>
                        </button>
                        <button className="upload__publish-btn btn" type="submit" >
                            <img className="upload__publish-img btn__img" src={publish} alt="publish" />
                            <p className="upload__publish-text btn__text">Publish</p>
                        </button>
                    </div>
                </form>
                </div>
                <hr />
            </div>
        </div>
    )
}

export { Upload }
