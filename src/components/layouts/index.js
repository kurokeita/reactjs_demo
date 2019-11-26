import React from 'react'
import Header from '../widgets/header'
import Footer from "../widgets/footer";

export default function MainLayout(props){
  return (
    <>
      <Header/>
      {props.children}
      <Footer/>
    </>
  )
}