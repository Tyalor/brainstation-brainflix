import "./Header.scss"
import logo from "../../assets/svgs/BrainFlix-logo.svg"
import userPicture from "../../assets/images/Mohan-muruge.jpg"
import upload from "../../assets/svgs/upload.svg"
import search from "../../assets/svgs/search.svg"

const Header = () => {
    return (
        <>
            <header className="header">
                <nav className="header__nav">
                    <img className="header__logo-img" src={logo} alt="BrainFlix" />
                    <div className="header__container">
                        <form className="header__search" action="">
                            <img className="header__search-img" src={search} alt="search" />
                            <input className="header__search-input" type="text" placeholder="Search" />
                            <div className="header__profile-img-container d-mobile">
                                <img className="header__profile-img" src={userPicture} alt="" />
                            </div>
                        </form>
                        <button className="header__upload-btn btn">
                            <img className="header__upload-img btn__img" src={upload} alt="upload" />
                            <p className="header__upload-text btn__text">Upload</p>
                        </button>
                        <div className="header__profile-img-container d-tablet">
                            <img className="header__profile-img" src={userPicture} alt="" />
                        </div>
                    </div>                    
                </nav>
            </header>
        </>
    )
}

export { Header }