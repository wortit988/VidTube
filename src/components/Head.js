import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Head = () => {

    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu())

    }

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
            className='h-8 mx-2'
            alt='logo'
            src='https://image.winudf.com/v2/image/Y29tLnZpZGVvLm11c2ljLnZpZC5yZWxvYWRlZGFwcF9zY3JlZW5fMF8xNTIxNjAwNTIwXzAwMg/screen-0.webp?fakeurl=1&type=.webp' />
            </a>
        </div>
        <div className='col-span-10 px-10'>
            <input type='text' className='w-1/2 border border-gray-400 p-2 rounded-l-full'/>
            <button className='border border-gray-400 p-2 rounded-r-full w-12 bg-gray-100'>🔍</button>
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