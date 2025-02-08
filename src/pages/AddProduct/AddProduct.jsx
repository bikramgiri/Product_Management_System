import { useState } from "react"
import Navbar from "../../components/Navbar/Navbar"
import './AddProduct.css'
import axios from "axios"
import { useNavigate } from "react-router-dom"

const AddProduct = () => {
  const navigate = useNavigate()
  // First Appraoch
  // const [productImage,setProductImage] = useState("")
  // const [productName,setProductName] = useState("")
  // const [productDescription,setProductDescription] = useState("")
  // const [productMaterial,setProductMaterial] = useState("")

  // const addProduct = async (e) => {
  //   e.preventDefault()
  //   const response = await axios.post("https://67a13af45bcfff4fabe1ff80.mockapi.io/products",{
  //     productImage: productImage,
  //     productName: productName,
  //     productDescription: productDescription,
  //     productMaterial: productMaterial
  //   })
  //   console.log(response)
  // }


  // // Second Approach
  // const addProduct = async (e)=>{
  //   e.preventDefault() // Prevents page from refreshing
  //   const formData = new FormData(e.currentTarget); // {}   FormData object
    
  //   const data = Object.fromEntries(formData) // {}  Convert FormData object to JSON
  //   const response = await axios.post("https://67a13af45bcfff4fabe1ff80.mockapi.io/products",data)
  //   console.log(response)
  // }


  // Third Approach
  const [data,setData] = useState({
    productImage: "",
    productName: "",
    productDescription: "",
    productMaterial: ""
  })

  // const data = {
  //   productImage: "hello",
  //   productName: "",
  //   productDescription: "",
  //   productMaterial: ""
  // }
  
  // data = {
  //   productImage: "hello",
  //   productName: "this is a product",
  //   productDescription: "",
  //   productMaterial: ""
  // }

  // data = {
  //   productImage: "hello",
  //   productName: "this is a product",
  //   productDescription: "this is a product description",
  //   productMaterial: ""
  // }
  
  // data = {
  //   productImage: "hello",
  //   productName: "this is a product",
  //   productDescription: "this is a product description",
  //   productMaterial: "this is a product material"
  // }

  const handleChange = (e)=>{
    const {name,value} = e.target
    setData({
      ...data,  // Spread operator
      [name]: value  // Dynamically assign value to key
    })
    console.log(data)
  }

  const addProduct = async (e)=>{
    e.preventDefault() // Prevents page from refreshing
    const response = await axios.post("https://67a13af45bcfff4fabe1ff80.mockapi.io/products",data)
    if(response.status === 201){
      navigate("/")   
    }else{
      alert("Something went wrong. Try again later")
    }
  }
  
  return (
    <>
    <Navbar />
    <div id="product-form">
      <h2>Product Information</h2>
      <form onSubmit={addProduct}>
        {/* first approach */}

            {/* <label htmlFor="productImage">Product Image:</label>
            <input type="text" id="productImage" name="productImage" placeholder="Enter product image URL" onChange={(e)=>setProductImage(e.target.value)} />

            <label htmlFor="productName">Product Name:</label>
            <input type="text" id="productName" name="productName" placeholder="Enter product name" onChange={(e)=>setProductName(e.target.value)} />

            <label htmlFor="productDescription">Product Description:</label>
            <textarea id="productDescription" name="productDescription" rows="4"onChange={(e)=>setProductDescription(e.target.value)} ></textarea>

            <label htmlFor="productMaterial">Product Material:</label>
            <input type="text" id="productMaterial" name="productMaterial" placeholder="Enter product material name" onChange={(e)=>setProductMaterial(e.target.value)} /> */}



{/* Second Approach */}

            {/* <label htmlFor="productImage">Product Image:</label>
            <input type="text" id="productImage" name="productImage" placeholder="Enter product image URL"  />

            <label htmlFor="productName">Product Name:</label>
            <input type="text" id="productName" name="productName" placeholder="Enter product name"  />

            <label htmlFor="productDescription">Product Description:</label>
            <textarea id="productDescription" name="productDescription" rows="4" ></textarea>

            <label htmlFor="productMaterial">Product Material:</label>
            <input type="text" id="productMaterial" name="productMaterial" placeholder="Enter product material name"  /> */}


{/* Third Approach */}
           
           <label htmlFor="productImage">Product Image:</label>
            <input type="text" id="productImage" name="productImage" placeholder="Enter product image URL" onChange={handleChange} />

            <label htmlFor="productName">Product Name:</label>
            <input type="text" id="productName" name="productName" placeholder="Enter product name" onChange={handleChange} />

            <label htmlFor="productDescription">Product Description:</label>
            <textarea id="productDescription" name="productDescription" rows="4" onChange={handleChange} ></textarea>

            <label htmlFor="productMaterial">Product Material:</label>
            <input type="text" id="productMaterial" name="productMaterial" placeholder="Enter product material name" onChange={handleChange}  />



            <button type="submit">Add Product</button>
      </form>
      </div> 
    </>
  )
}

export default AddProduct