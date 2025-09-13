import "./ProductCard.css"
function ProductCard(ProductCard){
    const tiltleStyle={
        
    fontSize: "17px",
    fontWeight: "bold",
    color: "black",
    }
    
    return (
       <div className="container">
       <p style={tiltleStyle}> Product Name:{ProductCard.car}</p> 
       <p className="price">Price:{ProductCard.price}</p>
       <p > {ProductCard.isAvailable}</p>
       </div>
    )
}

export default ProductCard