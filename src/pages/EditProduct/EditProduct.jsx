// import React from 'react'
import './EditProduct.css'

import Navbar from "../../components/Navbar/Navbar"
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

const EditProduct = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  const [product,setProduct] = useState({})

  const handleChange= (e)=>{
    const {name,value} = e.target
    setProduct({
      ...product,
      [name] : value
    })
  }

  //edit product
  const editProduct = async (e)=>{
    e.preventDefault()
    const response = await axios.put("https://67a13af45bcfff4fabe1ff80.mockapi.io/products/" + id,product)
    if(response.status == 200){
      navigate("/singleProduct/" + id)
    }else{
      alert("Something went wrong. Try again!")
    }
  }
  
  // fetch product of id
  const fetchProduct = async () => {
    const response = await axios.get("https://67a13af45bcfff4fabe1ff80.mockapi.io/products/" + id)
    setProduct(response.data)
    }
    useEffect(()=>{
      fetchProduct()
    },[])

  return (
    <>
    <Navbar />
    <div id="product-form">
      <h2>Edit Product</h2>
      <form onSubmit={editProduct}>
            <label htmlFor="productImage">Product Image:</label>
            <input value={product.productImage} type="text" id="productImage" name="productImage" placeholder="Enter product image URL" onChange={handleChange}  />

            <label htmlFor="productName">Product Name:</label>
            <input value={product.productName} type="text" id="productName" name="productName" placeholder="Enter product name" onChange={handleChange}  />

            <label htmlFor="productDescription">Product Description:</label>
            <textarea value={product.productDescription} id="productDescription" name="productDescription" rows="4" onChange={handleChange} ></textarea>

            <label htmlFor="productMaterial">Product Material:</label>
            <input value={product.productMaterial} type="text" id="productMaterial" name="productMaterial" placeholder="Enter product material name" onChange={handleChange}  />

            <button type="submit">Submit</button>
      </form>
      </div>
    </>
  )
}

export default EditProduct