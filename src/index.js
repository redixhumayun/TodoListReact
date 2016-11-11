import React from 'react';
import ReactDOM from 'react-dom';
import todoApp from './reducers/index.js';
import App from './components/App.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

let store = createStore(todoApp);

const render = () => {
	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>, 
		document.getElementById('root')
	)
}
store.subscribe(render);
render();