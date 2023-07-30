import React, { useState } from 'react'
import './ButtonPressStyle.css';

const ButtonPress11 = () => {

  const [change,setChange]=useState('btn11')

  const ClickButton=['btn11','btn22','btn33']

  const Clickable=()=>{
  
      const CurrentIndex=ClickButton.indexOf(change);
      const NextInt=(CurrentIndex+1)%ClickButton.length;
      const nextStyle=ClickButton[NextInt];
      setChange(nextStyle);


    
  }
  return (
    <div className={change}>
      <button className='btn11' onClick={Clickable}>click here</button>
      {/* <button className='btn22' onClick={Clickable}>click here</button> */}
    </div>
  )
}

export default ButtonPress11