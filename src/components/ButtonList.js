import React from 'react';
import Button from './Button';

const list = ["All", "Music", "Cricket", "Movies", "Cooking", "Gaming", "Learning"]

const ButtonList = () => {
  return (
    <div className='flex'>
      <Button name="All"/>
      <Button name="Music"/>
      <Button name="Movies"/>
      <Button name="Cricket"/>
      <Button name="Cooking"/>
      <Button name="Football"/>
      <Button name="Space"/>
      <Button name="Learning"/>
      <Button name="Travel"/>
    </div>
  )
}

export default ButtonList