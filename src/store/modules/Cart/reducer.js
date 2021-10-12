import {ADD_TO_CART, REMOVE_TO_CART, CLEAR_TO_CART} from './actionTypes'

const stateDefault = JSON.parse(localStorage.getItem("@kenzieshop:cart")) || []

const reducerCart = (state = stateDefault, action) => {
    switch(action.type){

        case ADD_TO_CART:
            const {product} = action
            return [...state, product]

        case REMOVE_TO_CART:
            const {newList} = action
            return newList;

        case CLEAR_TO_CART:
            return []

        default:
            return state;
    }
}
export default reducerCart