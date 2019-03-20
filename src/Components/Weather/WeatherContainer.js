import React, { Component } from 'react';
import WeatherPresenter from './WeatherPresenter';
import axios from 'axios'; // api 정보를 쉽게 가져오기 위해 axios 설치

class WeatherContainer extends Component {
	state = {
		temp: '',
		name: '',
		location: '',
	};

	// 기본 api 주소정보로 baseURL과 APPID설정
	api = axios.create({
		baseURL: 'https://api.openweathermap.org/data/2.5',
		params: {
			APPID: 'f45feac96ba10f6adf703ab2e66bd792',
		},
	});

	componentDidMount() {
		navigator.geolocation.getCurrentPosition(position => {
			// api 추가 파라미터로 latitude, longitude 추가
			const getWeather = this.api.get(
				'/weather',
				{
					params: {
						lat: position.coords.latitude,
						lon: position.coords.longitude,
					},
				},
				err => console.log(err)
			);
			getWeather
				.then(res => {
					this.setState({
						temp: String(Math.ceil(res.data.main.temp - 273.15)),
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
