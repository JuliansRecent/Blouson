import Product from "../Product/Product";

function Cart({removeProductfromCart, cartItems}) {
    return (
        <div>
            <h2>Your Shopping Bag</h2>
            {cartItems.map((product, index) => (
                <Product
                addToCart={removeProductfromCart}
                action={'remove'}
                key={index}
                index={index}
                product={product}
                />
            ))}
        </div>
    );
}

export default Cart