import React from 'react';

let nextTodoId = 0;
let input;

const AddTodo = (props, {store}) => {
	return (
		<div>
			<form onSubmit={(e) => {
				e.preventDefault();
				store.dispatch({
					type: 'ADD_TODO', 
					id: nextTodoId++, 
					text: input.value
				})
				input.value = '';
			}}>
				<input ref={node=> {
					input=node
				}} />
				<button type='submit'>Add Todo</button>
			</form>
		</div>
	)
}
AddTodo.contextTypes = {
	store: React.PropTypes.object
}

export default AddTodo;