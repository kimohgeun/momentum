import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
	position: fixed;
	right: 0;
	bottom: 0;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
`;

const Toggle = styled.button`
	all: unset;
	margin: 1.5rem;
	cursor: pointer;
`;

const Modal = styled.div`
	background: rgba(0, 0, 0, 0.9);
	width: 17rem;
	margin-right: 1rem;
	border-radius: 10px;
	visibility: ${prop => (prop.isOpen === true ? 'visible' : 'hidden')};
	color: #fff;
	padding: 1rem 0rem 1rem 1rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const List = styled.ul`
	height: 15rem;
	overflow: auto;
`;

const Item = styled.li`
	padding: 5px;
	font-size: 0.8rem;
	display: flex;
	align-items: center;
`;

const Text = styled.span`
	word-break: break-all;
	width: 14rem;
	text-decoration: ${prop => (prop.done === true ? 'line-through' : 'none')};
`;

const Remove = styled.i`
	cursor: pointer;
	color: #fff;
	font-size: 0.8rem;
	margin-right: 1rem;
`;

const Input = styled.input`
	all: unset;
	width: 100%;
`;

const Todo = ({ isOpen, value, todos, handleClick, ul, handleChange, handleSubmit, checkDone, handleRemove }) => (
	<Container>
		<Modal isOpen={isOpen}>
			<span>Todo</span>
			<List ref={ul}>
				{todos.map(todo => (
					<Item key={todo.id}>
						<input type="checkbox" checked={todo.done} onClick={() => checkDone(todo.id)} readOnly />
						<Text done={todo.done}>{todo.todo}</Text>
						<Remove className="fas fa-trash" onClick={() => handleRemove(todo.id)} />
					</Item>
				))}
			</List>
			<form onSubmit={handleSubmit}>
				<Input placeholder="New Todo" value={value} onChange={handleChange} />
			</form>
		</Modal>
		<Toggle onClick={handleClick}>Todo</Toggle>
	</Container>
);

Todo.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	value: PropTypes.string.isRequired,
	todos: PropTypes.array.isRequired,
	handleClick: PropTypes.func.isRequired,
	ul: PropTypes.object.isRequired,
	handleChange: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	checkDone: PropTypes.func.isRequired,
	handleRemove: PropTypes.func.isRequired,
};

export default Todo;
