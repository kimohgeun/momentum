import React, { Component } from 'react';
import SearchPresenter from './SearchPresenter';

class SearchContainer extends Component {
	state = {
		value: '',
		isOpen: false,
	};
	handleSubmit = e => {
		e.preventDefault();
		window.location.href = `https://www.bing.com/search?q=${this.state.value}&PC=ATMM&FORM=MMXT01`;
	};
	handleChange = e => {
		this.setState({
			value: e.target.value,
		});
	};
	handleIcon = () => {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	};
	render() {
		const { value, isOpen } = this.state;
		return (
			<SearchPresenter
				value={value}
				isOpen={isOpen}
				handleSubmit={this.handleSubmit}
				handleChange={this.handleChange}
				handleIcon={this.handleIcon}
			/>
		);
	}
}

export default SearchContainer;
