import { Github, Video } from 'lucide-react';
import img1 from '../assets/projects/1.png';
import img2 from '../assets/projects/2.png';
import img3 from '../assets/projects/3.png';
import img4 from '../assets/projects/4.png';
import img5 from '../assets/projects/5.png';
import img6 from '../assets/projects/6.png';
import Title from "./Title";

const projects = [
  {
    id: 1,
    title: 'Gestionnaire de tâches',
    description: 'Une application web pour gérer les tâches quotidiennes avec des fonctionnalités de création, modification et suppression.',
    technologies: ['React', 'Node.js', 'Tailwind CSS'],
    demoLink: '#',
    repoLink: '#',
    image: img1,
  },
  {
    id: 2,
    title: 'Plateforme E-commerce',
    description: 'C\'est une plateforme e-commerce complète avec gestion des produits, panier et paiement.',
    technologies: ['Next.js', 'TypeScript', 'Prisma'],
    demoLink: '#',
    repoLink: '#',
    image: img2,
  },
  {
    id: 3,
    title: 'Portfolio interactif',
    description: 'Un portfolio en ligne pour présenter mes projets et compétences de manière interactive et attrayante.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    demoLink: '#',
    repoLink: '#',
    image: img3,
  },
  {
    id: 4,
    title: 'Application de Chat en temps réel',
    description: 'Une application de chat en temps réel permettant aux utilisateurs de communiquer instantanément.',
    technologies: ['React', 'Socket.io', 'Express.js'],
    demoLink: '#',
    repoLink: '#',
    image: img4,
  },
  {
    id: 5,
    title: 'Système de réservation de salles',
    description: 'Une application pour réserver des salles de réunion avec calendrier et notifications.',
    technologies: ['Next.js', 'MongoDB', 'Chakra UI'],
    demoLink: '#',
    repoLink: '#',
    image: img5,
  },
  {
    id: 6,
    title: 'Analyseur de sentiment',
    description: 'Un outil d\'analyse de sentiment qui utilise le traitement du langage naturel pour évaluer les sentiments dans les textes.',
    technologies: ['Python', 'Flask', 'NLTK'],
    demoLink: '#',
    repoLink: '#',
    image: img6,
  },
];

const Projects = () => {
  return (
    <div className="mt-10" id = "Projects">
      <Title title="Mes Projets" />
      <div className="grid md:grid-cols-3 gap-4">
        {
          projects.map((project) => (
            <div key={project.id} className='bg-base-300 p-5 h-fit rounded-xl
            shadow-lg'>
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-xl h-56 object-cover"
              />
              <div>
                <h1 className="my-2 font-bold">
                  {project.title}
                </h1>
                <p className='text-sm'>{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 my-3">
                {project.technologies.map((tech) => (
                  <span className="badge badge-info badge-sm">
                    {
                      tech
                    }
                  </span>
                ))}
              </div>
              <div className="flex">
                <a className='btn btn-info w-2/3' href={project.demoLink}>
                  Demo
                  <Video className='w-4' />
                </a>

                <a className='btn btn-default w-1/3 ml-2' href={project.repoLink}>
                  Repo
                  <Github className='w-4' />
                </a>

              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Projects
