import {add, sub, loading_on, loading_off} from './types'

export function onAdd() {
	return {
		type: add
	}
}

export function onSub() {
	return {
		type: sub
	}
}

export function onAsync() {
	return function(dispatch) {
		dispatch(onLoading())
		setTimeout(() => {
			dispatch(onAdd())
			dispatch(offLoading())
		}, 2000)
	}
}

export function onLoading() {
	return {
		type: loading_on
	}
}

export function offLoading() {
	return {
		type: loading_off
	}
}