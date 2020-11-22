import { applyMiddleware, combineReducers, createStore } from "redux"
import productReducers from "./reducers/productReducers"
import cartReducers from './reducers/cartReducers'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import userReducer from "./reducers/userReducer"
import authReducer from "./reducers/authReducer"

const reducer = combineReducers({
    products: productReducers,
    cart: cartReducers,
    user: userReducer,
    authDialog: authReducer
})

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(reducer, composedEnhancer)

export default store