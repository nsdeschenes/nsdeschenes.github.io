import React from 'react'

import projects from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import Grid from '../components/Grid'

const Projects = () => {
  return (
    <Grid>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </Grid>
  )
}

export default Projects
