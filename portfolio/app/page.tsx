import { useState } from 'react';
import { Mail, MessageCircle, ExternalLink} from 'lucide-react';

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState('home');

  const projects = [
    {
      id: 'attendance',
      name: "Staff Attendance System",
      description: "An application for tracking employee attendance, generating reports, and managing staff availabilty.",
      image: "/attendance.png",
      tech: ["Java", "Java Swing", "Apache NetBeans"],
      github: "https://github.com/paulaira",
      featured: true
    },
    {
      id: 'cafeteria',
      name: "Cafeteria Food Ordering System",
      description: "A web application that streamlines the cafeteria ordering process, allowing students and staff to browse menus, place orders, and pay online.",
      image: "/caf.png",
      tech: ["Apache NetBeans", "Java"],
      github: "https://github.com/paulaira/cafeteria-system.git",
      featured: false
    },
    {
      id: 'hospital',
      name: "Hospital Web Application",
      description: "A healthcare management system for scheduling appointments, managing patient records, and facilitating doctor-patient communication.",
      image: "/hospital.png",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/paulaira/hospital-web-app.git",
      featured: false
    }
  ];

  if (currentPage === 'attendance') {
    return <ProjectDetailPage project={projects[0]} onBack={() => setCurrentPage('home')} />;
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-50 via-white to-amber-50">
      
      <header className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-pink-200 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-20 right-0 w-40 h-40 bg-amber-200 rounded-full blur-3xl opacity-50"></div>
      </header>

      <main className="relative px-6 md:px-12 lg:px-24 py-12 max-w-7xl mx-auto">
        
        <section className="mb-20">
          <div className="text-center mb-8">
            <div className="inline-block mb-6">
            <div className="w-44 h-44 md:w-52 md:h-52 mx-auto bg-linear-to-br from-pink-300 to-amber-200 rounded-full flex items-center justify-center shadow-xl p-2">
              <img src="/face.jpg" alt="Paula Irabor" className="w-full h-full rounded-full object-cover" />
            </div>
          </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-linear-to-r from-pink-500 via-rose-400 to-amber-500 bg-clip-text text-transparent">
              Hello World!, I'm Paula!
            </h1>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-pink-500 to-amber-500 bg-clip-text text-transparent">
                About Me
              </h2>
            </div>
          </div>

          <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border-2 border-pink-100">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              I'm a Computer Science undergraduate student and I enjoy hypothesizing potential solutions to problems and coding them.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              I'm also an aspiring engineering consultant, passionate about leveraging technology to solve real-world challenges, and experimental or unexplored technology. Welcome to my portfolio!
            </p>
          </div>
        </section>

        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-pink-500 to-amber-500 bg-clip-text text-transparent">
              My Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-pink-100 hover:border-pink-300"
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-pink-500/20 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-pink-600 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-linear-to-r from-pink-100 to-amber-100 text-pink-700 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.featured && (
                      <button
                        onClick={() => setCurrentPage(project.id)}
                        className="flex-1 px-4 py-2 bg-linear-to-r from-pink-400 to-rose-400 text-white rounded-full hover:from-pink-500 hover:to-rose-500 transition-all flex items-center justify-center gap-2 text-sm font-medium shadow-md"
                      >
                        View Details <ExternalLink size={16} />
                      </button>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${project.featured ? 'px-4' : 'flex-1 px-4'} py-2 bg-linear-to-r from-amber-400 to-yellow-400 text-white rounded-full hover:from-amber-500 hover:to-yellow-500 transition-all flex items-center justify-center gap-2 text-sm font-medium shadow-md`}
                    >
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <div className="max-w-4xl mx-auto bg-linear-to-br from-pink-100 via-white to-amber-100 rounded-3xl p-8 md:p-12 shadow-xl border-2 border-pink-200">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-pink-600 to-amber-600 bg-clip-text text-transparent">
                Talk To Me!
              </h2>
              <p className="text-gray-700 text-lg">
                I'm always reachable through the following platforms
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:paulairabor@gmail.com"
                className="w-full sm:w-auto px-8 py-4 bg-linear-to-r from-pink-500 to-rose-500 text-white rounded-full hover:from-pink-600 hover:to-rose-600 transition-all flex items-center justify-center gap-3 text-lg font-medium shadow-lg hover:shadow-xl"
              >
                <Mail size={24} />
                Email
              </a>
              
              <a
                href="https://wa.me/07012470702"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-linear-to-r from-green-400 to-emerald-500 text-white rounded-full hover:from-green-500 hover:to-emerald-600 transition-all flex items-center justify-center gap-3 text-lg font-medium shadow-lg hover:shadow-xl"
              >
                <MessageCircle size={24} />
                WhatsApp
              </a>

              <a
                href="https://github.com/paulaira"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-linear-to-r from-amber-400 to-yellow-500 text-white rounded-full hover:from-amber-500 hover:to-yellow-600 transition-all flex items-center justify-center gap-3 text-lg font-medium shadow-lg hover:shadow-xl"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>

      </main>

      <footer className="text-center py-8 text-gray-600">
        <p className="flex items-center justify-center gap-2">
          <span className="text-pink-500">Paula Irabor @ 2025</span>
        </p>
      </footer>
    </div>
  );
}

function ProjectDetailPage({ project, onBack }: { project: any; onBack: () => void }) {
  return (
    <div className="min-h-screen bg-linear-to-br from-pink-50 via-white to-amber-50">
      <div className="px-6 md:px-12 lg:px-24 py-12 max-w-5xl mx-auto">
        
        <button
          onClick={onBack}
          className="mb-8 px-6 py-3 bg-white text-pink-600 rounded-full hover:bg-pink-50 transition-all flex items-center gap-2 font-medium shadow-md border-2 border-pink-200"
        >
          ← Back to Portfolio
        </button>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border-2 border-pink-100 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-pink-500 to-amber-500 bg-clip-text text-transparent">
            {project.name}
          </h1>
          
          <div className="flex flex-wrap gap-3 mb-6">
            {project.tech.map((tech: string, i: number) => (
              <span 
                key={i}
                className="px-4 py-2 bg-linear-to-r from-pink-100 to-amber-100 text-pink-700 text-sm font-medium rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-pink-500 to-rose-500 text-white rounded-full hover:from-pink-600 hover:to-rose-600 transition-all font-medium shadow-lg"
          >
            View on GitHub
          </a>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-2xl mb-8 border-2 border-pink-100">
          <img 
            src={project.image} 
            alt={project.name}
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border-2 border-pink-100 mb-8">
          <h2 className="text-3xl font-bold text-pink-600 mb-4">About This Project</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            The Staff Attendance System was developed to address the inefficiencies in manual attendance tracking that many organizations face. Traditional paper-based systems are time-consuming, inefficient to manage and difficult to analyse.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            This application provides a solution for managing employee attendance records and shifts. It is built with Java and Java Swing GUI, which offers a graphical interface that makes it easy for managers to track attendance, mark absences, generate reports, manage any changes to the shift scheduleand maintain accurate employee records.
          </p>
        </div>

        <div className="bg-linear-to-br from-pink-100 to-amber-50 rounded-3xl p-8 md:p-12 shadow-xl border-2 border-pink-200 mb-8">
          <h2 className="text-3xl font-bold text-amber-600 mb-4">Problems Solved</h2>
          <ul className="space-y-4 text-gray-700 text-lg">
            <li className="flex items-start gap-3">
              <span><strong>Manual Data Entry:</strong> Eliminated the need for paper-based attendance registers and manual record-keeping of shift schedules</span>
            </li>
            <li className="flex items-start gap-3">
              <span><strong>Report Generation:</strong> Automated the creation of monthly and yearly attendance reports for management review</span>
            </li>
            <li className="flex items-start gap-3">
              <span><strong>Shift Schedule Management:</strong> Made it easy to view shift schedules and swap shifts if need arise</span>
            </li>
          </ul>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border-2 border-pink-100 mb-8">
          <h2 className="text-3xl font-bold text-pink-600 mb-6">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-linear-to-br from-amber-50 to-white p-6 rounded-2xl border border-amber-100">
              <h3 className="font-bold text-xl text-amber-700 mb-2">✓ Attendance Tracking</h3>
              <p className="text-gray-600">Mark daily attendance with options for present, absent and late</p>
            </div>
            <div className="bg-linear-to-br from-pink-50 to-white p-6 rounded-2xl border border-pink-100">
              <h3 className="font-bold text-xl text-pink-700 mb-2">📊 Report Generation</h3>
              <p className="text-gray-600">Generate detailed attendance reports with filters by date range, department, or individual staff</p>
            </div>
            <div className="bg-linear-to-br from-amber-50 to-white p-6 rounded-2xl border border-amber-100">
              <h3 className="font-bold text-xl text-amber-700 mb-2">🔍 Search & Filter</h3>
              <p className="text-gray-600">Quick search functionality to find employee records and attendance history</p>
            </div>
          </div>
        </div>

        <div className="bg-linear-to-br from-amber-100 to-pink-50 rounded-3xl p-8 md:p-12 shadow-xl border-2 border-amber-200 mb-8">
          <h2 className="text-3xl font-bold text-pink-600 mb-4">Technology Stack</h2>
          <div className="space-y-4 text-gray-700 text-lg">
            <div className="bg-white/50 p-4 rounded-xl">
              <strong className="text-pink-600">Java:</strong> Core programming language providing robust object-oriented structure and cross-platform compatibility
            </div>
            <div className="bg-white/50 p-4 rounded-xl">
              <strong className="text-amber-600">Java Swing:</strong> GUI toolkit for creating the desktop interface with forms, tables, buttons, and other swing components
            </div>
            <div className="bg-white/50 p-4 rounded-xl">
              <strong className="text-pink-600">Apache NetBeans:</strong> Integrated Development Environment (IDE) used for designing the interface and managing the project
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border-2 border-pink-100">
          <h2 className="text-3xl font-bold text-amber-600 mb-4">What I Learned</h2>
          <ul className="space-y-3 text-gray-700 text-lg">
            <li className="flex items-start gap-3">
              <span className="text-amber-500 font-bold">→</span>
              <span><strong>Proper GUI Development:</strong> Mastered Java Swing components and learned to create user-friendly interfaces</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-500 font-bold">→</span>
              <span><strong>Appropriate Data Management:</strong> Learned efficient data structures for storing and retrieving employee and attendance information</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-500 font-bold">→</span>
              <span><strong>File Handling:</strong> Gained experience with Java I/O operations for persistent data storage</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-500 font-bold">→</span>
              <span><strong>User Experience:</strong> Understood the importance of clear navigation and feedback in desktop applications</span>
            </li>
          </ul>
        </div>

      </div>
      <footer className="text-center py-8 text-gray-600">
        <p className="flex items-center justify-center gap-2">
          <span className="text-pink-500">Paula Irabor @ 2025</span>
        </p>
      </footer>
    </div>
  );
}