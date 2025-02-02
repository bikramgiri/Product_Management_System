import Navbar from '../components/Navbar/Navbar'
import './Home.css'

const Home = () => {
  return (
// This(<> </>) is a React fragment. It allows us to return multiple elements without adding an extra div.
  <> 
      <Navbar />
      <div className="card">
      <img src="https://via.placeholder.com/300x200" alt="Product Image" className="card-image" />
      <div className="card-content">
          <h2 className="product-name">Product Name</h2>
          <p className="product-description">This is a brief description of the product. It can include details about its features, benefits, or any other relevant information.</p>
      </div>
  </div>
  </>
  )
}

export default Home