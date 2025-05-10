import {ArrowDownRight} from 'lucide-react'
export default function Hero(){
    return(
        <div className=" font-bold gap-12 text-center flex justify-center items-center w-full py-16 h-screen flex-col">
            <div className="flex justify-center items-center  flex-col">
            <h1 className="text-7xl text-gray-800">Tanu Agarwal,</h1>
            <h1 className="text-7xl text-gray-800">web developer</h1>
            </div>
            <div className="w-1/2 text-lg font-semibold">
                <p>Passionate about front-end development, I create modern web solutions that blend design and performances.
                Explore my world and discover my projects!</p>
            </div>
            <div className="flex gap-4 items-center">
                <button className="flex items-center">
                    <ArrowDownRight/>
                    See my projects
                </button>
                <button className="flex items-center">
                <ArrowDownRight/>
                    More about me
                </button>
            </div>
            
        </div>
    )
} 



// import {ArrowDownRight} from 'lucide-react'
// import React from 'react'
// import { Boxes } from '../ui/background-boxes'
// import { cn } from '@/lib/utils'

// export default function Hero(){
//     return(
//         <div className="relative font-bold gap-12 text-center flex justify-center items-center w-full py-16 h-screen flex-col overflow-hidden">  
    
//     <div className="absolute inset-0 z-10 pointer-events-none [mask-image:radial-gradient(circle_at_center, white, transparent)]" />

//             <Boxes/>
            
//             <div className={cn("flex justify-center items-center  flex-col relative z-20")}>
//             <h1 className="text-7xl text-gray-800">Tanu Agarwal,</h1>
//             <h1 className="text-7xl text-gray-800">web developer</h1>
//             </div>
//             <div className="w-1/2 text-lg font-semibold relative z-20">
//                 <p>Passionate about front-end development, I create modern web solutions that blend design and performances.
//                 Explore my world and discover my projects!</p>
//             </div>
//             <div className="flex gap-4 items-center">
//                 <button className="flex items-center">
//                     <ArrowDownRight/>
//                     See my projects
//                 </button>
//                 <button className="flex items-center">
//                 <ArrowDownRight/>
//                     More about me
//                 </button>
//             </div>
         
            
            
//         </div>
//     )
// } 