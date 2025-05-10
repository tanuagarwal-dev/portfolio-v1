"use client"
import Typewriter from "typewriter-effect";
import { Card } from "../ui/card";
export default function Details(){
    return(
        <div className="relative min-h-screen px-8 w-full text-justify py-12 flex flex-col lg:flex-row items-center justify-center gap-4 my-10 overflow-hidden">

            <div className=" absolute top-1/2 my-4 left-0 h-100 w-40 -translate-y-1/2 opacity-10 z-0 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            style={{
                backgroundColor: '#000000',
backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.6'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
clipPath: 'ellipse(100% 50% at 0% 50%)'
            }}/>
             <div
    className="absolute inset-0 w-[120%] h-[66%] rounded-full bg-teal-500 blur-3xl opacity-20 -rotate-30 z-0"
    style={{
      top: '10%',
      left: '-10%',
    }}
  />
           <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-center">
           <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                My name is Tanu.
            </h1>
            <div className="flex flex-wrap font-bold text-gray-800 mb-4 text-3xl lg:text-4xl">
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
           <Card className="relative w-full lg:w-1/2 bg-[#07272a] border-0 text-gray-200 text-[16px] mb-4 px-4 tracking-[2px] overflow-hidden shadow-lg">
           <div
    className="absolute inset-0 w-[60%] h-[80%] rounded-full bg-green-400 blur-3xl opacity-20 -rotate-25 z-0"
    style={{
      top: '-10%',
      left: '4%',
    }}
  />
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
{/* <p>
My journey into development began with frontend experiments, but I quickly found myself enjoying backend logic just as much. Over time, this evolved into full-stack development — working on real-world tools like ResumAI, an AI-powered resume and interview prep platform, and HerGuardian, a safety app that uses real-time location tracking.
</p> */}

            </Card>
        </div>
    )
}