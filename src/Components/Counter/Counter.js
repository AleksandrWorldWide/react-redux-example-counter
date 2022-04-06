import css from './Counter.module.scss'
import { connect } from 'react-redux'
import { onAdd, onSub, onAsync } from '../../redux/actions'
import { Watch } from 'react-loader-spinner'

const Counter = ({count, onAdd, onSub, onAsync, loading}) => {
	console.log(loading)
	return(

		<div className={css.Counter}>
			<h1>Counter: {count}</h1>
			<button className={css.add} onClick={onAdd}>add +</button>
			<button className={css.sub} onClick={onSub}>sub -</button>
			{
				loading  
				? <Watch/> 
				: <button className={css.async} onClick={onAsync}>async +</button>
			}
		</div>
	)
}

const mapState = (state) => {

	return (
		{
			count: state.counterReducer.count,
			loading: state.appReducer.loading
		}
	)
}

const mapDispatch = (dispatch) => {
	return {
		onAdd: () => {dispatch(onAdd())},
		onSub: () => {dispatch(onSub())},
		onAsync: () => {
				dispatch(onAsync())
		}
	}
}
	


export default connect(mapState, mapDispatch)(Counter)
