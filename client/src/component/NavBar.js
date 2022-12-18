import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { setAuth } from '../store/slices/userSlice'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { SHOP_ROUTE, ADMIN_ROUTE, LOGIN_ROUTE } from '../utils/constans'
import { useNavigate } from  'react-router-dom'


const NavBar = () => {
  const dispatch = useDispatch()
  const { user, isAuth } = useSelector((state) => state.user)

  const navigate = useNavigate()

  const handleLogOut = () => {
    dispatch(setAuth())
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link style={{color: 'white', textDecoration: 'none'}} to={SHOP_ROUTE}>CompraDevice</Link>
        {isAuth
          ? <Nav className="ml-auto">
              <Button 
                variant='outline-light'
                onClick={() => navigate(ADMIN_ROUTE)}
              >
              Admin Panel
              </Button>
              <Button 
                variant='outline-light' 
                className="mx-3"
                onClick={handleLogOut}
              >
              Logout
              </Button>
            </Nav>
          : <Nav className="ml-auto">
              <Button variant='outline-light' onClick={() => navigate(LOGIN_ROUTE)}>Login</Button>
            </Nav>
        }
      </Container>
      </Navbar>
  )
}

export default NavBar