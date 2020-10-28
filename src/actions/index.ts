let nextTodoId = 0;
export const addTodo = (title) => ({
	type: 'ADD_TODO',
	id: nextTodoId++,
	title,
});

export const fetchTodos = () => async (dispatch) => {
	fetch('https://jsonplaceholder.typicode.com/todos')
		.then((res) => res.json())
		.then((data) => {
			data.slice(0, 10).map((todo) => dispatch(addTodo(todo.title)));
		});
};

export const setVisibilityFilter = (filter) => ({
	type: 'SET_VISIBILITY_FILTER',
	filter,
});

export const toggleTodo = (id) => ({
	type: 'TOGGLE_TODO',
	id,
});

export const VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_ACTIVE: 'SHOW_ACTIVE',
};
