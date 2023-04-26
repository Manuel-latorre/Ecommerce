import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from "../../redux/actions";
import Product from '../Product/Product'
import './Products.css'



const Products = () => {
    const dispatch = useDispatch();
    const { products } = useSelector(state => state)

    useEffect(() => {
        dispatch(getProducts())
    }, []);

    return (
        <div className="cards">
            {
                products?.map(({id, title, price, image}) => {
                    return (
                        <Product 
                        key={id}
                        id={id}
                        title={title}
                        price={price}
                        image={image}
                        />
                    )

                })
            }
        </div>
    )
}

export default Products;