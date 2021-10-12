import './style.css'
import { Link } from "react-router-dom"
import {BiLogIn} from 'react-icons/bi'
import {AiOutlineShoppingCart, AiOutlineHome} from 'react-icons/ai'
import { useSelector } from "react-redux"
import {Badge, AppBar, Toolbar, Typography} from '@material-ui/core'

const Header = () => {
    
    const {cart} = useSelector(state => state)

    return (
        <AppBar position = 'static'>
            <Toolbar variant = 'dense'>

               <Typography variant="h5" >
                        KenzieShop
               </Typography>

                <div className = 'div-Links'>
                    <Link to='/'> <AiOutlineHome/> Inicio </Link>

                    <Link to='/cart' className = 'MuiToolbar-root MuiToolbar-dense MuiToolbar-gutters'>
                        {cart.length > 0 && (<Badge badgeContent = {cart.length} color = 'secondary'/>)}
                        <AiOutlineShoppingCart/>
                        Carrinho</Link>
                    <Link to='/'> <BiLogIn/> Entrar </Link>
                </div>            
            </Toolbar>
        </AppBar>
    )
}
export default Header;