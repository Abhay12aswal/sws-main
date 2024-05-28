import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Foot from './components/pages/footer'

const Navbar = React.lazy(()=>import("./components/Navbar"))
const About = React.lazy(()=> import("./components/pages/About"))
const Contact = React.lazy(()=> import("./components/pages/Contact"))
const Home = React.lazy(()=> import("./components/pages/Home"))
const Gallery = React.lazy(()=> import("./components/pages/Gallery"))
const Event = React.lazy(()=> import("./components/pages/Event"))

function App() {

  return (<>
  <Navbar/>
      <Routes> 
        <Route path='/' element={<Suspense fallback={"loading"}><Home/></Suspense>}/>
        <Route path='/home' element={<Suspense fallback={"loading"}><Home/></Suspense>}/>
        <Route path='/about' element={<Suspense fallback={"loading"}><About/></Suspense>}/>
        <Route path='/contact' element={<Suspense fallback={"loading"}><Contact/></Suspense>}/>
        <Route path='/gallery' element={<Suspense fallback={"loading"}><Gallery/></Suspense>}/>
        <Route path='/events' element={<Suspense fallback={"loading"}><Event/></Suspense>}/>
     </Routes>
      </>
   
  )
}

export default App