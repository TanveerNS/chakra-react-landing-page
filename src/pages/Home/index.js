import React from 'react'
import Carousels from '../../components/Carousels'
import Features from '../../components/Features'
import Feature3Col from '../../components/Features/Feature3Col'
import FeatureCTA from '../../components/Features/FeatureCTA'
import FeatureStats from '../../components/Features/FeatureStats'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import NewsLetter from '../../components/NewsLetter'
import Pricing from '../../components/Pricing'
import Statistics from '../../components/Statistics'
import Testimonials from '../../components/Testimonials'

const Home = () => {
  return (<>
    <Header />
    <Hero />
    {/* <Features />
    <Feature3Col/>
    <FeatureStats />
    <FeatureCTA /> */}
    <Statistics />
    <Carousels />
    <Pricing />
    <Testimonials/>
    <NewsLetter />
    <Footer />
    </>
  )
}

export default Home