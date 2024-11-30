import React from 'react';
import Heading from './Heading';
import Card from './card';

const data = [
  {
    id: 0,
    title: "Interactive Calculator",
    desc: "A fully interactive calculator built using HTML, CSS, and JavaScript. It supports basic arithmetic operations and has a user-friendly interface.",
    img: "/project-1.png",
    tags: ["HTML", "CSS", "JavaScript", "UI Design"]
  },
  {
    id: 1,
    title: "Static Interactive Resume",
    desc: "A visually appealing static resume with interactive elements like hover effects, created using HTML and CSS. Perfect for showcasing personal and professional details.",
    img: "/project-2.jpg",
    tags: ["HTML", "CSS", "Responsive Design"]
  },
  {
    id: 2,
    title: "E-commerce Website",
    desc: "A modern e-commerce website featuring a dynamic product listing and cart functionality. Built using HTML, CSS, JavaScript, and enhanced with TypeScript for scalability.",
    img: "/project-3.png",
    tags: ["HTML", "CSS", "JavaScript", "TypeScript", "E-commerce"]
  },
  {
    id: 3,
    title: "Dynamic Resume",
    desc: "A dynamic and fully customizable resume with the ability to add, edit, or delete sections. Developed using HTML, CSS, JavaScript, and TypeScript for better maintainability.",
    img: "/project-4.png",
    tags: ["HTML", "CSS", "JavaScript", "TypeScript", "Dynamic Content"]
  }
];

const Projects = () => {
  return (
    <div id='projects' className='container mx-auto pt-32 px-4' data-aos="zoom-in-up">
      {/* Heading Section */}
      <Heading title='My Projects' />

      {/* Projects Grid */}
      <div className='grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-10 mt-10' data-aos="zoom-in-up">
        {data.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
