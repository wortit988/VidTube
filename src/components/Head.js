import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constant';
import store from '../utils/store';
import { cacheResults } from "../utils/searchSlice";

import Logo from "../assets/vidTube_logo.jpg"




const Head = () => {

    const [searchQuery, setSearchQuery] = useState("");

    const [suggestions, setSuggestions] = useState([]);

    const [showSuggestions, setShowSuggestions] = useState(false);

    const searchCache = useSelector((store) => store.search);

    const dispatch = useDispatch();

    //debouncing 
    
    useEffect(() => {
        //API Call
      const timer =  setTimeout(() => {
        //read from cache
        if(searchCache[searchQuery]){
                setSuggestions(searchCache[searchQuery]);
        }
        else {
            getSearchSuggestion()
        }
    }, 200);

      return () => {
        clearTimeout(timer);
      };

    }, [searchQuery]);

    const getSearchSuggestion = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        setSuggestions(json[1]);

        //update the cache
        dispatch(cacheResults({
            [searchQuery] : json[1],
        }))
    };

    const toggleMenuHandler = () => {
        dispatch(toggleMenu())

    };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
        <div className='flex col-span-1'>
            <img 
            onClick={() => toggleMenuHandler()}
            className='h-8 cursor-pointer'
            alt="menu"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8av2Wc73qxRSDaACc2fWhIhGwZQpEn7WxMHhF9-tmWiGcihcPaBqOSurVabtr_vH9Kck" />

            <a href="/">
            <img 
            className='h-8 mx-3'
            alt='logo'
            src={Logo}
            //src='https://image.winudf.com/v2/image/Y29tLnZpZGVvLm11c2ljLnZpZC5yZWxvYWRlZGFwcF9zY3JlZW5fMF8xNTIxNjAwNTIwXzAwMg/screen-0.webp?fakeurl=1&type=.webp'
             />
            </a>
        </div>
        <div className='col-span-10 px-10'>
            <div>
                <input 
                    type='text' 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => setShowSuggestions(false)}
                    className='px-5 w-1/2 border border-gray-400 p-2 rounded-l-full'/>
                <button className='border border-gray-400 p-2 rounded-r-full w-12 bg-gray-100'>
                    🔍
                </button>
            </div>
            {showSuggestions && (<div className='fixed bg-white py-2 px-2 w-[29.5rem] shadow-lg rounded-xl border border-gray-100'>
                <ul>
                    {suggestions.map((s) => (<li key={s} className='py-2 px-3 shadow-sm hover:bg-gray-100'>🔍 {s}</li>))}
                    
                    
                </ul>
            </div>
            )}
        </div>
        <div className='col-span-1'>
            <img 
            className='h-8'
            alt='user' 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmoGtyISMVoKuWRqAo9KLfl1g84gWVdOvCYk41aKGhUMDKrryDgM3hAYXRmm-Ad1wUaEE' />
        </div>
    </div>
  )
}

export default Head