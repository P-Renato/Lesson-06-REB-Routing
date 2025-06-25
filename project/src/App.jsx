import { useState } from 'react'
import './App.css'

function App() {
  const [home, setHome] = useState(true);
  const [contact, setContact] = useState(false);
  const [about, setAbout] = useState(false)

  return (
    <>
      {home && <Home />}
      {contact && <Contact />}
      {about && <About />}

      <button onClick={()=> setHome(val=> !val)}>Show Home</button>
      <button onClick={()=> setContact(val => !val)}>Show Contact</button>
      <button onClick={()=> setAbout(val=> !val)}>Show About</button>


    </>
  )
}

function Home() {
  return(
    <div className='w-full h-32 bg-gray-100 p-20'>
      <h1 className='text-orange-500'>Home</h1>
    </div>
  )
}

function Contact() {
  return(
    <div className='w-full h-32 bg-gray-100 p-20 border mt-6'>
      <h1 className='text-blue-500'>Contact</h1>
    </div>
  )
}

function About() {
  return(
    <div className='w-full h-32 bg-gray-100 p-20'>
      <h1 className='text-orange-500'>About</h1>
    </div>
  )
}


export default App
