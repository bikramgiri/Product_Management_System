import { useNavigate, useParams } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar"
import './SingleProduct.css'
import axios from 'axios'
import { useEffect, useState } from "react"

const SingleProduct = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  // store product data coming in object
  const [product, setProduct] = useState({})

  // delete product
  const deleteProduct = async () => {
    //api hit to delete product
    const response = await axios.delete("https://67a13af45bcfff4fabe1ff80.mockapi.io/products/" + id)
    if(response.status === 200){
      navigate("/")
      // alert("Product Deleted Successfully")
    }else{
      alert("Something went wrong. Please try again!!")
    }
  }


  // fetch single product
  const fetchSingleProduct = async () => {
  const response = await axios.get("https://67a13af45bcfff4fabe1ff80.mockapi.io/products/" + id)
  setProduct(response.data)
  }
  useEffect(() => {
    fetchSingleProduct()
  }, [])
  
  return (
    <>
    <Navbar />
    <div className="card">
              <img src={product.productImage} alt="Product Image" />
              <h2 className="product-name">{product.productName}</h2>
              <p className="product-description">{product.productDescription}</p>
              <p >{product.productMaterial}</p>
              <button onClick={deleteProduct}>Delete</button> <b></b> <b></b> <b></b> <b></b>
              <button onClick={()=>navigate(`/editProduct/${product.id}`)}>Edit</button>

    </div>

    </>
  )
}

export default SingleProduct