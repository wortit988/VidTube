import React from 'react';
import Button from './Button';

const list = ["All", "Music", "Cricket", "Movies", "Cooking", "Gaming", "Learning"]

const ButtonList = () => {
  return (
    <div className='flex'>
      <Button name="All"  id = {0} />
      <Button name="Music" id = {10} />
      <Button name="News" id = {25} />
      <Button name="Sports" id = {17} />
      <Button name="Autos & Vehicles" id = {2} />
      <Button name="Gaming" id = {20} />
      <Button name="Comedy" id = {23} />
      <Button name="Technology" id = {28} />
      <Button name="Howto & Style" id = {26} />
    </div>
  )
}

export default ButtonList