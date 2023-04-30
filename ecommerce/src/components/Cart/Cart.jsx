import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/actions'
import Product from '../Product/Product'

const Cart = ()=>{

    const dispatch = useDispatch()
    const { cart } = useSelector(state => state)

    useEffect(() => {
        dispatch(getProducts())
    }, [cart])
    

    return(
        <div>
            <h2>Soy el Cart</h2>
        </div>
    )
}

export default  Cart;