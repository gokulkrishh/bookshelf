import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './components/Home'
import MyBooks from './components/MyBooks'
import Settings from './components/Settings'
import Layout from './components/Layout'

const routes = () => {
  return (
    <Layout>
      <Router>
        <Route path="/" component={Home} />
        <Route path="/mybooks" component={MyBooks} />
        <Route path="/settings" component={Settings} />
      </Router>
    </Layout>
  )
}

export default routes
