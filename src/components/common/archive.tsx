"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Separator } from "../ui/separator";
import Image from "next/image";
import {Github, Link as Link1} from 'lucide-react'
import Link from "next/link"
import {motion} from "framer-motion"

const projects = [
    {
        name: "ResumAI",
        description: "A web app that generates resumes using AI.",
        link: "/",
        image: "/images/resumai.png",
        brief: "solo",
        workedOn: "Full Stack",
        github: "/github",
        techStack :[
            "Next.js",
            "Tailwind CSS",
            "Cohere API",
            "PostgreSQL",
            "Prisma",
            "typescript",
            "ShadCN",
            "Express.js",
            "Node.js",
            "Vercel", "zod", "zustand", "axios", "Node.js", "Express.js", "prisma", "PostgreSQL", "bcrypt", "jsonwebtoken", "multer"
        ]
    },
    {
        name: "LOLly",
        description: "A fun project to search and take AI's help to create fun memes with just a prompt.",
        link: "/",
        image: "/images/lolly.png",
        brief: "solo",
        github: "/github",
        workedOn: "FullStack",
        techStack :[
            "Next.js- Frontend",
            "Next.js- Backend",
            "Cohere API",
            "DreamStudio API:  for image generation",            
            "typescript",
            "Google Search API",
            "Tailwind CSS",
            "ShadCN", "motion", "html2canvas",
            "Vercel"
        ]
    },
    {
        name: "Recruitment Platform",
        description: "A website for GDG onCampus to recruit students as members annually.",
        link: "/",
        github: "/github",
        image: "/images/lolly.png",
        brief: "team",
        workedOn: "FullStack",
        techStack :[
            "Next.js- Frontend",          
            "typescript",
            "Tailwind CSS",
            "ShadCN",
            "Vercel",
            "Radix UI", "motion", "html2canvas", "zod", "zustand", "axios", "Node.js", "Express.js", "prisma", "PostgreSQL", "bcrypt", "jsonwebtoken", "multer", "nodemailer", "aws-sdk", "swagger UI"
        ]
    }
]

const noteworthyProjects = [
  // {
  //   name: "Recruitment Platform",
  //   description: "Worked as a frontend developer in a team to build a scalable Recruitment Platform with resume parsing, candidate management, authentication, and real-time notifications. Integrated advanced form validation, role-based access, and dynamic PDF/Word file handling.",
  //   techStack: [
  //     "Next.js","node.js","Express.js","Prisma","PostgreSQL","Tailwind CSS","ShadCN","Vercel","Radix UI","motion","html2canvas","zod","zustand","axios",
  //   ],
  //   github: "/github",
  //   link: "/"
  // },
  {
    name: "Briefly",
    description: "A chrome extension that uses AI to record meetings, summarize them, and capture snapshots of important images and show in gallery.",
    link: "/",
    github: "/github",
    image: "/images/briefly.png",
    brief: "team: HackVSIT 6.0",
    workedOn: "Frontend",
    techStack :[
        "Next.js",
        "Tailwind CSS",
        "MongoDB",
        "typescript",
        "ShadCN",
        "Express.js",
        "Node.js",
        "Vercel", "motion", "axios"
    ]
}, 
{
  name: "HerGuardian",
  description: "A pwa for women safety.",
  link: "/",
  github: "/github",
  image: "/images/lolly.png",
  brief: "solo- ongoing",
  workedOn: "FullStack",
  techStack :[
      "Next.js- Frontend",
      "Next.js- Backend",
      "Cohere API",
      "DreamStudio API:  for image generation",            
      "typescript",
      "Google Search API",
      "Tailwind CSS",
      "ShadCN", "motion", "html2canvas",
      "Vercel"
  ]
},
]

// “Worked as a frontend developer in a team to build a scalable Recruitment Platform with resume parsing, candidate management, authentication, and real-time notifications. Integrated advanced form validation, role-based access, and dynamic PDF/Word file handling.”

export default function Archive() {
    return(
        <div className="min-h-screen px-8 w-full py-12 flex flex-col items-center justify-center gap-4 my-2">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4 text-left w-full py-12">
                Archive (Stuff I built).
            </h1>
            <Separator/>
            

    <Tabs defaultValue={projects[0].name} className="w-full lg:w-2/3 p-2 gap-0">
    <div>
    {projects.map((project)=>(
        <TabsContent key={project.name} value={project.name} >
          <Card className="w-full bg-white shadow-md rounded-none rounded-t-lg border p-6 min-h-100">
            <CardContent>
                <Image src={project.image} alt={project.name} width={500} height={300} className="rounded-lg mb-4" /> 
            </CardContent>
            </Card>
        </TabsContent>
      ))}
    </div>
    <TabsList className="flex justify-between w-full h-fit rounded-none p-2 border-r border-l">
      {projects.map((project)=>(
        <TabsTrigger key={project.name} value={project.name} className="w-fit border text-gray-900 hover:text-gray-700 rounded-none font-semibold text-[18px] h-fit p-2 shadow-md transition duration-200 ease-in-out data-[state=active]:bg-gray-900 data-[state=active]:text-white">
          {project.name}
        </TabsTrigger>
      ))}
      </TabsList>

      {projects.map((project)=>(
        <TabsContent key={project.name} value={project.name} className="transition ease-in-out duration-200">
          <Card className="rounded-none rounded-b-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">{project.name}
                  <Link href={project.link}>
                  <Link1 className="w-5 h-5"/>
                
                  </Link>
                </CardTitle>
                <CardDescription className="capitalize">{project.brief} | {project.workedOn}</CardDescription>
              </CardHeader>
              <CardContent className="lg:h-44 h-90 md:h-60">
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 text-sm">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-2 bg-gray-800 rounded-md text-gray-200 capitalize"
                    >
                      #{tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              {/* <CardFooter>
                <Button asChild className="bg-gray-800">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="">
                    Visit Project
                  </a>
                </Button>
              </CardFooter> */}
            </Card>
        </TabsContent>
      ))}
    </Tabs>






{/* .group:hover .trapezium {
  transform: translateY(-4px);
  transition: transform 0.3s ease;
}
 */}
  {/* Main card */}
<div className="flex flex-wrap gap-8 mt-18">


  {noteworthyProjects.map((project)=>(
        <motion.div key={project.name} className="relative group max-w-md mx-auto lg:w-full md:w-full w-80"
        initial={{ y: 0 }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}>
        {/* Tab behind card */}
        <div className="absolute -top-3 left-4 w-24 h-6 bg-zinc-700 z-0"
             style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)' }}
              
        ></div>
  <div className="bg-zinc-900 text-white rounded-xl p-6 shadow-lg relative z-10 lg:h-88 md:h-100 h-112 flex flex-col gap-2">
  <h3 className="text-sm text-gray-400">Ongoing project</h3>
  <h2 className="text-2xl font-semibold flex gap-2 items-center">{project.name}
  <Link href={project.link}><Link1  className="w-5 h-5 text-gray-500 hover:text-gray-300"/></Link>
  <Link href={project.github}><Github  className="w-5 h-5 text-gray-500 hover:text-gray-300"/></Link>
  </h2>
  <p className="text-gray-300 mt-2">{project.description}</p>
  {/* Tags below... */}
 <div className="flex flex-wrap text-gray-500 gap-2 my-4">
 {project.techStack.map((tech, index) => (
    <span key={index}>#{tech}</span>
  ))}
 </div>
</div>
</motion.div>
  ))}
</div>

        </div>
    )
}