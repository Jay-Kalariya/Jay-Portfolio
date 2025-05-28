import React from 'react';
import './Projects.css';
import ProjectCard from '../components/ProjectCard';
import Raajsolar from '../assets/RAAJ-SOLAR.png';
import Siddhguruimg from '../assets/SIDDHGURU.png';
import Portfolioimg from '../assets/portfolio.png';
import Roayltoucheimg from '../assets/royaltouche.png';
import PvotIMg from '../assets/pvotimg.png';
import Interiormaata from '../assets/Interiorimg.png';
import Building from "../assets/image.png";
import Building1 from "../assets/image2.png";
import Building2 from "../assets/image3.png";
import crown from "../assets/image4.png";
import credai from "../assets/image5.png";
const Projects = () => {
  const projects = [
    {
      id: 1,
      image_url: Roayltoucheimg,
      project_name: 'Royale-Touche Website',
      // description: 'Description of Project 1',
      tech_stack:["NextJs"],
      // source_link: 'https://royale-touche.vercel.app/'
      source_link: 'https://plywood.royaletouche.com/'
      // https://plywood.royaletouche.com/
    },
    {
      id: 2,
      image_url: Siddhguruimg,
      project_name: 'Siddhguru Website',
      // description: 'My Personal Portfolio',
      tech_stack: ['React',"Sass"],
      source_link: 'https://www.sribrahmrishiashram.org/'
    },
     {
      id: 3,
      image_url: Raajsolar,
      project_name: 'Raaj-Solar Website',
      // description: 'Description of Project 2',
      tech_stack: ['React', 'Sass'],
      source_link: 'https://raajsolar.com/'
    },
          {
        id: 9,
        image_url: Building2,
        project_name: 'Agency Website Freelancing',
        // description: 'Description of Project 2',
        tech_stack: ['NextJs'],
        
        source_link: 'https://roardata.com.au/'
        // source_link: 'https://humbee-developers.github.io/InteriorMaata-/'
      },
              {
        id: 10,
        image_url: crown,
        project_name: 'Royal Crown',
        // description: 'Description of Project 2',
        tech_stack: ['NextJs'],
        
        source_link: 'https://royalcrownfont.vercel.app/'
        // source_link: 'https://humbee-developers.github.io/InteriorMaata-/'
      },
    {
        id: 4,
        image_url: Portfolioimg,
        project_name: 'My Personal Portfolio',
        // description: 'Description of Project 2',
        tech_stack: ['React'],
        source_link: 'https://jaykalariya.vercel.app/'
      },
      {
        id: 5,
        image_url: PvotIMg,
        project_name: 'PVOT Website',
        // description: 'Description of Project 2',
        tech_stack: ['React'],
        source_link: 'https://humbee-developers.github.io/PVOT/'
      },
      {
        id: 6,
        image_url: Interiormaata,
        project_name: 'InteriorMaata Website',
        // description: 'Description of Project 2',
        tech_stack: ['NextJs'],
        
        source_link: 'https://interiormaata.com/'
        // source_link: 'https://humbee-developers.github.io/InteriorMaata-/'
      },
      {
        id: 7,
        image_url: Building,
        project_name: 'The Building Company',
        // description: 'Description of Project 2',
        tech_stack: ['HTML CSS JS'],
        
        source_link: 'https://thebuildingcompany.vercel.app/'
        // source_link: 'https://humbee-developers.github.io/InteriorMaata-/'
      },
         {
        id: 8,
        image_url: Building1,
        project_name: 'Website Template',
        // description: 'Description of Project 2',
        tech_stack: ['HTML CSS JS'],
        
        source_link: 'https://website-template-teal.vercel.app/'
        // source_link: 'https://humbee-developers.github.io/InteriorMaata-/'
      },
       {
        id: 11,
        image_url: credai,
        project_name: 'Credai Rera',
        // description: 'Description of Project 2',
        tech_stack: ['HTML CSS JS'],
        
        source_link: 'https://reraarea.com/'
        // source_link: 'https://humbee-developers.github.io/InteriorMaata-/'
      },
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
