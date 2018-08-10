import React, {Fragment} from 'react';
import './index.css'; 

const City = ( {
    city = 'Guatemala City'
} ) => {
    return (
        <h2 className="ciudad"> {city} </h2>
    );
}

export default City;
