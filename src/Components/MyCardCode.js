import React, { useState } from 'react'
import './MyCardCodeStyle.css';


const MyCardCode = () => {

    const [style, setStyle] = useState("cont");

    const shapes = ["cont", "cont2", "cont3",];
  
    const changeStyle = () => {
        const currentIndex = shapes.indexOf(style);
        const nextIndex = (currentIndex + 1) % shapes.length;
        const nextStyle = shapes[nextIndex];
        setStyle(nextStyle);
      };

    return (
      
         <>
      <div className="App">CHANGE CSS STYLING WITH ONCLICK EVENT</div>
      <div className={style}>
        <button className="button" onClick={changeStyle}>
          Click me!
        </button>
      </div>
    </>
    )
}

export default MyCardCode