import React from 'react'
import Features from '../../components/Features'
import Feature3Col from '../../components/Features/Feature3Col'
import FeatureCTA from '../../components/Features/FeatureCTA'
import FeatureStats from '../../components/Features/FeatureStats'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
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
    <Pricing />
    <Testimonials/>
    </>
  )
}

export default Home