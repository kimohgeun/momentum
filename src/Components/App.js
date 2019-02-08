import React, { Component } from 'react';
import GlobalStyle from './GlobalStyle';
import Name from './Name';
import Clock from './Clock';
import Todo from './Todo';
import Weather from './Weather';

class App extends Component {
	state = {
		name: null,
		loading: true,
	};
	saveName = data => {
		this.setState({
			name: data,
		});
	};
	getName = () => {
		const name = localStorage.getItem('NAME');
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
			<div>
				<GlobalStyle />
				{name === null ? (
					<Name saveName={this.saveName} />
				) : (
					<>
						<Clock name={name} />
						<Todo />
						<Weather handleLoading={this.handleLoading} />
					</>
				)}
			</div>
		);
	}
}

export default App;
