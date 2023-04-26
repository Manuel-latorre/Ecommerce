import { useEffect, useState } from 'react';
import './Product.css'
import { addCart } from '../../redux/actions';
import { getProducts } from '../../redux/actions';
import { useDispatch, useSelector  } from 'react-redux';

const Product = ({id, title, price, image, deleteCart}) => {

    const dispatch = useDispatch();
    const { products } = useSelector(state => state)

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    const [isCart, setIsCart] = useState(false)

    const handleCart = () => {
        if(isCart === true) {
            setIsCart(false)
            deleteCart(id)
        }
        else {
            setIsCart(true)
            addCart({id, title, image})
        }
    }

    useEffect(() => {
        products.forEach((prod) => {
            if(prod.id === id) {
                setIsCart(true)
            }
        })
    }, [products])

    return (
        <div className='cardsProducts'>
            <h3 className='titleCard'>{title}</h3>
            <img className="imgCard" src={image} />
            <h3>{price}</h3>
            <button>🛒</button>
        </div>
    )
}

export default Product;