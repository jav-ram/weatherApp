import React, {Fragment} from 'react';
import './index.css';

const Climate = ({
    climate = 'clear',
    icon = '',
    source = 'http://openweathermap.org/img/w/',
    temp = '',
}) => {
    return (
        <div className="climate">
            <img className="icon" src={`${source}${icon}.png`} />
            <p className="climateText"> {climate} </p>
            <h1 className="temperatura"> {`${temp} C`} </h1>
        </div>
    );
}

export default Climate;