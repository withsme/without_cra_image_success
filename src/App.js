import React from 'react';
import RobotImg from './img/robot.png';

var robotImg = document.getElementById('robot');
robotImg.src = RobotImg;

function App() {
    return (
        <>
            <img src={RobotImg}/>
            <h1>hello</h1>
        </>
    );
};
  
export default App;