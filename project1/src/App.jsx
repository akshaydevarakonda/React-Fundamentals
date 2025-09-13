import ProductCard from "./ProductCard.jsx"
import Profile from "./Profile.jsx"

function App() {

  const productName = "BMW CAR"
    const price="10000000/-"
    const isAvailable=true
  
  return (
    <>
     <ProductCard car={productName} price={price} isAvailable={isAvailable===true ? "Available":"out of stock"}/>
   
    </>
  )
}

export default App
