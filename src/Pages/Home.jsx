import React from 'react'
import About from '../Components/About'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import Practice from '../Components/Practice'


const Home = () => {
    return (
        <div className="home">
            
            <Hero />
            <Practice />
            <About />
            <Contact />
            <Footer />
    
        </div>
    )
}

export default Home
