import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Dashboard from '../../common/Dashboard'
import WelcomePage from '../Welcome'
import Navigations from '../Navigation'
import { navigation } from './navigation'
import DashboardPage from '../DashboardPage'
import PrivacyPolicyPage from '../PrivacyPolicyPage'

const Comp = ({ path }) => {
  return {
    '/': <DashboardPage/>,
    '/dashboard': <DashboardPage/>,
    '/privacy-policy': <PrivacyPolicyPage/>
  }[path]
}

const Router = () => {
  const [userLoaded, setUserLoaded] = useState(false)
  const [user, setUser] = useState(null)

  // const isPrivacyPage = (location.pathname === '/privacy-policy')
  return (
        <>
          {
            !user && true? <Navigations user={user} setUser={setUser} setUserLoaded={setUserLoaded}/> : null
          }
            <Dashboard user={user} setUser={setUser} setUserLoaded={setUserLoaded} userLoaded={userLoaded}>
              <Routes>
                  {
                    navigation.map((nav, index) => (
                      <Route key={index} path={nav?.path} element={<Comp {...{ path: nav?.path }}/>} />
                    ))
                  }
              </Routes>
              </Dashboard>
        </>
  )
}

export default Router
