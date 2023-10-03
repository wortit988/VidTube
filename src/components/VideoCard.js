import React from 'react'

const VideoCard = ({ info }) => {
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;
    const { viewCount, likeCount, commentCount} = statistics;
  return (
    <div className='shadow-lg p-2 m-2 w-72'>
        <img className='rounded-lg' alt='thumbnail' src={thumbnails.medium.url} />
        <ul>
            <li className='font-bold'>{title}</li>
            <li>{channelTitle}</li>
            <li>{viewCount} 👁️ </li>

        </ul>
    </div>
  )
}

export default VideoCard