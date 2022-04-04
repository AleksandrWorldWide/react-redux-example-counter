import css from './Counter.module.scss'

const Counter = props => {

	let {count, onAdd, onSub, onAsync} = props
	return(
		<div className={css.Counter}>
			<h1>Counter: {count}</h1>
			<button className={css.add} onClick={onAdd}>add +</button>
			<button className={css.sub} onClick={onSub}>sub -</button>
			<button className={css.async} onClick={onAsync}>async +</button>
		</div>
	)
}

export default Counter