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
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";


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

export default function Projects(){
    return(
        <div className="relative min-h-screen lg:px-8 px-4 w-full py-12 flex flex-col items-center justify-center gap-4 my-2">

<div className=" absolute top-2/3 my-4  h-80 w-30 left-0 -translate-y-1/2 opacity-10 z-0 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            style={{
                backgroundColor: '#000000',
backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='32' viewBox='0 0 16 32'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 24h4v2H0v-2zm0 4h6v2H0v-2zm0-8h2v2H0v-2zM0 0h4v2H0V0zm0 4h2v2H0V4zm16 20h-6v2h6v-2zm0 4H8v2h8v-2zm0-8h-4v2h4v-2zm0-20h-6v2h6V0zm0 4h-4v2h4V4zm-2 12h2v2h-2v-2zm0-8h2v2h-2V8zM2 8h10v2H2V8zm0 8h10v2H2v-2zm-2-4h14v2H0v-2zm4-8h6v2H4V4zm0 16h6v2H4v-2zM6 0h2v2H6V0zm0 24h2v2H6v-2z'/%3E%3C/g%3E%3C/svg%3E")`,
clipPath: 'ellipse(100% 50% at 0% 50%)'
            }}/>
            <div className=" absolute top-1/3 my-4 h-80 w-30 right-0 -translate-y-1/2 opacity-10 z-0 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            style={{
                backgroundColor: '#000000',
backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='32' viewBox='0 0 16 32'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 24h4v2H0v-2zm0 4h6v2H0v-2zm0-8h2v2H0v-2zM0 0h4v2H0V0zm0 4h2v2H0V4zm16 20h-6v2h6v-2zm0 4H8v2h8v-2zm0-8h-4v2h4v-2zm0-20h-6v2h6V0zm0 4h-4v2h4V4zm-2 12h2v2h-2v-2zm0-8h2v2h-2V8zM2 8h10v2H2V8zm0 8h10v2H2v-2zm-2-4h14v2H0v-2zm4-8h6v2H4V4zm0 16h6v2H4v-2zM6 0h2v2H6V0zm0 24h2v2H6v-2z'/%3E%3C/g%3E%3C/svg%3E")`,
clipPath: 'ellipse(100% 50% at 100% 50%)'
            }}/>
          {/*
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='32' viewBox='0 0 16 32'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 24h4v2H0v-2zm0 4h6v2H0v-2zm0-8h2v2H0v-2zM0 0h4v2H0V0zm0 4h2v2H0V4zm16 20h-6v2h6v-2zm0 4H8v2h8v-2zm0-8h-4v2h4v-2zm0-20h-6v2h6V0zm0 4h-4v2h4V4zm-2 12h2v2h-2v-2zm0-8h2v2h-2V8zM2 8h10v2H2V8zm0 8h10v2H2v-2zm-2-4h14v2H0v-2zm4-8h6v2H4V4zm0 16h6v2H4v-2zM6 0h2v2H6V0zm0 24h2v2H6v-2z'/%3E%3C/g%3E%3C/svg%3E"); */}
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4 text-left py-12 w-full">
            Archive (Stuff I built).
        </h1>
        {/* <span className="w-1/8 mb-10">
        <Separator/>
        </span>
         */}

<Tabs defaultValue={projects[0].name} className="w-full lg:w-2/3 p-2 flex gap-0">
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

<TabsList className="flex justify-between w-full h-fit rounded-none p-2 bg-black border-r border-l border-gray-600">
  {projects.map((project)=>(
    <TabsTrigger key={project.name} value={project.name} className=" w-fit text-gray-300 hover:text-gray-400 rounded-none font-semibold text-[18px] h-fit p-2 shadow-md transition duration-200 ease-in-out data-[state=active]:bg-green-900">
      {project.name}
    </TabsTrigger>
  ))}
  </TabsList>



  {projects.map((project)=>(
    <TabsContent key={project.name} value={project.name} className="transition ease-in-out duration-200 ">
      <Card className="rounded-none 
      bg-zinc-900 border border-gray-600 rounded-b-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">{project.name}
              <Link href={project.link}>
              <Link1 className="w-5 h-5"/>
            
              </Link>
            </CardTitle>
            <CardDescription className="capitalize text-gray-500">{project.brief} | {project.workedOn}</CardDescription>
          </CardHeader>
          <CardContent className="lg:h-44 h-90 md:h-60">
            <p className="mb-4 text-gray-300">{project.description}</p>
            <div className="flex flex-wrap gap-2 text-sm">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-2 bg-green-900 rounded-md text-green-300 capitalize"
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
<div className="flex flex-wrap gap-8 mt-18 w-full justify-center">
{noteworthyProjects.map((project)=>(
  <CardContainer key={project.name} className="inter-var relative group max-w-md-mx-auto lg:w-full md:w-full w-80">
    <div className="absolute -top-3 left-4 w-24 h-6 bg-zinc-700 z-0"
         style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)' }}
          
    ></div>
  <CardBody className="bg-zinc-900 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] rounded-xl p-6 border z-10 lg:h-88 md:h-100 h-112 flex flex-col gap-2">
    <CardItem
    as="h3"
      translateZ="50"
      className="text-sm text-gray-400 dark:text-white"
    >
      Ongoing project
    </CardItem>
    <CardItem
      as="h1"
      translateZ="60"
      className="text-white mt-2 text-2xl font-semibold flex gap-2 items-center"
    >
      {project.name}
      <Link href={project.link}><Link1 className="w-5 h-5 text-gray-500 hover:text-gray-300"/></Link>
<Link href={project.github}><Github  className="w-5 h-5 text-gray-500 hover:text-gray-300"/></Link>

    </CardItem>
    {/* <CardItem translateZ="100" className="w-full mt-4">
      <img
        src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        height="1000"
        width="1000"
        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
        alt="thumbnail"
      />
    </CardItem> */}

    <CardItem translateZ="50" as="p" className="text-gray-300 mt-4">
      {project.description}
    </CardItem>
    <div className="flex flex-wrap text-gray-500 gap-2 my-4">
      {project.techStack.map((tech, index) => (
        <CardItem
          key={index}
          as="span"
          translateZ="50"
          className=""
        >
          #{tech}
        </CardItem>
      ))}
      
     
    </div>
  </CardBody>
</CardContainer>
))}
</div>


    </div>
    )
}