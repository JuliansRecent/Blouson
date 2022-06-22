import React from 'react';


function WhatsHotDisplay(props) {
    return (
        <div>
            <h2>What's Hot</h2>
            <ul>
                {products.length > 0 ? (products.map((product, index) => (
                    <Product 
                    key={index}
                    index={index}
                    product={product}
                    />
                ))
                ) : (
                    <div>Nothing here yet!</div>
                )}
            </ul>
        </div>
    );
}

export default WhatsHotDisplay;