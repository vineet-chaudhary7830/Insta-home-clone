import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import { Bookmark, ChatBubbleOutline, MoreHoriz, Telegram } from '@mui/icons-material'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'

export default function Post(props) {
  return (
    <div className='post'>
        <div className="post-header">
            <div className="post-headerAuthor">
            <Avatar>{props.user.charAt(0).toUpperCase()}</Avatar>
            {props.user} •<span>{props.timestamp}</span>
            </div>
           <MoreHoriz />
        </div>
        <div className="post-image">
            <img src={props.postImage} alt="" srcset="" />
        </div>
        <div className="post-footer">
            <div className="post-footerIcons">
                <div className="post-iconsMain">
                    <FavoriteBorder className='postIcon' />
                    <ChatBubbleOutline className='postIcon' />
                    <Telegram className='postIcon' />
                </div>
                <div className="post-iconsSave">
                    <Bookmark className='postIcon' />
                </div>
            </div>
            Liked By {props.like} people
        </div>
    </div>
  )
}
