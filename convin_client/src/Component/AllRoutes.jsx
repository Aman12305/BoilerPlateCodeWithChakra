import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import HomePage from './HomePage/HomePage'
import Layout from './Layout'

export default function AllRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage/>}/>
        </Route>
      </Routes>
    </Router>
  )
}
