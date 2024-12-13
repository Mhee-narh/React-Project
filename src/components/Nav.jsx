import logo from '../assets/logo.svg'
import './Nav.css'


function Nav(){
    return(
        <>
            <nav>
                <img src={logo}  alt="Logo"/>
                <div className="navItems">
                    <a href="">Become A software Engineer</a>
                    <button>View and Select Engineer</button>
                </div>
            </nav>
        </>
    )
}

export default Nav