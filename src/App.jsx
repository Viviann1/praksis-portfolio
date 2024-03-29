import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <div className='max-w-7xl mx-auto'>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Portfolio />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
    </div>
  )
}

export default App