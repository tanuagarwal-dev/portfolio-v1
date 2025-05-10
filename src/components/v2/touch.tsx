import { Github, Instagram, Linkedin } from "lucide-react";


export default function Touch(){
    return(
        <div className="relative  bg-black overflow-hidden w-full px-2 min-h-screen flex ">
  {/* Grid Overlay */}
  <div className="absolute top-0 right-0 w-1/3 h-1/2  opacity-10 z-0" style={{backgroundColor: '#000000',
backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.6'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,  
WebkitMaskImage: "linear-gradient(to bottom left, black 50%, transparent 100%)",
maskImage: "linear-gradient(to bottom left, black 50%, transparent 100%)",
WebkitMaskRepeat: "no-repeat",
maskRepeat: "no-repeat",
WebkitMaskSize: "100% 100%",
maskSize: "100% 100%",}}/>

  {/* Green Gradient Blur */}
  <div className="absolute bottom-[-60px] left-[-80px] w-1/2 h-2/3 bg-radial from-green-600 via-green-700 to-green-900 rounded-full blur-3xl opacity-20 z-0" />

  {/* Main Content */}
  <div className="relative z-10 flex flex-col items-center justify-around my-4 text-white text-center px-6">
    <h1 className="text-7xl font-bold text-left w-full text-gray-800">Get in touch.</h1>
    <div className="flex flex-wrap gap-4 w-full justify-around">
    <div className=" text-gray-400 mt-8">
      <form className="w-full max-w-xl space-y-6">
        <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Your Name</label>
          <input
            type="text"
            placeholder="E.g. John Doe"
            className="p-3 rounded-none border-b  focus:outline-none focus:ring-2 focus:rounded-md focus:ring-green-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Email Address</label>
          <input
            type="email"
            placeholder="E.g. you@example.com"
            className="p-3 rounded-none border-b focus:outline-none focus:ring-2 focus:rounded-md focus:ring-green-500"
          />
        </div>
        </div>

        <div className="flex flex-col mt-8">
          <label className="text-sm font-medium mb-1">Message / Enquiry</label>
          <textarea            
            placeholder="Enter your message here"            className="p-3 rounded-none border-b focus:outline-none focus:ring-2 focus:ring-green-500 focus:rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
    
    <div className="mt-8 space-y-4 text-xl font-medium lg:w-1/3 mb-8 text-justify">
    <p>I am always on the look out for opportunities that enable me to grow personally and professionally, as well as to connect with like-minded, or different-minded, individuals.
    </p>
<p>
Whether you have an opportunity, piece of advice, question, or simply want to say hi, my inbox is always open!
</p>
<p className="flex gap-4"><Instagram/><Linkedin/><Github/></p>
    </div>
    </div>
  </div>
</div>

    )
}