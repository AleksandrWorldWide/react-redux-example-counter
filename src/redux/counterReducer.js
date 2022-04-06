import { add, sub} from './types'

const initialState = {
	count: 10
}

export const counterReducer = (state = initialState, action) => {

	switch(action.type){
		case add: {
			return {...state, count: state.count + 1}
		}
		case sub: {
			return {...state, count: state.count - 1}
		}
		default: return state
	}
}