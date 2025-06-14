import { Typography } from '@mui/material'
import React from 'react'
import Banner from '../../Banner/Banner'
import HeroSection from '../../Banner/pages/HeroSection'
import HeroSplit from '../../Banner/pages/HeroSplit'

const HomeExp = () => {
  return (
    <>
      {/* <Typography mt={10} variant='h5'>Home Explore</Typography> */}
       <Banner />
       <HeroSection />
       <HeroSplit />

    </>
  )
}

export default HomeExp
