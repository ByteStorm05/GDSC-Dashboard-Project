// src/app/about/page.jsx
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  const projectData = [
    {
      title: "Turning Point Institute App",
      description: "A web app built for an Institute with perfect UI !",
      image: "/images/insti.jpg",
      link: "https://turning-point-institute.vercel.app",
    },
    {
      title: "UnCover AI",
      description: "Built UI for an AI image SaaS app",
      image: "/images/uncover.jpg",
      link: "https://uncover-ai-two.vercel.app/",
    },
    {
      title: "GDSC App",
      description: "Built for GDSC❤️ :)",
      image: "/images/gdsc.jpg",
      link: "https://gdsc-dashboard-project.vercel.app/",
    },
  ];


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="mb-4">
        Hello! My name is <strong>Saransh Saluja</strong>, and I am an ICE Sophomore @NSUT and an aspiring web developer. I have a strong interest in building innovative web applications and honing my skills in various programming languages and frameworks.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Background</h2>
      <p className="mb-4">
        I am learning Web Development, DSA and Machine Learning currently. I enjoy tackling complex challenges and constantly learning new technologies to enhance my development skills !
      </p>

      <h2 className="text-2xl font-semibold mb-2">Skills</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Web Development (React, Next.js)</li>
        <li>Programming Languages (JavaScript, Python, C++)</li>
        <li>Database Management (Firebase, Prisma, Postgress)</li>
        <li>Responsive Web Design (Tailwind CSS)</li>
        <li>Version Control (Git)</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Interests</h2>
      <p className="mb-4">
        In addition to programming, I have a keen interest in AI and its applications in everyday life. I enjoy reading about the latest trends in technology and am excited about how AI is shaping the future.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Connect with Me</h2>
      <p>
        Feel free to reach out to me on my LinkedIn profile: 
        <a 
          href="https://in.linkedin.com/in/saransh-saluja-787129282" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-500 underline"
        >
          {" "}LinkedIn
        </a>
        .
      </p>
      <p>
        Here&apos;s my Github : 
        <a 
          href="https://github.com/ByteStorm05" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-500 underline"
        >
          {" "}Github
        </a>
        .
      </p>

      <section className="mt-10">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
              <Image src={project.image} alt={project.title} width={500} height={300} className="object-cover w-full h-48" />
              <div className="p-4 text-center">
                <h3 className="text-2xl font-semibold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <Link href={project.link} className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                  Explore Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
