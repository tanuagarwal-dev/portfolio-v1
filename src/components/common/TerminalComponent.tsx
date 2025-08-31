'use client';
import { TerminalContextProvider } from 'react-terminal';
import { ReactTerminal } from 'react-terminal';
import Header from './header';
const TerminalComponent = () => {
  const commands = {
    help: (
      <div>
        <p>Available commands:</p>
        <ul>
          <li>
            <b>about</b> – about the project
          </li>
          <li>
            <b>whoami</b> – Who I am
          </li>
          <li>
            <b>projects</b> – My work
          </li>
          <li>
            <b>contact</b> – How to reach me
          </li>
          <li>
            <b>clear</b> – Clear the terminal
          </li>
          <li>
            <b>ls</b> – Who I am
          </li>
        </ul>
      </div>
    ),
    ls: 'about.txt  experience/  projects/  skills.json  education.md  contact.info',
    pwd: '/home/portfolio',
    'cat resume.txt': `
Name: John Doe
Title: Full-Stack Software Engineer
Location: San Francisco, CA
Email: john.doe@email.com
Phone: (555) 123-4567

Summary:
Experienced software engineer with expertise in modern web technologies.
Passionate about creating scalable applications and mentoring junior developers.
    `,
    whoami:
      'I’m Tanu Agarwal – a developer passionate about AI, safety tech, and creative UX.',
    about: (
      <br />
      //  <TerminalProjects/>
    ),
    experience: (
      <div className="space-y-6">
        <div className="border-l-2 border-green-500 pl-4">
          <h3 className="text-green-400 font-bold">
            Senior Full-Stack Developer
          </h3>
          <p className="text-gray-400">TechCorp Inc. | 2022 - Present</p>
          <ul className="text-gray-300 mt-2 space-y-1">
            <li>
              • Led development of microservices architecture serving 1M+ users
            </li>
            <li>
              • Implemented CI/CD pipelines reducing deployment time by 60%
            </li>
            <li>• Mentored 5 junior developers on best practices</li>
          </ul>
        </div>
        <div className="border-l-2 border-green-500 pl-4">
          <h3 className="text-green-400 font-bold">Software Engineer</h3>
          <p className="text-gray-400">StartupXYZ | 2020 - 2022</p>
          <ul className="text-gray-300 mt-2 space-y-1">
            <li>• Built responsive web applications using React and Node.js</li>
            <li>• Optimized database queries improving performance by 40%</li>
            <li>
              • Collaborated with cross-functional teams in agile environment
            </li>
          </ul>
        </div>
        <div className="border-l-2 border-green-500 pl-4">
          <h3 className="text-green-400 font-bold">Junior Developer</h3>
          <p className="text-gray-400">WebSolutions | 2019 - 2020</p>
          <ul className="text-gray-300 mt-2 space-y-1">
            <li>
              • Developed frontend components using HTML, CSS, and JavaScript
            </li>
            <li>• Participated in code reviews and testing processes</li>
            <li>• Maintained legacy systems and fixed critical bugs</li>
          </ul>
        </div>
      </div>
    ),
    projects: (
      <div className="space-y-6">
        <div className="border border-green-500/30 rounded p-4">
          <h3 className="text-green-400 font-bold mb-2">E-Commerce Platform</h3>
          <p className="text-gray-300 mb-2">
            Full-stack e-commerce solution with React, Node.js, and PostgreSQL
          </p>
          <div className="flex flex-wrap gap-2 mb-2">
            <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs">
              React
            </span>
            <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs">
              Node.js
            </span>
            <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs">
              PostgreSQL
            </span>
          </div>
          <div className="flex space-x-4 text-sm">
            <a href="#" className="text-blue-400 hover:underline">
              Live Demo
            </a>
            <a href="#" className="text-blue-400 hover:underline">
              GitHub
            </a>
          </div>
        </div>
        <div className="border border-green-500/30 rounded p-4">
          <h3 className="text-green-400 font-bold mb-2">Task Management App</h3>
          <p className="text-gray-300 mb-2">
            Real-time collaboration tool with drag-and-drop interface
          </p>
          <div className="flex flex-wrap gap-2 mb-2">
            <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs">
              Vue.js
            </span>
            <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs">
              Socket.io
            </span>
            <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs">
              MongoDB
            </span>
          </div>
          <div className="flex space-x-4 text-sm">
            <a href="#" className="text-blue-400 hover:underline">
              Live Demo
            </a>
            <a href="#" className="text-blue-400 hover:underline">
              GitHub
            </a>
          </div>
        </div>
        <div className="border border-green-500/30 rounded p-4">
          <h3 className="text-green-400 font-bold mb-2">Weather Dashboard</h3>
          <p className="text-gray-300 mb-2">
            Interactive weather visualization with charts and maps
          </p>
          <div className="flex flex-wrap gap-2 mb-2">
            <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs">
              React
            </span>
            <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs">
              D3.js
            </span>
            <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs">
              API
            </span>
          </div>
          <div className="flex space-x-4 text-sm">
            <a href="#" className="text-blue-400 hover:underline">
              Live Demo
            </a>
            <a href="#" className="text-blue-400 hover:underline">
              GitHub
            </a>
          </div>
        </div>
      </div>
    ),
    skills: (
      <div className="space-y-4">
        <div>
          <h3 className="text-green-400 font-bold mb-3">
            Frontend Technologies
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">React/Next.js</span>
              <div className="w-32 bg-gray-700 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: '90%' }}
                ></div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">TypeScript</span>
              <div className="w-32 bg-gray-700 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: '85%' }}
                ></div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Vue.js</span>
              <div className="w-32 bg-gray-700 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: '75%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-green-400 font-bold mb-3">
            Backend Technologies
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Node.js</span>
              <div className="w-32 bg-gray-700 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: '88%' }}
                ></div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Python</span>
              <div className="w-32 bg-gray-700 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: '80%' }}
                ></div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">PostgreSQL</span>
              <div className="w-32 bg-gray-700 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: '82%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-green-400 font-bold mb-3">Tools & DevOps</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Docker</span>
              <div className="w-32 bg-gray-700 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: '78%' }}
                ></div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">AWS</span>
              <div className="w-32 bg-gray-700 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: '70%' }}
                ></div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Git</span>
              <div className="w-32 bg-gray-700 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: '92%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    education: (
      <div className="space-y-6">
        <div className="border-l-2 border-green-500 pl-4">
          <h3 className="text-green-400 font-bold">
            Bachelor of Science in Computer Science
          </h3>
          <p className="text-gray-400">
            University of California, Berkeley | 2015 - 2019
          </p>
          <p className="text-gray-300 mt-2">GPA: 3.8/4.0</p>
          <p className="text-gray-300">
            Relevant Coursework: Data Structures, Algorithms, Software
            Engineering, Database Systems
          </p>
        </div>
        <div className="border-l-2 border-green-500 pl-4">
          <h3 className="text-green-400 font-bold">Certifications</h3>
          <ul className="text-gray-300 mt-2 space-y-1">
            <li>• AWS Certified Solutions Architect (2023)</li>
            <li>• Google Cloud Professional Developer (2022)</li>
            <li>• MongoDB Certified Developer (2021)</li>
            <li>• React Developer Certification (2020)</li>
          </ul>
        </div>
        <div className="border-l-2 border-green-500 pl-4">
          <h3 className="text-green-400 font-bold">Continuous Learning</h3>
          <ul className="text-gray-300 mt-2 space-y-1">
            <li>• Advanced React Patterns Workshop</li>
            <li>• Machine Learning Fundamentals</li>
            <li>• System Design Interview Course</li>
            <li>• Kubernetes Administrator Training</li>
          </ul>
        </div>
      </div>
    ),
    contact: (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-green-500/30 rounded p-4">
            <h3 className="text-green-400 font-bold mb-3">Get In Touch</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <i className="ri-mail-line w-4 h-4 flex items-center justify-center text-green-400"></i>
                <span>john.doe@email.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ri-phone-line w-4 h-4 flex items-center justify-center text-green-400"></i>
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ri-map-pin-line w-4 h-4 flex items-center justify-center text-green-400"></i>
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ri-linkedin-line w-4 h-4 flex items-center justify-center text-green-400"></i>
                <a href="#" className="text-blue-400 hover:underline">
                  linkedin.com/in/johndoe
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ri-github-line w-4 h-4 flex items-center justify-center text-green-400"></i>
                <a href="#" className="text-blue-400 hover:underline">
                  github.com/johndoe
                </a>
              </div>
            </div>
          </div>
          <div className="border border-green-500/30 rounded p-4">
            <h3 className="text-green-400 font-bold mb-3">Send Message</h3>
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-gray-800 border border-green-500/30 rounded px-3 py-2 text-gray-300 focus:outline-none focus:border-green-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-gray-800 border border-green-500/30 rounded px-3 py-2 text-gray-300 focus:outline-none focus:border-green-500"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full bg-gray-800 border border-green-500/30 rounded px-3 py-2 text-gray-300 focus:outline-none focus:border-green-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    ),
  };

  return (
    <TerminalContextProvider>
      <Header />
      <div className="bg-black text-green-400 p-4 rounded-lg shadow-lg w-full mx-auto mt-10 font-mono h-screen">
        <ReactTerminal
          name="tanu@portfolio"
          prompt="> "
          commands={commands}
          welcomeMessage={`Welcome to Tanu's Terminal Portfolio 👩‍💻\nType 'help' to get started.`}
          theme={{
            background: '#0E0E0F',
            promptSymbolColor: '#34D399',
            commandColor: '#D1FAE5',
            outputColor: '#A7F3D0',
            errorColor: '#F87171',
          }}
        />
      </div>
    </TerminalContextProvider>
  );
};

export default TerminalComponent;
