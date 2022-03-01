import { useContext} from 'react'
import {siteContext} from "../../context/AppContext"
import { Link } from 'react-router-dom'
import { Container, Offcanvas, Navbar,  Nav} from 'react-bootstrap'
import {signOut, onAuthStateChanged} from "firebase/auth";

function Hamburger() {

  const {setUser, user, AuthKey} = useContext(siteContext);

  onAuthStateChanged(AuthKey, (currentUser)=>{
    setUser(currentUser)
  })


  const signOutUser = async ()=>{
    try{
      await signOut(AuthKey);
    }catch(err){
      console.log(err);
    }
    
  }

  

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
        <Offcanvas.Title id="offcanvasNavbarLabel" className='text-wrap display-3'>Menu </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3 display-6">
          <Link to="/" className='text-decoration-none text-dark mb-3'>Home</Link>
          <div className="dropdown-divider"></div>
          {
            (user === null)?
            <>
              <Link to="/auth" className='text-decoration-none text-dark mb-3'>Login</Link>
              <div className="dropdown-divider"></div>
            </>:
            <>
              <Link to="/auth" onClick={signOutUser} className='text-decoration-none text-dark mb-3'>Logout</Link>
              <div className="dropdown-divider"></div>
            </>
          }
          {
            (user !== null)?
            <Link to="/Dashboard" className='text-decoration-none text-dark'>Dashboard</Link>
            :
            <></>
          }
          
          
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
    
  </Container>
</Navbar>
      
</>)
}

export default Hamburger