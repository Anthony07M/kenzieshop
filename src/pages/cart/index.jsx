import './style.css'
import ListProductCart from "../../components/ListProductCart";
import CardDetailsVenda from '../../components/CardDetailsVenda';
import { useSelector } from 'react-redux';

const Cart = () => {
    const {cart} = useSelector(state => state) 
    
    return (
        <div className = 'container-page-cart'>
            
            {cart.length > 0 && (<CardDetailsVenda/>)} 
            <ListProductCart/>
        </div>
    )
}
export default Cart;