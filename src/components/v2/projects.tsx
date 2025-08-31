'use client';;
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.jsx';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx';
import Image from 'next/image';
import { Github, Link as Link1 } from 'lucide-react';
import Link from 'next/link';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card.jsx';
import { projects, noteworthyProjects } from '@/lib/data';

export default function Projects() {
  return (
    <div
      className="relative min-h-screen lg:px-8 px-4 w-full py-12 flex flex-col items-center justify-center gap-4 my-2"
      id="projects"
    >
      <div className="absolute top-2/3 left-0 my-4 h-80 w-30 -translate-y-1/2 opacity-10 z-0 shadow-[0_0_30px_rgba(255,255,255,0.2)] bg-projects-left" />

      <div className="absolute top-1/3 right-0 my-4 h-80 w-30 -translate-y-1/2 opacity-10 z-0 shadow-[0_0_30px_rgba(255,255,255,0.2)] bg-projects-right" />
      <h1 className="text-5xl lg:text-6xl md:text-6xl font-bold text-gray-700 dark:text-gray-500 mb-4 text-left py-12 w-full">
        Archive (Stuff I built).
      </h1>

      <Tabs
        defaultValue={projects[0].name}
        className="w-full lg:w-2/3 p-2 flex gap-0 border-l-2 border-b-2 rounded-2xl shadow-2xl border-emerald-600 dark:border-0"
      >
        <div>
          {projects.map((project) => (
            <TabsContent key={project.name} value={project.name} className="w-full">
              <Card className="w-full bg-white shadow-md rounded-none rounded-t-lg border p-6 min-h-100">
                <CardContent className="flex justify-center items-center">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={500}
                    height={300}
                    className="rounded-lg mb-4"
                  />
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </div>

        <TabsList className="flex justify-between w-full h-fit  rounded-none p-2 dark:bg-black border-r border-l border-gray-600 flex-wrap">
          {projects.map((project) => (
            <TabsTrigger
              key={project.name}
              value={project.name}
              className=" w-fit dark:text-gray-300 dark:hover:text-gray-600 hover:text-gray-400 rounded-none font-semibold text-[18px] h-fit p-2 shadow-md transition duration-200 ease-in-out dark:data-[state=active]:bg-green-700 data-[state=active]:bg-emerald-700/90 data-[state=active]:text-white "
            >
              {project.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {projects.map((project) => (
          <TabsContent
            key={project.name}
            value={project.name}
            className="transition ease-in-out duration-200 "
          >
            <Card
              className="rounded-none 
    bg-white dark:bg-zinc-900 
    border border-gray-300 dark:border-gray-700 
    rounded-b-lg"
            >
              <CardHeader className="">
                <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-gray-100">
                  {project.name}
                  <Link href={project.link}>
                    <Link1 className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </Link>
                  <Link href={project.link}>
                    <Github className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </Link>
                </CardTitle>
                <CardDescription className="capitalize text-gray-500 dark:text-gray-400">
                  {project.brief} | {project.workedOn}
                </CardDescription>
              </CardHeader>
              <CardContent className="lg:h-44 h-fit md:h-70">
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 text-sm">
                  {project.techStack.map((tech, index) => (
                    <TechChip key={index} tech={tech} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      {/* Main card */}
      <div className="flex flex-wrap gap-8 mt-18 w-full justify-center">
        {noteworthyProjects.map((project) => (
          <CardContainer
            containerClassName=""
            key={project.name}
            className="inter-var relative group max-w-md-mx-auto lg:w-full md:w-full w-70"
          >
            {/* trapezium */}
            <div className="absolute -top-3 left-4 projects-clip w-24 h-6 dark:bg-zinc-700 bg-emerald-500 z-0"></div>
            <CardBody className="dark:bg-zinc-900 bg-emerald-700 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] rounded-xl p-6 border z-10 lg:h-88 md:h-100 h-120 flex flex-col gap-2">
              <CardItem
                translateZ={50}
                className="text-sm text-gray-300 dark:text-gray-400"
              >
                Ongoing project
              </CardItem>
              <CardItem
                translateZ={60}
                className="text-white mt-2 text-2xl font-semibold flex gap-2 items-center"
              >
                {project.name}
                <Link href={project.link}>
                  <Link1 className="w-5 h-5 dark:text-green-700 text-gray-400 hover:text-gray-300 dark:hover:text-green-400" />
                </Link>
                <Link href={project.github}>
                  <Github className="w-5 h-5 text-gray-400 dark:text-green-700 hover:text-gray-300 dark:hover:text-green-400" />
                </Link>
              </CardItem>

              <CardItem
                translateZ={50}
                className="dark:text-gray-300 text-slate-300 mt-4"
              >
                {project.description}
              </CardItem>
              <div className="flex flex-wrap dark:text-gray-500 text-slate-200 gap-2 my-4 capitalize">
                {project.techStack.map((tech, index) => (
                  <CardItem
                    key={index}
                    translateZ={50}
                    className="dark:hover:text-green-900"
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
  );
}

function TechChip({ tech }: { tech: string }) {
  return (
    <span
      className="px-3 py-1 rounded-full 
             bg-gray-200 text-gray-700 
             dark:bg-gray-800 dark:text-gray-300 
             text-xs sm:text-sm font-medium tracking-wide
             transition-colors duration-200 hover:bg-gray-300 dark:hover:bg-gray-700"
    >
      {tech}
    </span>
  );
}
