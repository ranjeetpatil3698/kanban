import React from 'react';
import Priority from './Priority';
//TODO:add svg icon addMember at + button
export default function Task(props) {  

  return (
      <div>
      <Priority/>
      <div>{props.title}</div> 
      <div>+</div>
      </div>
  )
}


