import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
        <img 
            className='h-8 rounded-full'
            alt='user' 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmoGtyISMVoKuWRqAo9KLfl1g84gWVdOvCYk41aKGhUMDKrryDgM3hAYXRmm-Ad1wUaEE' />
        <span className='font-bold px-2'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage