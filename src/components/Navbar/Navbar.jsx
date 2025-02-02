import './Navbar.css';

const Navbar = () => {
  return (
      <nav>
      <div className="nav-container">
          <a href="#" className="logo">Logo</a>
          
          <ul className="nav-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Contact</a></li>
          </ul>

          <button className="hamburger" aria-label="Mobile Menu">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>

      </div>
  </nav>
  )
}

export default Navbar
