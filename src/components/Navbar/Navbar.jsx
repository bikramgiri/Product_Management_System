
// import './Navbar.css';

// const Navbar = () => {
//   return (
//       <nav>
//       <div className="nav-container">
//           <a href="#" className="logo">Logo</a>
          
//           <ul className="nav-links">
//               <li><a href="#">Home</a></li>
//               <li><a href="#">Add Blog</a></li>
//           </ul>

//           <button className="hamburger" aria-label="Mobile Menu">
//                 <span className="bar"></span>
//                 <span className="bar"></span>
//                 <span className="bar"></span>
//             </button>

//       </div>
//   </nav>
//   )
// }

// export default Navbar




// day 7 7:40

import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  // const navigate = useNavigate()
  return (
  <div className="navbar">
  <Link to="/">Home</Link>
  {/* <a href="/addProduct">Add Product</a>  */}
  <Link to="/addProduct">Add Product</Link>
  {/* <button onClick={()=>navigate('/addProduct')}>Add Product</button> */}
 </div>
  )
}

export default Navbar