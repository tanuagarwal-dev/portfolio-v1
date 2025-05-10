import { GraduationCap, School } from "lucide-react";
import { Timeline } from "../ui/timeline";

export default function Education() {  
    const data = [
        {
          title: "Graduation",
          logo: <GraduationCap className="size-6 text-gray-300" />,
          location: "Noida",
          time: "2023-2027 (present)",
          content: (
            <div className="mb-8 flex flex-col gap-2">
              <h1 className="text-2xl text-gray-300">B-Tech in Computer Science Engineering</h1>
              <h2 className="text-lg text-gray-400">
                JSS ACADEMY OF TECHNICAL EDUCATION
              </h2>
              <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fugit adipisci minus. Corporis minima eveniet blanditiis natus distinctio explicabo unde.</p>
            </div>
          ),
        },
        {
          title: "School",
          location: "Lucknow",
          logo: <School className="size-6 text-gray-300" />,
          time: "2022",
          content: (
            <div className="mb-8 flex flex-col gap-2">
              <h1 className="text-2xl text-gray-300">12th Standard (CBSE)</h1>
              <h2 className="text-lg text-gray-400">
                CATHEDRAL SENIOR SECONDARY SCHOOL
              </h2>
              <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fugit adipisci minus. Corporis minima eveniet blanditiis natus distinctio explicabo unde.</p>
            </div>
          ),
        },
        
      ];
      
      return (
        <div className="relative w-full overflow-clip p-4"
        style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='white' fill-opacity='0.08' /%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
          }}>
          <Timeline data={data} />
        </div>
      );
} 

// bg-[url('/blurry-gradient-haikei.svg')] bg-no-repeat bg-cover bg-center



// style={{
//     backgroundImage: `
//       radial-gradient(circle at center, #37003c 0%, #1b001f 60%, #0a0010 100%),
//       repeating-radial-gradient(circle at center, rgba(255,255,255,0.04) 0px, transparent 5px, transparent 20px)
//     `,
    
//     opacity: 0.6
//   }}r