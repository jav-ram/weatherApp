import React, {Fragment} from 'react';
import './index.css';

import City from '../City'

class WeatherApp extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            city: '',
            country: '',
            climate: '',
            temp: '',
            date: '',
        }
    }

    componentWillMount() {
        fetch('https://ipinfo.io/json')
            .then( response => response.json())
            .then (
                location => {
                    console.log(location);
                    this.setState({
                        city: location.city,
                        country: location.country,
                    });

                    this._getCity(location.city);
                }
            )
    }

    _getCity = (city) => {
        const ciudad = city.split(' ')[0];
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&appid=2ffaf2fb93ce17472addc8c984696536`
        console.log(url);
        fetch(url)
            .then( weather => weather.json())
            .then( response => {
                const data = response.list[0];
                console.log(data)
                this.setState({
                    climate: data.weather[0].main,
                    temp: data.main.temp - 273.15,
                })
            });
    }

    render (){
        const {city} = this.state
        console.log(this.state  )
        return (
            <Fragment>
                <h1 className="title">Weather App</h1>
                <City city={city}/>
            </Fragment>
        );
    }
}

export default WeatherApp;