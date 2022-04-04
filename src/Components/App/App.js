

import css from './App.module.scss'
import Counter from '../Counter/Counter'
import React from 'react'

class App extends React.Component {
	state = {
		count: 0
	}
	 onAdd = () => {
		return(
			this.setState({
				count: this.state.count + 1
			})
		)
	}
	onSub = () => {
		return(
			this.setState({
				count: this.state.count - 1
			})
		)
	}
	onAsync = () => {
		return(
			setTimeout(() => {
				return(
					this.setState({
						count: this.state.count + 1
					})
				)
			}, 2000)
		)
	}
	render() {
		return (
			<div className={css.App}>
				<Counter
					count={this.state.count}
					onAdd={this.onAdd}
					onSub={this.onSub}
					onAsync={this.onAsync}
				/>
			</div>
		 )
	}
  
}

export default App;
