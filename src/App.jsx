import React, { createContext, useEffect, useRef, useState } from 'react'
import './App.css'
import { About, Hero, Navbar, Projects, Contact, Footer } from './components';

export const SectionsContext = createContext(null);

export const LinkActiveContext = createContext(null);

function App() {

  const [linkActive, setLinkActive] = useState('home')

  const sectionsRefs = {
    home : useRef(null),
    about : useRef(null),
    projects : useRef(null),
    contact : useRef(null),
  }

  useEffect(()=>{
    const scrollHandler = ()=>{
      Object.entries(sectionsRefs).forEach(([sectionId,ref])=>{
        if(ref.current){
          const react = ref.current.getBoundingClientRect();
          if(react.top < window.innerHeight){
            setLinkActive(sectionId)
          }
        }
      })
    }

    window.addEventListener('scroll',scrollHandler);
    window.addEventListener('load',scrollHandler);

    return()=>{
      window.removeEventListener('scroll',scrollHandler);
      window.removeEventListener('load',scrollHandler);
    }
  },[])

  return (
    <>
      <LinkActiveContext.Provider value={{linkActive}}>
        <Navbar />
      </LinkActiveContext.Provider>
      <SectionsContext.Provider value={{sectionsRefs}}>
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </SectionsContext.Provider>
    </>
  )
}

export default App
