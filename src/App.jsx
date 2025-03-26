import {  use, useEffect, useState } from "react"
import Footer from "./Footer"
import Layout1 from "./Layout1"
import Navbar from "./components/Navbar"
import Products from "./pages/Products"

export default function App() {

  return (
    <>
    <Navbar/>
    {/* <Header /> */}
      <Layout1>

        <h1 className="text-4xl ">Hello  {name}</h1>
       <main>
This is main entry       </main>
      </Layout1>
      <Footer />
</>
    
  )
}
