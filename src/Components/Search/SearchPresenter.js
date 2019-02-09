import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	position: fixed;
	display: flex;
	left: 0;
	top: 0;
	margin: 1rem;
`;

const Text = styled.span`
	margin-right: 1rem;
	font-weight: bold;
`;

const Icon = styled.i`
	position: absolute;
	cursor: pointer;
`;

const Input = styled.input`
	all: unset;
	border-bottom: 2px solid #000;
	padding-left: 1.5rem;
	padding-bottom: 0.5rem;
	visibility: ${prop => (prop.isOpen === true ? 'visible' : 'hidden')};
`;

const Search = ({ value, isOpen, handleSubmit, handleChange, handleIcon }) => (
	<Container>
		<Text>Search</Text>
		<form onSubmit={handleSubmit}>
			<Icon className="fas fa-search" onClick={handleIcon} />
			<Input value={value} onChange={handleChange} isOpen={isOpen} />
		</form>
	</Container>
);

export default Search;
