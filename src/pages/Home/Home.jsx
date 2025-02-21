import { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'
import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom'

const Home = () => {
  // const navigate = useNavigate()
  const [products, setProducts] = useState([])
  const fetchProducts = async () => {
    const response = await axios.get("https://67a13af45bcfff4fabe1ff80.mockapi.io/products")
    setProducts(response.data)    
}


  useEffect(() => {   //  first time the component is rendered
    fetchProducts()
  },[])
  return (
      <> 
      <Navbar />
      <div className="card-container">
      {
        products.map((product)=>{
          return (
            <div key={product.id} className="card">
              <img src={product.productImage} alt="Product Image" />
              <h2 className="product-name">{product.productName}</h2>
              <p className="product-description">{product.productDescription}</p>
              <p className="product-material">{product.productMaterial}</p>
              {/* <a href={`/product/${product.id}`} className="product-link">View Product</a> */}
              <Link to= {`/singleProduct/${product.id}`}>See More</Link>
              {/* <button onClick={()=>navigate("/singleProduct/")}>See More</button> */}
            </div>
          )
        })
      }
      </div>



      {/* <div className="card">
      <img src="https://via.placeholder.com/300x200" alt="Product Image" className="card-image" />
      <div className="card-content">
          <h2 className="product-name">Product Name</h2>
          <p className="product-description">This is a brief description of the product. It can include details about its features, benefits, or any other relevant information.</p>
      </div>
      </div> */}

      </>
  )
}

export default Home