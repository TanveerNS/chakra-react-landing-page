import React from 'react'
import Features from '../../components/Features'
import Feature3Col from '../../components/Features/Feature3Col'
import FeatureCTA from '../../components/Features/FeatureCTA'
import FeatureStats from '../../components/Features/FeatureStats'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Testimonials from '../../components/Testimonials'

const Home = () => {
  return (<>
    <Header />
    <Hero />
    <Testimonials/>
    {/* <Features />
    <Feature3Col/>
    <FeatureStats />
    <FeatureCTA /> */}
    </>
  )
}

export default Home