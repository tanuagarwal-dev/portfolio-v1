"use client"
import Card from "../uiverse/CardV2";

const card = [
    {
        title: "frontend",
        description: "I am a frontend developer with experience in React, Next.js, and Tailwind CSS. I have a passion for creating beautiful and functional user interfaces.",
        techStack: [
            "React",
            "Next.js",
            "Tailwind CSS",
            "TypeScript",
            "JavaScript",
        ]
    },
    {
        title: "backend",
        description: "I am a backend developer with experience in Node.js, Express, and MongoDB. I have a passion for creating scalable and efficient APIs.",
        techStack: [
            "Node.js",
            "Express",
            "MongoDB",
            "PostgreSQL",
            "Prisma",
        ]
    },{
        title: "frontend",
        description: "I am a frontend developer with experience in React, Next.js, and Tailwind CSS. I have a passion for creating beautiful and functional user interfaces.",
        techStack: [
            "React",
            "Next.js",
            "Tailwind CSS",
            "TypeScript",
            "JavaScript",
        ]
    },
    {
        title: "backend",
        description: "I am a backend developer with experience in Node.js, Express, and MongoDB. I have a passion for creating scalable and efficient APIs.",
        techStack: [
            "Node.js",
            "Express",
            "MongoDB",
            "PostgreSQL",
            "Prisma",
        ]
    }
]
export default function Skills(){
    return(
        <div className="w-full p-4 my-10 py-10 ">
            <h1 className="lg:text-6xl md:text-5xl text:4xl text-gray-800 ml-4 font-semibold">Skills.</h1>
            <h3 className="text-lg mb-8 mt-4 ml-4">
                Skills I have acquired over the years.
            </h3>
            <div className="lg:grid lg:grid  flex flex-wrap w-full h-full">
            {card.map((item, index) => (
                <div key={index} className="flex justify-center items-center w-full h-full p-4">
                    <Card data={item} />
                </div>
            ))}
            </div>
        </div>
    )
}