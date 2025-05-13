"use client"
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

export default function Details() {
    return (
        <div className="relative min-h-screen px-8 w-full text-justify py-12 flex flex-col lg:flex-row items-center justify-center gap-8 my-10 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-1/2 right-0 h-3/4 w-1/3 -translate-y-1/2 opacity-5 z-0"
                style={{
                    backgroundColor: '#f8fafc',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23475569' fill-opacity='0.4'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    clipPath: 'ellipse(100% 50% at 100% 50%)'
                }}
            />

            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-1/2 flex flex-col justify-center items-center text-center">
                <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-950 via-slate-800 to-slate-700 bg-clip-text text-transparent mb-4">
                    My name is Tanu.
                </h1>
                <div className="flex flex-wrap font-bold text-slate-800 mb-4 text-3xl lg:text-4xl">
                    I am a&nbsp;
                    <Typewriter
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
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative w-full lg:w-1/2 bg-gradient-to-br from-white to-slate-50/50 rounded-2xl p-6 text-slate-700 text-[16px] mb-4 tracking-wide shadow-sm border border-slate-100">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50/10 via-slate-50/10 to-transparent rounded-2xl" />
                <div className="space-y-4 relative z-10">
                    <p>
                        Born in Lucknow, I&apos;m a second-year Computer Science undergraduate at JSS Academy of Technical Education, Noida. I&apos;m deeply passionate about creating meaningful web experiences — from building sleek, responsive interfaces to designing scalable backend systems.
                    </p>

                    <p>
                        I enjoy solving problems end-to-end, which naturally led me to full-stack development. Whether it&apos;s designing APIs or styling components, I love the challenge of making everything work seamlessly together while keeping the user experience at the center.
                    </p>

                    <p>
                        As a Web Developer at Google Developer Group (GDG) onCampus JSS, I regularly collaborate with a team of passionate developers and contribute to community-driven tech initiatives. I get to collaborate with like-minded peers and contribute to impactful community projects. Hackathons and team projects have helped me sharpen not just my technical skills, but also how I communicate and work under tight deadlines.
                    </p>

                    <p>
                        Currently, I&apos;m focused on learning more about authentication patterns (OAuth, JWT), automated testing with tools like Playwright, and performance optimization techniques. Outside of tech, I enjoy discovering new music, exploring creative ideas, and finding inspiration in the little things.
                    </p>
                </div>
            </motion.div>

            {/* Subtle gradient background */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-50/30 to-transparent -z-10" />
        </div>
    )
} 