import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEOS_API } from '../utils/constant';
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from 'react-router-dom';

const VideoContainer = () => {

const [videos, setVideos] = useState([]);

useEffect(() => {
    getVideos();
}, []);

const getVideos = async () => {
  const data = await fetch(YOUTUBE_VIDEOS_API);
  const json = await data.json();
  setVideos(json.items)
};

  return (
    <div className='flex flex-wrap'>
      {videos[40] && <Link key = {videos[40].id} to={"/watch?v=" + videos[40].id}><AdVideoCard info={videos[40]} /></Link>}
      {videos.map(video => (
      <Link key = {video.id} to={"/watch?v=" + video.id} > <VideoCard info = {video} /> </Link>))}
    </div>
  )
}

export default VideoContainer