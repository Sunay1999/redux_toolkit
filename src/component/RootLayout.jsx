import React from 'react'
import {Outlet} from 'react-router-dom'
import NavBarPanel from './NavBarPanel'
import { Provider } from 'react-redux'
import Store from './Store/Store'

const RootLayout = () => {
  return (
    <>
    <Provider store={Store}> 
    <NavBarPanel/>
    <main>
        <Outlet/>
    </main>
    </Provider>
    </>
  )
}

export default RootLayout
