import { Avatar } from '@mui/material'
import React, { forwardRef } from 'react'
import './Post.css'
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

function setColor(btn, color) {
  
}

const Post = forwardRef( 
  ({ displayName, username, verified, timestamp, text, image, avatar}, ref) =>  {
  return ( <div className='post' ref={ref} >
    <div className='post__avatar'>
      <Avatar src={avatar} />
    </div>
    <div className='post__body'>
      <div className='post__header'>
        <div className='post__headerText'>
          <h3>
            {displayName} {" "} 
            <span className='post__headerSpecial'>
              {verified && <VerifiedIcon className='post__badge' />}
              @{username}
            </span>
          </h3>
        </div>
        <div className='post__headerDescription'>
          <p>
            {text}
          </p>
        </div>
        <div>
          <img className='post__img' src={image} alt='' 
          />
          <div className='post__footer'>
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize='small' />
            <FavoriteBorderIcon className='heart__icon' fontSize='small' />
            <PublishIcon fontSize='small' />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
)
export default Post