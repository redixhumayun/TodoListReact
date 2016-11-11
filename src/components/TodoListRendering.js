import React from 'react';

const TodoListRendering = ({todos, onTodoClick}) => {
	return(
		<ul>
			{todos.map(todo => {
				return (
					<li 
					key={todo.id} 
					onClick={() => onTodoClick(todo.id)}
					style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
						{todo.text}
					</li>
				)
			})}
		</ul>
	)
}

export default TodoListRendering;