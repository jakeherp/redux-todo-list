import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, toggleTodo }) => {
	if (todos.length < 1) {
		return (
			<em>
				Add your first todo
				<style jsx>{`
					em {
						display: block;
						margin: 1rem 0;
						color: #ccc;
					}
				`}</style>
			</em>
		);
	}
	return (
		<ul>
			{todos.map((todo) => (
				<Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
			))}
			<style jsx>{`
				ul {
					list-style: none;
					padding: 0;
					margin: 1rem 0;
				}
			`}</style>
		</ul>
	);
};

export default TodoList;
