import React from 'react'
import "./SideNav.css"
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MenuIcon from '@mui/icons-material/Menu';


export default function SideNav() {
  return (
    <div className='sidenav'>
        <img className='sidenav-logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUtZ2q6Dr4ZP4zU01VfGffyc_u-z8vIY4BCA&usqp=CAU' alt="image not found" srcset="" />
        <div className='sidenav-buttons'>
            <button className='sidenav-button'>
                <HomeIcon />
                <span>Home</span>
            </button>
            <button className='sidenav-button'>
                <SearchIcon />
                <span>Search</span>
            </button>
            <button className='sidenav-button'>
                <ExploreIcon />
                <span>Explore</span>
            </button>
            <button className='sidenav-button'>
                <SlideshowIcon />
                <span>Reels</span>
            </button>
            <button className='sidenav-button'>
                <ChatIcon />
                <span>Messages</span>
            </button>
            <button className='sidenav-button'>
                <FavoriteBorderIcon />
                <span>Notificatiions</span>
            </button>
            <button className='sidenav-button'>
                <AddCircleOutlineIcon />
                <span>Create</span>
            </button>
            
        </div>

        <div className="sidenav-more">
            <button className='sidenav-button'>
                <MenuIcon />
            </button>
        </div>
    </div>
  )
}
