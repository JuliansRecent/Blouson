function Product({product}) {


    return (
        <li className="product-card">
            <div className="product-img-container"><img src={`${product.image}`} alt="" /></div>
            <div className="product-description"><span>{`${product.price}`}</span><span>heart</span></div>
        </li>
    );
}

export default Product