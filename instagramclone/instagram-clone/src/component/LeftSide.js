import './leftSide.css';
import profileImg from '../assets/profile.jpeg';
import instagramLogo from '../assets/insta_logo_2.png';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatIcon from '@mui/icons-material/Chat';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import GestureIcon from '@mui/icons-material/Gesture';
import MenuIcon from '@mui/icons-material/Menu';

const LeftSide = () => {
    
    return(
        <div className="lefSidePart">
            <div className="logoPart">
                <img className="logoImg" src={instagramLogo} alt="Instagram" />
            </div>
            <div className="navLinkPart">
                <div className="navLink">
                    <HomeIcon sx={{fontSize:"30px", margin:"0 20px 0 0"}}/>
                    <div className="navName">Home</div>
                </div>
                <div className="navLink">
                    <SearchIcon sx={{fontSize:"30px", margin:"0 20px 0 0"}}/>
                    <div className="navName">Search</div>
                </div>
                <div className="navLink">
                    <ExploreIcon sx={{fontSize:"30px", margin:"0 20px 0 0"}}/>
                    <div className="navName">Explore</div>
                </div>
                <div className="navLink">
                    <MovieFilterIcon sx={{fontSize:"30px", margin:"0 20px 0 0"}}/>
                    <div className="navName">Reel</div>
                </div>
                <div className="navLink">
                    <ChatIcon sx={{fontSize:"30px", margin:"0 20px 0 0"}}/>
                    <div className="navName">Messages</div>
                </div>
                <div className="navLink">
                    <FavoriteBorderIcon sx={{fontSize:"30px", margin:"0 20px 0 0"}}/>
                    <div className="navName">Notification</div>
                </div>
                <div className="navLink">
                    <AddBoxOutlinedIcon sx={{fontSize:"30px", margin:"0 20px 0 0"}}/>
                    <div className="navName">Create</div>
                </div>
                <div className="navLink">
                    <img className='profileImg' src={profileImg} alt="profile" />
                    <div className="navName">Profile</div>
                </div>
                

                <div className="bottomMenu">
                    <div className="navLink">
                        <GestureIcon sx={{fontSize:"30px", margin:"0 20px 0 0"}}/>
                        <div className="navName">Thread</div>
                    </div>
                    <div className="navLink">
                        <MenuIcon sx={{fontSize:"30px", margin:"0 20px 0 0"}}/>
                        <div className="navName">More</div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default LeftSide;