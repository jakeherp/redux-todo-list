import React from 'react';

const Todo = ({ onClick, completed, title }) => (
	<li onClick={onClick} className={completed ? 'complete' : null}>
		{title}
		<style jsx>{`
			li {
				background: #b7d96a;
				color: #00322b;
				margin: 0.5rem;
				padding: 0.5rem;
				border-radius: 0.25rem;
				cursor: pointer;
			}
			.complete {
				background: #e3f2cc;
				color: #038678;
				text-decoration: line-through;
			}
		`}</style>
	</li>
);

export default Todo;
