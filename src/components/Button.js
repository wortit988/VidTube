import React from 'react';
import { changeCtgry } from "../utils/buttonSlice";
import { useDispatch } from "react-redux";

const Button = ({ name, id }) => {
  const dispatch = useDispatch();

  const toggleVidCategory = (id) => {
    dispatch(changeCtgry(id))

};
  return (
    <div>
        <button className='px-5 py-2 m-2 bg-gray-200 rounded-lg hover:bg-gray-400 active:bg-gray-500 focus:ring focus:outline-none focus:ring-gray-400' onClick={() => toggleVidCategory({id})}>{name}</button>
    </div>
  )
}

export default Button