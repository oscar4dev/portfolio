import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Homepage from './components/Homepage'
import About from './components/About'
import Projects from './components/Projects'
import Technologies from './components/Technologies'
import Contact from './components/Contact'

function App() {
    return (
      <div className='font-mono text-slate-900 bg-blue-100 lg:text-lg lg:font-semibold'>
        <Header />
        <Main>
          <Homepage />
          <About />
          <Projects />
          <Technologies />
          <Contact />
        </Main>
        <Footer />
      </div>
    )
}

export default App