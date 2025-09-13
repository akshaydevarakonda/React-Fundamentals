import ProductCard from "./ProductCard.jsx"
import Profile from "./Profile.jsx"
import "./App.css"
// import "./BlogPost.jsx"
// import BlogPost from "./BlogPost.jsx"

//import UserAvarar from "./UserAvatar.jsx"
import { useState } from "react"


function App() {
  const [count,setCount]=useState(0)
  const [email,setEmail]=useState("")
   const [password,setPassword]=useState("")
   const [formData,setformData]=useState({
    email:"",
    password:""
   })

  // const productName = "BMW CAR"
  //   const price="10000000/-"
  //   const isAvailable=true

 // const username="D.Akshay Vardhan"
  //onst course="B-Tech(CSE)"
  //const userno="23VV1A0512"
  //const blood="O+ve"
  //const DOB="27-03-2005"

//   const products=[{
//    productName:"Product 1",
//    price:"3000",
//    isAvailable:true

// },{
// productName:"Product 2",
//    price:"6000",
//    isAvailable:true

// },{
// productName:"Product 3",
//    price:"8000",
//    isAvailable:true

// }]

// const posts=[
//   { id:1,
//     author:"Akshay",
//     title:"The wings of fire",
//     description:"good one"

//   },
//    {
//     id:2,
//     author:"RaOne",
//     title:"The fire of wings",
//     description:" one good"

//   },
//    {
//     id:3,
//     author:"2.0",
//     title:"The way of water",
//     description:"good bad one"

//   }
// ]

// const handleClick=(name)=>{
//   alert("Hello"+name)
// }
   const handleEmail=(event)=>{
   setEmail(event.target.value)
   }
   const handlePassword=(event)=>{
    setPassword(event.target.value)
   }
 const handleSubmit=(event)=>{
  event.preventDefault()
  alert(`Email: ${formData.email}\n Password: ${formData.password}\n you are logined in`)
 }
// }
 const handleChange=(event)=>{
    // console.log(event.target.email)
    // console.log(event.target.value)
    setformData({
      ...formData,
      [event.target.name]:event.target.value
    })
}
 


//  const handleIncrement=()=>{
//   setCount((prevCount)=>prevCount+1)
//   console.log(count)
 //}

  
  return (
  <div>
      {/* {
      products.map((product)=>(
        <ProductCard
        productName={product.productName}
        price={product.price}
        isAvailable={product.isAvailable}/>
      
      ))
    } */}
    {/* {
      posts.map((post)=>(
        <BlogPost
        key={post.id}
        author={post.author} 
      title={post.title}
    description={post.description}/>   ))
    } */}
    
     <form onSubmit={handleSubmit}>
     <input type="text" name="email" placeholder="email" onChange={handleChange}/>
     <input type="password" name="password" placeholder="type your password" onChange={handleChange}/>
     <button type="submit">Login</button>


     </form> 
 

     {/* <p>{count}</p>
<button onClick={handleIncrement}>Increment</button> */}
    </div>
    
  )
}

export default App
