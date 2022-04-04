

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
	render() {
		return (
			<div className={css.App}>
				<Counter
					count={this.state.count}
					onAdd={this.onAdd}
					onSub={this.onSub}
				/>
			</div>
		 )
	}
  
}

export default App;
