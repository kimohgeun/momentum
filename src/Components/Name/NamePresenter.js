import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Form = styled.form`
	display: flex;
	flex-direction: column;
	font-size: 2rem;
`;

const Text = styled.span`
	margin-bottom: 0.5rem;
`;

const Input = styled.input`
	all: unset;
	border-bottom: 1px solid #000;
	text-align: center;
`;

const Name = ({ value, handleChange, handleSubmit }) => (
	<>
		<Form onSubmit={handleSubmit}>
			<Text>Hello, what's your name?</Text>
			<Input value={value} onChange={handleChange} />
		</Form>
	</>
);

Name.propTypes = {
	value: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
};

export default Name;
