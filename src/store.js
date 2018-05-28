import { createStore, applyMiddleware } from 'redux'; 
import { reducer } from './reducers/main'; 
import thunk from 'redux-thunk'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk)); 

export default store; 