import './Product.css'


const Product = ({id, title, price, image}) => {
    return (
        <div className='cardsProducts'>
            <h3 className='titleCard'>{title}</h3>
            <img className="imgCard" src={image} />
            <h3>{price}</h3>
        </div>
    )
}

export default Product;