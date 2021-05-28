import React, { useEffect, useRef } from 'react'
import { Center, Heading, SimpleGrid } from '@chakra-ui/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import HomePageCard from '../components/HomePageCard'
import { Layout } from '../components/Layout'

const Home = () => {
  gsap.registerPlugin(ScrollTrigger)

  const ref = useRef(null)
  useEffect(() => {
    const element = ref.current
    gsap.fromTo(
      element.querySelector('.welcomeText'),
      {
        opacity: 1,
      },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: element.querySelector('.welcomeHeader'),
          start: 'top top-=100px',
          endTrigger: element.querySelector('.welcomeParagraph'),
          scrub: true,
        },
      },
    )
  }, [])

  return (
    <Layout mb="5em">
      <Center height="100vh" ref={ref} className="welcomeHeader">
        <Heading position="absolute" size="4xl" className="welcomeText">
          WELCOME
        </Heading>
      </Center>
      <SimpleGrid columns={[1, null, 2]} spacing={10}>
        <HomePageCard link="projects">PROJECTS</HomePageCard>
        <HomePageCard link="presentations">PRESENTATIONS</HomePageCard>
        <HomePageCard link="blog">BLOG</HomePageCard>
      </SimpleGrid>
    </Layout>
  )
}

export default Home
