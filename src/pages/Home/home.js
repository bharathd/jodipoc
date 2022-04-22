import React from 'react'
import Footer from '../../Components/home/footer'
import LayoutHeader from '../../Components/home/layoutHeader'
import HomeRegister from '../../pages/Home/homeRegister'
import SuccesStories from '../../pages/Home/succesStories'
import About from '../../pages/Home/about'
import Skillbar from '../../pages/Home/skillbar'

function Home() {
  return (
    <>
      <LayoutHeader />
      <div className="main-content">
        <div className="rs-quote style1 pt-40 pb-100 md-pt-72 md-pb-80">
          <HomeRegister />
          <About />
          <Skillbar />
          <SuccesStories />
          <Footer />
        </div>
      </div>
    </>

  )
}

export default Home