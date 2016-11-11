import React from 'react';
import TodoListRendering from './TodoListRendering.js';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
	return {
		todos: getVisibleTodos(state.todos, state.visibilityFilter)
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onTodoClick: function(id) {
			dispatch({
				type: 'TOGGLE_TODO', 
				id: id
			})
		}
	}
}

const TodoList = connect(
	mapStateToProps, 
	mapDispatchToProps
)(TodoListRendering)


const getVisibleTodos = (todos, filter) => {
	switch(filter){
		case 'SHOW_ALL':
			return todos
		case 'SHOW_COMPLETED':
			return todos.filter(todo => {
				return todo.completed
			});
		case 'SHOW_ACTIVE':
			return todos.filter(todo => {
				return !todo.completed
			});
	}
}
export default TodoList;