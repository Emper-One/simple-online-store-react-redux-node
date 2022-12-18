import React, { useState } from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { REGISTRATION_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/constans'
import { signUp, signIn } from '../store/action/UserAction'
import { useDispatch, useSelector } from 'react-redux'


const Auth = () => {
  const dispatch = useDispatch()
  const { isLoading } = useSelector((state) => state.user)
  const location = useLocation()
  const navigate = useNavigate()
  const isLogin = location.pathname === LOGIN_ROUTE

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleSign = (e) => {
    e.preventDefault()
    if(isLogin) {
      dispatch(signIn({email, password}))
      .unwrap()
      .then(() => navigate(SHOP_ROUTE))
    } else {
      dispatch(signUp({email, password}))
      .unwrap()
      .then(() => navigate(SHOP_ROUTE))
    }
  }

  return (
    <Container 
      className='d-flex align-items-center justify-content-center'
      style={{height: window.innerHeight - 54}}
    >
      <Card>
        <Card.Body style={{width: '600px'}}>
          <h2 className='text-center'>{isLogin ? 'Login' : 'Registration'}</h2>
          <Form>
            <Form.Control 
              className='mt-3'
              placeholder='Insert Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Control 
              className='mt-3'
              placeholder='Insert Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type='password'
            />
            <div className='d-flex justify-content-between align-items-center mt-3'>
              {isLogin
                ? <div>
                    Don't have an account? <Link to={REGISTRATION_ROUTE}>SignUp</Link>
                  </div>
                : <div>
                    Already have an account? <Link to={LOGIN_ROUTE}>Login</Link>
                  </div>
              }
              <Button 
                variant='outline-success'
                onClick={handleSign}
                disabled={isLoading}
              >
                {isLoading ? 'Loading...' : isLogin ? 'Login' : 'SignUp'}
              </Button>
            </div>
            
          </Form>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Auth