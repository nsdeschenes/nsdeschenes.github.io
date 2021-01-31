import React from 'react'

import presentations from '../data/presentations'
import ProjectCard from '../components/PresentationCard'
import Grid from '../components/Grid'

const Presentations = () => {
  return (
    <Grid>
      {presentations.map((presentation, index) => (
        <ProjectCard key={index} presentation={presentation} />
      ))}
    </Grid>
  )
}

export default Presentations
