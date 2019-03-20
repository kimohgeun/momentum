import React, { Component } from 'react';
// CSS
import GlobalStyle from './GlobalStyle';
// Components
import Name from './Name';
import Clock from './Clock';
import Todo from './Todo';
import Weather from './Weather';
import Search from './Search';
import Clear from './Clear/';

class App extends Component {
	state = {
		name: null,
	};
	saveName = data => {
		this.setState({
			name: data,
		});
		localStorage.setItem('MOMENTUM_NAME', data);
	};
	getName = () => {
		const name = localStorage.getItem('MOMENTUM_NAME');
		if (name !== null) {
			this.setState({
				name,
			});
		}
	};
	componentDidMount() {
		this.getName();
	}
	render() {
		const { name } = this.state;
		return (
			<>
				<GlobalStyle />
				{name === null ? (
					<Name saveName={this.saveName} />
				) : (
					<>
						<Clock name={name} />
						<Search />
						<Todo />
						<Weather />
						<Clear />
					</>
				)}
			</>
		);
	}
}

export default App;
