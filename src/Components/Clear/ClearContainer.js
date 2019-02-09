import React, { Component } from 'react';
import ClearPresenter from './ClearPresenter';

class ClearContainer extends Component {
	state = {
		isOpen: false,
	};
	handleModal = () => {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	};
	handleNameClear = () => {
		localStorage.removeItem('NAME');
		window.location.reload()
	};
	handleTodoListClear = () => {
		localStorage.removeItem('TODO');
		window.location.reload()
	};
	handleAllClear = () => {
		localStorage.clear();
		window.location.reload()
	};
	render() {
		const { isOpen } = this.state;
		return (
			<ClearPresenter
				isOpen={isOpen}
				handleModal={this.handleModal}
				handleNameClear={this.handleNameClear}
				handleTodoListClear={this.handleTodoListClear}
				handleAllClear={this.handleAllClear}
			/>
		);
	}
}

export default ClearContainer;
