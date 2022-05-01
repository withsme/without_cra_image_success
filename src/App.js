import React from 'react';
import RobotImg from './img/robot.png';

var robotImg = document.getElementById('robot');
robotImg.src = RobotImg;

function App() {
    return (
        <>
            <h1>js에서 import를 통한 image 사용</h1>
            <img src={RobotImg}/>
        </>
    );
};
  
export default App;