"use client"
import Typewriter from "typewriter-effect";
import { Card } from "../ui/card";
import { CardSpotlight } from "../ui/card-spotlight";
export default function Intro(){
    return(
        <div className="min-h-screen px-8 border w-full text-justify py-12 flex flex-col lg:flex-row items-center justify-center gap-4">
           <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-center">
           <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                My name is Tanu.
            </h1>
            <div className="flex font-bold text-gray-800 mb-4 text-3xl lg:text-4xl flex-wrap">
            I am a&nbsp;<Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Full Stack Developer.")
              .pauseFor(150)
              .deleteAll()
              .typeString("Software Engineer.")
              .pauseFor(150)
              .deleteAll()
              .typeString("Computer Science Student.")
              .pauseFor(150)
              .deleteAll()
              .start();
          }}
          options={{
            loop: true,
            delay: 40,
            deleteSpeed: 30,
          }}
        />
            </div>
          
           </div>
           <Card className="w-full lg:w-1/2 border-0 text-gray-600 text-[16px] tracking-[2px] shadow-lg mb-4 px-4">
           <p>
Born in Lucknow, I'm a second-year Computer Science undergraduate at JSS Academy of Technical Education, Noida. I’m deeply passionate about creating meaningful web experiences — from building sleek, responsive interfaces to designing scalable backend systems.
</p>

<p>
I enjoy solving problems end-to-end, which naturally led me to full-stack development. Whether it’s designing APIs or styling components, I love the challenge of making everything work seamlessly together while keeping the user experience at the center.
</p>

<p>
As a Web Developer at Google Developer Group (GDG) onCampus JSS, I regularly collaborate with a team of passionate developers and contribute to community-driven tech initiatives. I get to collaborate with like-minded peers and contribute to impactful community projects. Hackathons and team projects have helped me sharpen not just my technical skills, but also how I communicate and work under tight deadlines.
</p>

<p>
Currently, I’m focused on learning more about authentication patterns (OAuth, JWT), automated testing with tools like Playwright, and performance optimization techniques. Outside of tech, I enjoy discovering new music, exploring creative ideas, and finding inspiration in the little things.
</p>
            </Card>
        </div>
    )
}