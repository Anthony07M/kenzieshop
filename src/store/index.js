import {combineReducers, applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import reducerCart from './modules/Cart/reducer'
import reducerListProducts from './modules/ListProducts/reducer'


const reducers = combineReducers({cart: reducerCart, listProducts: reducerListProducts})
const store = createStore(reducers, applyMiddleware(thunk))

export default store