import React from 'react'
import Navigation from '../Components/Nav/Nav'
import Footer from "../Components/Footer/Footer"
import { Outlet } from 'react-router-dom';

function SharedLayout() {
  return (
      <div>
          <Navigation />
          <Outlet />
          <Footer />
      </div>
  )
}
// place for the Outlet matters a lot and hence becareful in using it (be sure where to place it)

export default SharedLayout;