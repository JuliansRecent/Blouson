import './Product.css'

function Product({product}) {


    return (
        <li className="product-card">
            <img src={`${product.image}`} alt="" />
            <div className='product-title'>{product.title}</div>
            <div className="product-description">
                <span>{`$${product.price}`}</span>
                <span>heart icon</span>
            </div>
        </li>
    );
}

export default Product