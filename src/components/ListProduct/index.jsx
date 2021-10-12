import './style.css'
import {useSelector} from 'react-redux'
import Product from '../Product'

const ListProduct = () => {

    const {listProducts} = useSelector(store => store)

    return (
           <Product list={listProducts} />
    )
}
export default ListProduct