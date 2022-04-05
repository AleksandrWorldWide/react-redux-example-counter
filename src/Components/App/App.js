// import store from '../../redux/store'

import css from './App.module.scss'
import Counter from '../Counter/Counter'
import React from 'react'

function App () {

	//  onAdd = () => {
	// 	return(
	// 		this.setState({
	// 			count: this.state.count + 1
	// 		})
	// 	)
	// }
	// onSub = () => {
	// 	return(
	// 		this.setState({
	// 			count: this.state.count - 1
	// 		})
	// 	)
	// }
	// onAsync = () => {
	// 	return(
	// 		setTimeout(() => {
	// 			return(
	// 				this.setState({
	// 					count: this.state.count + 1
	// 				})
	// 			)
	// 		}, 2000)
	// 	)
	// }

		return (
			<div className={css.App}>
				<Counter/>
			</div>
		 )
}

export default App;
