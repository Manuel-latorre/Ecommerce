import Product from "../Product/Product";
import { useSelector } from "react-redux";


const Joyas = ()=>{
    const products= useSelector(state=> state.products)
    return(
        <>
        <h2>Joyas </h2>
        
        {
            products?.filter(product=> product.category === 'jewelery').map(({id, title, price, image}) => {
                return (
                    <div className="cards">

                    <Product 
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    image={image}
                    />
                    </div>
                )

            })
        }
        </>
    )
}

export default Joyas;


