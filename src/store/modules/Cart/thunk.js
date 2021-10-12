import { toast } from 'react-toastify'
import {addProductCart, revomeProductCart, clearProductCart} from './action'


export const addProductCartThunk = (product) => {
    return (dispatch) => {
        const list = JSON.parse(localStorage.getItem("@kenzieshop:cart")) || []
        if(!list.find((p) => p.id === product.id )){ // dei uma veridicada pra não deixar o usuário adicionar 
            list.push(product)                       // mais de uma vez o produto ao carrinho   
            localStorage.setItem("@kenzieshop:cart", JSON.stringify(list))
            toast.info("ADICIONADO AO CARRINHO", {autoClose: 2500})
            dispatch(addProductCart(product))
        }

    }
}

export const removeProductCartThunk = (id) => {
    return (dispatch, getState) => {
        const {cart} = getState()
        const newList = cart.filter((product) => product.id !== id)
        localStorage.setItem("@kenzieshop:cart", JSON.stringify(newList))
        toast.warning("PRODUTO REMOVIDO DO CARRINHO",  {autoClose: 2500,})
        dispatch(revomeProductCart(newList))
    }
}


export const clearProductCartThunk = () => {
    return (dispatch) => {
        localStorage.setItem("@kenzieshop:cart", JSON.stringify([]))
        toast.success("COMPRA FINALIZADA COM SUCESSO!",  {autoClose: 2500})
        dispatch(clearProductCart())
    }
}