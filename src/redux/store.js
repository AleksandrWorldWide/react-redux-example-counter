import { createStore } from "redux";

const initialState ={
	count: 10
}

const rootReducer = (state = initialState, action) => {
	console.log(action)
	return state
}

const store = createStore(rootReducer)

export default store