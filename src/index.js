import React from 'react';
import App from './Components/App/App';
import {createRoot} from 'react-dom/client'
import { createStore, applyMiddleware, compose } from 'redux';
import {rootReducer} from './redux/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'


const store = createStore(rootReducer, compose(
	applyMiddleware(
		thunk
	),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
	<Provider store={store}>
		<App/>	
	</Provider>
)



