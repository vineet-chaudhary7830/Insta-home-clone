import React from 'react'
import './TimeLine.css'
import Suggestions from './Suggestions'
import Post from './Post/Post'
import { useState } from 'react'

export default function TimeLine() {
    const[post ,setPost] = useState([
        {
            user:'vineet',
            postImage :'https://www.befunky.com/images/prismic/82e0e255-17f9-41e0-85f1-210163b0ea34_hero-blur-image-3.jpg?auto=avif,webp&format=jpg&width=896',
            likes:12,
            timespamp:"2d"
        },
        {
            user:'sachin',
            postImage :'https://www.w3schools.com/howto/img_5terre.jpg',
            likes:57,
            timespamp:"12h"
        },
        {
            user:'neel',
            postImage :'https://imagekit.io/blog/content/images/2019/12/image-optimization.jpg',
            likes:76,
            timespamp:"8h"
        }, {
            user:'vineet',
            postImage :'https://www.befunky.com/images/prismic/82e0e255-17f9-41e0-85f1-210163b0ea34_hero-blur-image-3.jpg?auto=avif,webp&format=jpg&width=896',
            likes:12,
            timespamp:"2d"
        },
        {
            user:'sachin',
            postImage :'https://www.w3schools.com/howto/img_5terre.jpg',
            likes:57,
            timespamp:"12h"
        },
        {
            user:'neel',
            postImage :'https://imagekit.io/blog/content/images/2019/12/image-optimization.jpg',
            likes:12,
            timespamp:"8h"
        },
    ])
  return (
    <div className='timeline'>
        <div className='timeline-left'>
            <div className="timeline-posts">
                {post.map(post =>(
                    <Post user={post.user} postImage={post.postImage} like={post.likes} timestamp = {post.timespamp} />
                ))}
            </div>
        </div>
        <div className='timeline-right'>
            <Suggestions />
        </div>

    </div>
  )
}
