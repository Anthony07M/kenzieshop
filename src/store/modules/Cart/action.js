import {ADD_TO_CART, REMOVE_TO_CART, CLEAR_TO_CART} from './actionTypes'

export const addProductCart = (product) => {
    return {
        type: ADD_TO_CART,
        product
    }
}

export const revomeProductCart = (newList) => {
    return {
        type: REMOVE_TO_CART,
        newList
    }
}

export const clearProductCart = () => {
    return {
        type: CLEAR_TO_CART,
    }
}
