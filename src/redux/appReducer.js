import { loading_on, loading_off } from "./types";

const initialState = {
	loading: false
}

export const appReducer = (state = initialState, action) => {

	switch(action.type) {
		case loading_on:
			return {...state, loading: true}
		case loading_off: 
			return {...state, loading: false}
		default: return state
	}
}