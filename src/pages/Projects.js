import React from 'react';
import './Projects.css';
import ProjectCard from '../components/ProjectCard';
import Raajsolar from '../assets/raajsolar.png';
const Projects = () => {
  const projects = [
    {
      id: 1,
      image_url: Raajsolar,
      project_name: 'Raaj Solar',
      description: 'Description of Project 1',
      tech_stack:["React","Sass"],
      source_link: 'https://raajsolar.com/'
    },
    {
      id: 2,
      image_url: 'project2_image_url',
      project_name: 'Portfolio',
      description: 'My Personal Portfolio',
      tech_stack: ['React'],
      source_link: 'https://jay-kalariya.vercel.app/'
    },
     {
      id: 3,
      image_url: 'project2_image_url',
      project_name: 'Project 2',
      description: 'Description of Project 2',
      tech_stack: ['Tech 3', 'Tech 4'],
      source_link: 'https://github.com/project2'
    },
    {
        id: 4,
        image_url: 'project2_image_url',
        project_name: 'Project 2',
        description: 'Description of Project 2',
        tech_stack: ['Tech 3', 'Tech 4'],
        source_link: 'https://github.com/project2'
      }
    // Add more projects as needed
  ];

  return (
    <div className="projects" id="projects">
      <h1 className="title projects-title">featuRed pRojecTs</h1>
      <p className="projects-para">
        {/* Deployed 50+ scalable websites and cross-platform mobile applications.
        Collaborated in 100+ projects with 30+ clients all around the world. Looking for next project/role. */}
        Skilled in deploying scalable websites and currently engaged in multiple project collaborations. Actively seeking the next exciting project or role to contribute expertise and drive innovation.
      </p>
      <div className="projects-container">
        {projects.map((project) => (
          <ProjectCard
            key={project.id} 
            image={project.image_url}
            title={project.project_name}
            description={project.description}
            stacks={project.tech_stack}
            source_link={project.source_link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
