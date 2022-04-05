import {add, sub} from './types'

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