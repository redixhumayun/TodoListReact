const todos = (state = [], action) => {
	switch(action.type){
		case 'ADD_TODO':
			return [
				...state, 
				{
					id: action.id, 
					text: action.text, 
					completed: false
				}
			]
		case 'TOGGLE_TODO':
			return state.map(t => {
				if(action.id !== t.id){
					return t;
				}
				return Object.assign({}, t, {
					completed: !t.completed
				})
			})
		default: 
			return state;
	}
}

export default todos;