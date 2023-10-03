import React from 'react';
import Comment from './Comment';

const commentsData = [
    {
        name : "Test",
        text : "Lorem ipsum dolor sit amet, consectetur adip",
        replies : [
            {

            }
        ],
    },
    {
        name : "Test",
        text : "Lorem ipsum dolor sit amet, consectetur adip"
    },
    {
        name : "Test",
        text : "Lorem ipsum dolor sit amet, consectetur adip"
    },
    {
        name : "Test",
        text : "Lorem ipsum dolor sit amet, consectetur adip"
    },
]

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold'>Comments : </h1>
        <Comment data = {commentsData[0]} />
    </div>
  )
}

export default CommentsContainer