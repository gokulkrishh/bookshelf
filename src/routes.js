import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Layout from './components/Layout'

const Home = lazy(() => import('./components/Home'))
const MyBooks = lazy(() => import('./components/MyBooks'))
const Settings = lazy(() => import('./components/Settings'))

const routes = () => {
  return (
    <Layout>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path="/" component={Home} />
          <Route path="/mybooks" component={MyBooks} />
          <Route path="/settings" component={Settings} />
        </Suspense>
      </Router>
    </Layout>
  )
}

export default routes
