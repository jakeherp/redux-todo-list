import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, fetchTodos } from '../actions';

const AddTodo = () => {
	const dispatch = useDispatch();
	let input;

	return (
		<div>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					if (!input.value.trim()) {
						return;
					}
					dispatch(addTodo(input.value));
					input.value = '';
				}}
			>
				<input placeholder="Add a todo" ref={(node) => (input = node)} />
				<button type="submit">+</button>
				<button onClick={() => dispatch(fetchTodos())}>Fetch 10 todos</button>
			</form>
		</div>
	);
};

export default AddTodo;
