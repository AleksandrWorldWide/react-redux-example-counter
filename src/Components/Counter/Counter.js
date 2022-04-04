import css from './Counter.module.scss'

const Counter = props => {

	let {count, onAdd, onSub} = props
	return(
		<div className={css.Counter}>
			<h1>Counter: {count}</h1>
			<button className={css.add} onClick={onAdd}>add +</button>
			<button className={css.sub} onClick={onSub}>sub -</button>
		</div>
	)
}

export default Counter