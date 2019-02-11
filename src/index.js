import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Orbit extends React.Component {

    render() {
        console.log(this.props.num);
        return (
            <div className="orbit">
                <div className="orbit__satellite">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000">
                        <g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)">
                            <path d="M6413.6,4992.9c-272.1-29-655.6-131.6-903.2-238.6C5274,4651.7,332.2,1808.3,236.3,1719.1c-142.7-129.4-176.2-334.5-87-508.5c87-167.3,296.6-263.1,468.3-211.9c49.1,15.6,764.9,417,1592.3,894.3c825.1,477.2,1503.1,865.3,1505.3,863c2.2,0-15.6-82.5-40.1-180.6c-198.5-838.5-31.2-1764,450.5-2477.6l104.8-158.3L2961.4-1329.4c-838.5-838.5-1284.5-1300.1-1313.5-1360.3c-111.5-229.7,17.8-519.6,263.1-588.7c102.6-26.8,127.1-26.8,238.6,2.2c75.8,20.1,274.3,209.6,1384.9,1318L4830.2-664.8l187.3-122.7c459.4-298.8,907.6-452.7,1469.6-506.2c305.5-31.2,675.7-4.5,972.3,66.9c98.1,22.3,178.4,40.1,180.7,35.7c2.2-2.2-263.1-463.9-588.8-1028.1C5809.2-4371.2,5885-4232.9,5885-4355.5c0-229.7,145-401.4,363.5-430.4c127.1-17.9,272.1,31.2,354.6,120.4c31.2,33.5,657.9,1099.4,1389.3,2368.3C8723.9-1028.3,9361.7,71.1,9408.5,144.7c218.5,341.2,388,780.5,454.9,1175.2c46.8,272.1,49,787.2,4.4,1043.7c-156.1,892-655.6,1650.2-1407.2,2138.6C7876.5,4883.6,7104.9,5068.7,6413.6,4992.9z" fill="#ffd152"/>
                        </g>
                    </svg>
                </div>
            </div>
        )
    }
}

class Scene extends React.Component {
    render() {

        const min = 3;
        const max = 8;

        return (
            <div className="container">
                <div className="earth"></div>
                <Orbit num={getRandomNumber(min, max)}/>
            </div>
        )
    }
}

ReactDOM.render(<Scene />, document.getElementById("scene"));

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
