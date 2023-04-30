import { useEffect, useState } from 'react';
import './Product.css'
import { addCart, deleteCart } from '../../redux/actions';
import { getProducts } from '../../redux/actions';
import { useDispatch, useSelector  } from 'react-redux';

const Product = ({id, title, price, image}) => {

    const dispatch = useDispatch();
    const { cart } = useSelector(state => state)

    useEffect(() => {
        dispatch(getProducts())
    }, [cart])
  

    const [isCart, setIsCart] = useState(false)

    const handleCart = () => {
        if(isCart === true) {
            setIsCart(false)
            deleteCart(id)
        }
        else {
            setIsCart(true)
            addCart({id, title, image, price})
        }
    }

    useEffect(() => {
        cart.forEach((prod) => {
            if(prod.id === id) {
                setIsCart(true)
            }
        })
    }, [])

    return (
        <div className='cardsProducts'>
            <h3 className='titleCard'>{title}</h3>
            <img className="imgCard" src={image} />
            <h3>{price}</h3>
            <button className='addToCart' onClick={handleCart}>🛒</button>
        </div>
    )
}

export default Product;