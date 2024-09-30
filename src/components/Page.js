import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { Outlet } from 'react-router'

export default function Page() {
  return (
      <>
      <Nav/>
      <Outlet></Outlet>
      <Footer/>
      </>
  )
}
