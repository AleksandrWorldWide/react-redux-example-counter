import css from './Counter.module.scss'
import { connect } from 'react-redux'
import { onAdd, onSub } from '../../redux/actions'

const Counter = ({count, onAdd, onSub}) => {
	return(

		<div className={css.Counter}>
			<h1>Counter: {count}</h1>
			<button className={css.add} onClick={onAdd}>add +</button>
			<button className={css.sub} onClick={onSub}>sub -</button>
			{/* <button className={css.async} onClick={onAsync}>async +</button> */}
		</div>
	)
}

const mapState = (state) => (
	{
		count: state.counterReducer.count
	}
)

const mapDispatch = (dispatch) => {
	return {
		onAdd: () => {dispatch(onAdd())},
		onSub: () => {dispatch(onSub())}
	}
}
	


export default connect(mapState, mapDispatch)(Counter)
