import React from 'react';
import './Projects.css';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      id: 1,
      image_url: 'project1_image_url',
      project_name: 'Project 1',
      description: 'Description of Project 1',
      tech_stack: ['Tech 1', 'Tech 2'],
      source_link: 'https://github.com/project1'
    },
    {
      id: 2,
      image_url: 'project2_image_url',
      project_name: 'Project 2',
      description: 'Description of Project 2',
      tech_stack: ['Tech 3', 'Tech 4'],
      source_link: 'https://github.com/project2'
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
        Deployed 50+ scalable websites and cross-platform mobile applications.
        Collaborated in 100+ projects with 30+ clients all around the world. Looking for next project/role.
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
