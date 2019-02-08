import React, { Component } from 'react';
import WeatherPresenter from './WeatherPresenter';
import axios from 'axios';

class WeatherContainer extends Component {
	state = {
		temp: '',
		name: '',
		location: '',
	};

	api = axios.create({
		baseURL: 'https://api.openweathermap.org/data/2.5',
	});

	API_KYE = 'f45feac96ba10f6adf703ab2e66bd792';

	componentDidMount() {
		navigator.geolocation.getCurrentPosition(position => {
			const getWather = this.api.get(
				'/weather',
				{
					params: {
						lat: position.coords.latitude,
						lon: position.coords.longitude,
						APPID: this.API_KYE,
					},
				},
				err => console.log(err)
			);
			getWather
				.then(res => {
					this.setState({
						temp: Math.ceil(res.data.main.temp - 273.15),
						name: res.data.weather[0].main,
						location: res.data.name,
					});
				})
				.catch(err => console.log(err));
		});
	}

	render() {
		const { temp, name, location } = this.state;
		return <WeatherPresenter temp={temp} name={name} location={location} />;
	}
}

export default WeatherContainer;
