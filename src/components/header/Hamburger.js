import { useContext } from 'react'
import {siteContext} from "../../context/AppContext"
import { Link } from 'react-router-dom'
import { Container, Offcanvas, Navbar,  Nav} from 'react-bootstrap'

function Hamburger() {

  const appContext = useContext(siteContext);
  console.log(appContext.loggedIn)

  return (<>

<Navbar expand={false} className="navbar fixed-top">
  <Container fluid>
    
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="start"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel" className='display-3'>Menu</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3 display-6">
          <Link to="/" className='text-decoration-none text-dark mb-3'>Home</Link>
          <div className="dropdown-divider"></div>
          {
            (appContext.loggedIn ===false)?
            <>
              <Link to="/auth" className='text-decoration-none text-dark mb-3'>Login</Link>
              <div className="dropdown-divider"></div>
            </>:
            <>
              <Link to="/auth" className='text-decoration-none text-dark mb-3'>Logout</Link>
              <div className="dropdown-divider"></div>
            </>
          }
          
          <Link to="/admin" className='text-decoration-none text-dark'>User (Auth Needed) </Link>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
    
  </Container>
</Navbar>
      
</>)
}

export default Hamburger