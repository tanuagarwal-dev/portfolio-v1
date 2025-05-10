import { Github, Instagram, Linkedin } from "lucide-react";


export default function Contact(){
    return(
        <div className="relative min-h-screen lg:w-full lg:px-8 px-2 md:px-4 mb-8">
  <div className="z-10 flex flex-col items-center justify-around min-h-screen text-white text-center px-6">
    <h1 className="text-7xl font-bold text-left w-full text-gray-800 mb-8">Get in touch.</h1>
    <div className="flex flex-wrap gap-4 w-full justify-around">
    <div className="text-gray-700 mt-2">
      <form className="w-full max-w-xl space-y-6">
        <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Your Name</label>
          <input
            type="text"
            placeholder="E.g. John Doe"
            className="p-3 rounded-none border-b  focus:outline-none focus:ring-2 focus:rounded-md focus:ring-gray-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Email Address</label>
          <input
            type="email"
            placeholder="E.g. you@example.com"
            className="p-3 rounded-none border-b focus:outline-none focus:ring-2 focus:rounded-md focus:ring-gray-500"
          />
        </div>
        </div>

        <div className="flex flex-col mt-8">
          <label className="text-sm font-medium mb-1">Message / Enquiry</label>
          <textarea            
            placeholder="Enter your message here"            className="p-3 rounded-none border-b focus:outline-none focus:ring-2 focus:ring-gray-500 focus:rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
    
    <div className="mt-2 space-y-4 text-xl font-medium lg:w-1/3 p-2 text-justify text-gray-700">
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