import React from 'react';
import AddTodo from '../containers/AddTodo.js';
import TodoList from '../components/TodoList.js';
import Footer from '../components/Footer.js';

const App = () => {
	return(
		<div>
			<AddTodo />
			<TodoList />
			<Footer />
		</div>
	)
}

export default App;