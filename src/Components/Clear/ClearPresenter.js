import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
	position: fixed;
	left: 0;
	bottom: 0;
	margin: 1rem;
`;

const ModalButton = styled.i`
	cursor: pointer;
`;

const Modal = styled.div`
	background: rgba(0, 0, 0, 0.9);
	width: 9rem;
	height: 10rem;
	margin-bottom: 1rem;
	border-radius: 10px;
	visibility: ${prop => (prop.isOpen === true ? 'visible' : 'hidden')};
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const Text = styled.span`
	color: #fff;
	margin: 1rem;
	cursor: pointer;
	font-size: 0.8rem;
`;

const Clear = ({ isOpen, handleModal, handleNameClear, handleTodoListClear, handleAllClear }) => (
	<Container>
		<Modal isOpen={isOpen}>
			<Text onClick={handleNameClear}>
				<i className="fas fa-user" /> Name Clear
			</Text>
			<Text onClick={handleTodoListClear}>
				<i className="fas fa-list-ul" /> Todo List Clear
			</Text>
			<Text onClick={handleAllClear}>
				<i className="fas fa-trash" /> All Clear
			</Text>
		</Modal>
		<ModalButton className="fas fa-cog" onClick={handleModal} />
	</Container>
);

Clear.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	handleModal: PropTypes.func.isRequired,
	handleNameClear: PropTypes.func.isRequired,
	handleTodoListClear: PropTypes.func.isRequired,
	handleAllClear: PropTypes.func.isRequired,
};
export default Clear;
