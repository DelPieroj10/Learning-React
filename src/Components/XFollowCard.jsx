import React from 'react'
import '../Stylesheets/XFollowCard.css';
import { useState } from 'react';

export function XFollowCard({ children, userName, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const text = isFollowing ? 'Following' : 'Follow'
  const buttonClassName = isFollowing
    ? 'x-followCard-button is-following'
    : 'x-followCard-button'

    const handleClick = () => {
      setIsFollowing(!isFollowing)
    }

    return (
      <article className='x-followCard'>
        <header className='x-followCard-header'>
          <img 
            className='x-followCard-avatar'
            alt='An avatar of one guy' 
            src={`https://unavatar.io/${userName}`} />

          <div className='x-followCard-info'>
            <strong>{children}</strong>
            <span className='x-followCard-infoUserName'>@{userName}</span>
          </div>
        </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className='x-followCard-text'>{ text }</span> 
          <span className='x-followCard-stopFollow'>Unfollow</span>  
        </button>
      </aside>

    </article>
    )
}

// export default XFollowCard;
