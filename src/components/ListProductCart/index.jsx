import { useSelector } from "react-redux";
import Product from "../Product";

const ListProductCart = () => {
    
    const {cart} = useSelector(store => store)
    return (
        <Product list = {cart} isRemove = {true}/>
    )
}

export default ListProductCart;