import './style.css'
import { useDispatch } from "react-redux"
import { addProductCartThunk, removeProductCartThunk } from "../../store/modules/Cart/thunk"
import { Button } from '@material-ui/core'

const Product = ({list, isRemove = false}) => {
    const dispatch = useDispatch()

    const handleClickAdd = (product) => {
        dispatch(addProductCartThunk(product))
    }

    const handleClickRemove = (id) => {
        dispatch(removeProductCartThunk(id))
    }

    return (
        <div className ='container'>
            {isRemove ?
                 (list.map((product) => {
                    return <div key = {product.id} className = 'div-container-product'>
                        <span className = 'span-img'><img src = {product.image} alt = {product.name}/></span>
                        <span className = 'span-name'>{product.name}</span>
                        <span className ='span-price'>R${product.price}, 00</span>
                        <Button onClick = {() => handleClickRemove(product.id)} 
                            variant = 'contained'
                            color = 'secondary'
                            >Remover do carinho</Button>
                    </div>
                })) 
                :
                (list.map((product) => {
                    return <div key = {product.id} className = 'div-container-product'>
                        <span className = 'span-img'><img src = {product.image} alt = {product.name}/></span>
                        <span className = 'span-name'>{product.name}</span>
                        <span className ='span-price'>R${product.price}, 00</span>
                        <Button onClick = {() => handleClickAdd(product)}
                            color = 'primary'
                            variant = 'contained'
                            >Adicionar ao carrinho</Button>
                    </div>
                }))
                }
        </div>
    )
}

export default Product;