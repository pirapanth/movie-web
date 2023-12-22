import './Navbar.css'
import Click from '../../assets/logo.png'


const Navbar = () => {
    return(
      <div className='nav'>
        <div className="nav-logo">
        <img src={Click} alt="" className='nav-pic'></img>
          Movie-Click
          </div>
        <u1 className="nav-menu">
            <li>Home</li>
            <li>Watch</li>
            <li>About</li>
            <li className='nav-contact'>Contact</li>
        </u1>
        
      </div>
    )
  }
  
  export default Navbar
  