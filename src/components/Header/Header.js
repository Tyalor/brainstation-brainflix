import "./Header.scss"
import logo from "../../assets/svgs/BrainFlix-logo.svg"
import userPicture from "../../assets/images/Mohan-muruge.jpg"
import upload from "../../assets/svgs/upload.svg"
import search from "../../assets/svgs/search.svg"

const Header = () => {
    return (
        <>
            <header class="header">
                <nav class="header__nav">
                    <img class="header__logo-img" src={logo} alt="BrainFlix" />
                    <div class="header__container">
                        <form class="header__search" action="">
                            <img class="header__search-img" src={search} alt="search" />
                            <input class="header__search-input" type="text" placeholder="Search" />
                            <div class="header__profile-img-container">
                                <img class="header__profile-img" src={userPicture} alt="" />
                            </div>
                        </form>
                        <button class="header__upload-btn btn">
                            <img class="header__upload-img btn__img" src={upload} alt="upload" />
                            <p class="header__upload-text btn__text">Upload</p>
                        </button>
                        {/* <div class="header__profile-img-container">
                            <img class="header__profile-img" src={userPicture} alt="" />
                        </div> */}
                    </div>                    
                </nav>
            </header>
        </>
    )
}

export default Header