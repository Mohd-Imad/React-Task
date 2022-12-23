import React from 'react'
import Header from '../Header/Header'
import About from '../About/About'
import History from '../History/History'
import InitiativeCard from '../InitiativeCard/InitiativeCard'
import Form from '../Form/Form'
import Footer from '../Footer/Footer'
import Copyright from '../Copyright/Copyright'

const Home = () => {
  return (
    <>
      <div>
        <Header />
        <About />
        <History />
        <InitiativeCard />
        <Form />
        <Footer />
        <Copyright />
      </div>
    </>
  )
}

export default Home
