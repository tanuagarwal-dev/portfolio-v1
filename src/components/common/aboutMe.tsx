import { Card } from '../ui/card.jsx';

export default function AboutMe() {
  return (
    <Card
      className="relative w-full lg:w-1/2 bg-white/70 dark:bg-gray-900/70 
                       backdrop-blur-xl border border-white/10 
                       shadow-xl rounded-2xl p-8 text-gray-700 dark:text-gray-200 
                       leading-relaxed tracking-tight space-y-4"
    >
      <div
        className="absolute inset-0 -z-10 rounded-2xl 
                        bg-gradient-to-r from-emerald-400/20 to-teal-500/20 
                        blur-3xl"
      />
      <p>
        Born in Lucknow, I&apos;m a third-year Computer Science undergraduate at
        JSS Academy of Technical Education, Noida, deeply passionate about
        building meaningful web experiences — from sleek, responsive interfaces
        to scalable backend systems.
      </p>

      {/* <p>
I enjoy solving problems end-to-end, which naturally led me to full-stack development. Whether it&apos;s designing APIs or styling components, I love the challenge of making everything work seamlessly together while keeping the user experience at the center.
</p> */}

      <p>
        As a full-stack developer, I enjoy solving problems end-to-end:
        designing APIs, styling components, and making everything work
        seamlessly together. I also collaborate with GDG onCampus JSS on
        community-driven tech initiatives and hackathons.
      </p>

      {/* <p>
As a Web Developer at Google Developer Group (GDG) onCampus JSS, I regularly collaborate with a team of passionate developers and contribute to community-driven tech initiatives. I get to collaborate with like-minded peers and contribute to impactful community projects. Hackathons and team projects have helped me sharpen not just my technical skills, but also how I communicate and work under tight deadlines.
</p> */}

      {/* <p>
Currently, I&apos;m focused on learning more about authentication patterns (OAuth, JWT), automated testing with tools like Playwright, and performance optimization techniques. Outside of tech, I enjoy discovering new music, exploring creative ideas, and finding inspiration in the little things.
</p> */}

      <p>
        Currently, I&apos;m exploring authentication patterns (OAuth, JWT),
        automated testing with Playwright, and performance optimization. Outside
        of tech, I love discovering new music, exploring creative ideas, and
        finding inspiration in the little things.
      </p>
      {/* <p>
My journey into development began with frontend experiments, but I quickly found myself enjoying backend logic just as much. Over time, this evolved into full-stack development — working on real-world tools like ResumAI, an AI-powered resume and interview prep platform, and HerGuardian, a safety app that uses real-time location tracking.
</p> */}
      <div className="grid gap-2 tracking-wide">
        <p className="text-md text-emerald-400 ">
          TLDR: Frontend finesse. Backend power. End-end-end solutions. I make
          it work.
        </p>
        <p className="text-md  text-emerald-600 font-bold underline">Open To work</p>
      </div>
    </Card>
  );
}
