import React, { Component } from 'react';
import TodoPresenter from './TodoPresenter';
import uuid from 'uuid';

class TodoContainer extends Component {
	state = {
		isOpen: false,
		todos: [],
		value: '',
	};
	ul = React.createRef();
	handleClick = () => {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	};
	handleChange = e => {
		this.setState({
			value: e.target.value,
		});
	};
	handleSubmit = async e => {
		e.preventDefault();
		const data = {
			id: uuid(),
			todo: this.state.value,
			done: false,
		};
		const todos = this.state.todos.concat(data);
		await this.setState({
			todos,
			value: '',
		});
        this.localStorageSave(todos);
        this.ul.current.scrollTop = this.ul.current.scrollHeight;
	};
	handleDone = id => {
		const todos = this.state.todos.map(todo => (todo.id === id ? { ...todo, done: !todo.done } : todo));
		this.setState({
			todos,
		});
		this.localStorageSave(todos);
	};
	handleRemove = id => {
		const todos = this.state.todos.filter(todo => todo.id !== id);
		this.setState({
			todos,
		});
		this.localStorageSave(todos);
	};
	localStorageSave = todos => {
		localStorage.setItem('TODOS', JSON.stringify(todos));
	};
	getTodos = () => {
		const todos = localStorage.getItem('TODOS');
		const parsedToDos = JSON.parse(todos);
		if (todos !== null) {
			this.setState({
				todos: parsedToDos,
			});
		}
	};
	componentDidMount() {
        this.getTodos();
	}
	render() {
        const { isOpen, value, todos } = this.state;
		return (
			<TodoPresenter
				isOpen={isOpen}
				value={value}
				todos={todos}
				handleClick={this.handleClick}
				handleChange={this.handleChange}
				handleSubmit={this.handleSubmit}
				handleDone={this.handleDone}
				handleRemove={this.handleRemove}
				ul={this.ul}
			/>
		);
	}
}

export default TodoContainer;
