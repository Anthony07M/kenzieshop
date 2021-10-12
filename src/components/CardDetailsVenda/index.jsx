import './style.css'
import { useDispatch, useSelector } from "react-redux"
import { Button } from '@material-ui/core'
import {clearProductCartThunk} from '../../store/modules/Cart/thunk'

const CardDetailsVenda = () => {
    
    const dispatch = useDispatch()
    const {cart} = useSelector(state => state)
    const price = cart.map((product) => product).reduce((acc, atual) => acc + atual.price, 0)

    
    const updtatePage = () => {
        dispatch(clearProductCartThunk())
    }


    return (
        <div className= 'container-details-venda'>
            <h2>Detalhes da compra</h2>
            <span className ='span-pai'>
                <span>
                {cart.length} Produtos
                </span>
                <span>
                     R${price}, 00 
                </span>
            </span>
            <div>
                <Button color = 'primary'
                    variant = 'contained'
                    onClick ={updtatePage}
                    >Finalizar Compra</Button>
            </div>
        </div>
    )
}

export default CardDetailsVenda;