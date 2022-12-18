import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRouter from './component/AppRouter'
import NavBar from './component/NavBar'
import { useDispatch } from 'react-redux'
import { checkToken } from './store/action/UserAction'
import { Spinner } from 'react-bootstrap'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkToken()).unwrap()
    .finally(() => setLoading(false))
  }, [])

  if(loading) {
    return <Spinner animation='grow' />
  }


  return (
    <Router>
      <NavBar />
      <AppRouter />
    </Router>
  );
}

export default App;
