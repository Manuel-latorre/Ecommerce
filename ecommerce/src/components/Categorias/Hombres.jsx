import Product from "../Product/Product";
import { useSelector } from "react-redux";


const Hombres = ()=>{
    const products= useSelector(state=> state.products)
    return(
        <>
        <h2>Hombres</h2>
        
        {
            products?.filter(product=> product.category === "men's clothing").map(({id, title, price, image}) => {
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

export default Hombres;

