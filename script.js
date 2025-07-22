const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-green-500 text-white p-2 rounded focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="fa fa-bars text-xl"></i>
      </button>

      {/* Sidebar */}
      <div
        id="header_part"
        className={`fixed top-0 left-0 h-screen w-64 p-4 bg-black text-white z-40 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:flex flex-col justify-between`}
      >
        {/* Top Profile Section */}
        <section className="profile flex flex-col items-center">
          <img
            className="rounded-full mb-2"
            src="asset/Images/propic.png"
            alt="Profile"
            height="160"
            width="160"
            style={{ border: "2px solid #4CAF50" }}
            loading="lazy"
            decoding="async"
            fetchpriority="high"
          />
          <h1 className="font-bold text-white">Atiqur Rahman Rasel</h1>
          <h4 className="text-sm text-green-400">Software Engineer</h4>
        </section>

        {/* Center Nav Menu */}
        <ul className="space-y-2 mt-6">
          {[
            { href: "#home", icon: "home", label: "Home" },
            { href: "#education", icon: "graduation-cap", label: "Education" },
            { href: "#skills", icon: "cogs", label: "Skills" },
            { href: "#experiences", icon: "briefcase", label: "Experiences" },
            { href: "#projects", icon: "folder", label: "Projects" },
            { href: "#contact", icon: "envelope", label: "Contact" },
          ].map(({ href, icon, label }) => (
            <li
              key={href}
              className="bg-gray-800 p-2 rounded hover:bg-gray-700 transition-colors duration-300"
              onClick={() => setIsOpen(false)} // Close on link click
            >
              <a
                href={href}
                className="font-bold flex items-center space-x-3 hover:text-green-400 transition-colors duration-300"
              >
                <i className={`fa fa-${icon} text-green-500 text-xl`}></i>
                <span>{label}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Bottom Social Icons */}
        <section className="text-[24px] text-center mt-6">
          <div>
            <i className="fa fa-github font-bold text-green-400 px-4 cursor-pointer"></i>
            <i className="fa fa-linkedin font-bold text-green-400 px-4 cursor-pointer"></i>
            <i className="fa fa-facebook font-bold text-green-400 px-4 cursor-pointer"></i>
            <i className="fa fa-whatsapp font-bold text-green-400 px-4 cursor-pointer"></i>
          </div>
        </section>
      </div>
    </>
  );
};

const HomeSection = () => (
  <section
    id="home"
    className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4 text-center"
  >
    <h1 className="text-5xl md:text-6xl font-bold text-green-400 mb-6 animate-pulse">
      Hi, I'm Atiqur Rahman Rasel
    </h1>
    <p className="max-w-3xl text-lg md:text-xl text-gray-300 leading-relaxed">
      A{" "}
      <span className="text-green-400 font-semibold">Full-Stack Developer</span>{" "}
      &{" "}
      <span className="text-green-400 font-semibold">
        Competitive Programmer
      </span>{" "}
      with 2+ years of experience in building scalable{" "}
      <span className="font-medium text-green-400">web & mobile</span> apps.
      Skilled in MERN stack, PHP, database architecture, and AI tools. Strong
      foundation in DSA with ICPC-level participation.
    </p>
    <a
      href="#contact"
      className="mt-8 inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl transition duration-300 shadow-lg"
    >
      Let’s Connect
    </a>
  </section>
);

const ExperiencesSection = () => (
  <section
    id="experiences"
    className="min-h-screen flex items-center justify-center bg-gray-800 text-white px-4 py-12"
  >
    <div className="max-w-4xl w-full">
      <h2 className="text-3xl font-bold text-green-400 mb-8">
        Work Experience
      </h2>

      {/* Junior Software Engineer */}
      <div className="mb-10">
        <div className="mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <h3 className="text-xl font-semibold text-white">
            Junior Software Engineer | AnnonLab
          </h3>
          <p className="text-sm text-gray-400">May 2023 – Sep 2024</p>
        </div>

        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>
            <span className="text-white font-medium">
              Full-Stack Feature Development:
            </span>{" "}
            Engineered and deployed new features using Laravel and Vue.js,
            applying service containers and middleware for a modular backend and
            building a responsive frontend.
          </li>
          <li>
            <span className="text-white font-medium">
              Database Architecture & Migration:
            </span>{" "}
            Refactored and migrated a complex relational database (100+ tables),
            resolving performance bottlenecks and improving data integrity.
          </li>
          <li>
            <span className="text-white font-medium">
              MERN Stack Project Leadership:
            </span>{" "}
            Led development of a scalable app with Node.js (non-blocking I/O)
            and React (Hooks, Context API) using advanced state management.
          </li>
          <li>
            <span className="text-white font-medium">
              Performance Optimization & Maintenance:
            </span>{" "}
            Boosted app stability by 20% through legacy PHP refactoring, bug
            fixing, and adding unit tests.
          </li>
          <li>
            <span className="text-white font-medium">
              AI-Enhanced Development:
            </span>{" "}
            Integrated AI tools into workflows for code generation, debugging,
            and overall quality improvements.
          </li>
        </ul>
      </div>

      {/* Software Engineer Trainee */}
      <div>
        <div className="mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <h3 className="text-xl font-semibold text-white">
            Software Engineer Trainee | AnnonLab
          </h3>
          <p className="text-sm text-gray-400 mb-4">Jan 2023 – Apr 2023</p>
        </div>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>
            <span className="text-white font-medium">
              Automation & Web Scraping:
            </span>{" "}
            Built a web scraping tool with Python and Selenium to automate
            LinkedIn data collection, improving efficiency and accuracy.
          </li>
          <li>
            <span className="text-white font-medium">
              Rapid Skill Acquisition:
            </span>{" "}
            Self-learned JavaScript, TypeScript, React.js, and Express.js;
            developed a full e-commerce app to solidify full-stack skills.
          </li>
        </ul>
      </div>
    </div>
  </section>
);

const activities = [
  {
    title: "Solved 1000+ algorithmic problems",
    detail:
      "Participated in platforms like Codeforces, LeetCode, HackerRank, and CodeChef.",
  },
  {
    title: "Core Strengths",
    detail:
      "Data Structures, Graph Theory, Dynamic Programming, Number Theory, Bit Manipulation, and Greedy Algorithms.",
  },
  {
    title: "ICPC Regional Finalist",
    detail:
      "Represented AIUB in ICPC 2019, 2020 & 2021 with teams: AIUB_Illuminate, AIUB_Miniature.",
  },
  {
    title: "Intra-AIUB Programming Contest 2021",
    detail: "Ranked 7th in the senior category among top contestants.",
  },
];

const SkillSection = () => (
  <section
    id="skills"
    className="min-h-screen w-full bg-gray-900 text-white py-16 px-4 lg:px-20 flex items-center"
  >
    <div className="max-w-6xl w-full mx-auto space-y-12">
      {/* === Technical Skills === */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-8">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-sm sm:text-base">
          <div>
            <h3 className="text-lg font-semibold text-green-300">Languages</h3>
            <p className="text-gray-300 mt-1">
              JavaScript (ES6+), TypeScript, Python, PHP, C++, HTML5, CSS3,
              Shell Script
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-green-300">Frontend</h3>
            <p className="text-gray-300 mt-1">
              React.js, React Native, Next.js, Vue.js, Tailwind CSS, Framer
              Motion, Redux, Context API, React Query
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-green-300">Backend</h3>
            <p className="text-gray-300 mt-1">
              Node.js, Express.js, Laravel, RESTful APIs, GraphQL (Basic)
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-green-300">Database</h3>
            <p className="text-gray-300 mt-1">MongoDB, MySQL, Firebase</p>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-green-300">
              Tools & Platforms
            </h3>
            <p className="text-gray-300 mt-1">
              Docker, Git, GitHub, JWT, Selenium, AWS (Basic), Firebase
            </p>
          </div>
        </div>
      </div>

      {/* === Competitive Programming Activities === */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-8">
          Competitive Programming
        </h2>

        <ul className="space-y-6">
          {activities.map((item, index) => (
            <li
              key={index}
              className="bg-gray-800 hover:bg-gray-700 transition p-5 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-semibold text-green-300">
                {item.title}
              </h3>
              <p className="text-gray-300 mt-2">{item.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

const projects = [
  {
    title: "Tarunno – A Modern News Portal Application",
    duration: "Feb 2025 – Present",
    stack: "React.js, Node.js, Express.js, MySQL, Sequelize, JWT, Docker",
    points: [
      "Engineered a secure, full-stack news platform with JWT + Cookie-based authentication and optional OTP login.",
      "Crafted a highly interactive UI using custom Hooks, React Suspense, and Framer Motion.",
      "Implemented role-based admin dashboard for managing users, posts, categories, and tags.",
      "Enabled category/tag filtering, trending prioritization, and nested commenting.",
      "Used Repository–Service–Controller backend structure for scalability.",
      "Containerized the entire app using Docker Compose.",
    ],
    repo: [
      {
        label: "Frontend",
        url: "https://github.com/AMQL3it/m-tarunno-web",
      },
      {
        label: "Backend",
        url: "https://github.com/AMQL3it/m-tarunno-server",
      },
    ],
  },
  {
    title: "Newspaper Distribution Management System",
    duration: "Dec 2024 – Present",
    stack: "React.js, React Native, Node.js, Express.js, Email Automation",
    points: [
      "Built cross-platform web/mobile system for managing subscriptions, orders, and billing.",
      "Used Node.js streams and buffers for efficient PDF/doc generation and email automation.",
      "Automated monthly billing via PDF/.doc attachments to department heads.",
      "Developed admin dashboard to modify orders and generate reports.",
      "Scalable backend using Node.js and Express.js for complex business logic.",
    ],
    repo: [
      {
        label: "Full Repo",
        url: "https://github.com/AMQL3it/Newspapers",
      },
    ],
  },
];

const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="min-h-screen w-full bg-gray-900 text-white py-16 px-4 lg:px-20 flex items-center"
    >
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-green-400 mb-8">Projects</h2>
        <p className="text-gray-300 mb-10 text-lg">
          Here are some of the full-stack projects I’ve built and contributed
          to:
        </p>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-1">
                {project.title}
              </h3>
              <p className="text-sm text-green-400 mb-2">{project.duration}</p>
              <p className="text-gray-400 text-sm mb-4">
                <span className="font-semibold text-white">Tech Stack:</span>{" "}
                {project.stack}
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4 pl-2">
                {project.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                {project.repo.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:underline underline-offset-2"
                  >
                    {link.label} Repo
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// const activities = [
//   {
//     title: "Solved 1000+ algorithmic problems",
//     detail:
//       "Participated in platforms like Codeforces, LeetCode, HackerRank, and CodeChef.",
//   },
//   {
//     title: "Core Strengths",
//     detail:
//       "Data Structures, Graph Theory, Dynamic Programming, Number Theory, Bit Manipulation, and Greedy Algorithms.",
//   },
//   {
//     title: "ICPC Regional Finalist",
//     detail:
//       "Represented AIUB in ICPC 2019, 2020 & 2021 with teams: AIUB_Illuminate, AIUB_Miniature.",
//   },
//   {
//     title: "Intra-AIUB Programming Contest 2021",
//     detail: "Ranked 7th in the senior category among top contestants.",
//   },
// ];

// const ActivitySection = () => {
//   return (
//     <section
//       id="activities"
//       className="min-h-screen bg-gray-900 text-white px-6 py-16 flex items-center"
//     >
//       <div className="max-w-5xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-8">
//           Competitive Programming
//         </h2>

//         <ul className="space-y-6">
//           {activities.map((item, index) => (
//             <li key={index} className="bg-gray-800 p-5 rounded-xl shadow-md">
//               <h3 className="text-xl font-semibold text-green-300">
//                 {item.title}
//               </h3>
//               <p className="text-gray-300 mt-2">{item.detail}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// };

const educationData = [
  {
    degree: "BSc in Computer Science and Engineering",
    institution: "American International University-Bangladesh (AIUB)",
    duration: "Jan 2018 – Dec 2022",
    result: "CGPA: 3.54 / 4.00",
  },
  {
    degree: "HSC | Science",
    institution: "Dhaka College",
    duration: "2016",
    result: "GPA: 5.00 / 5.00",
  },
  {
    degree: "SSC | Science",
    institution: "Motijheel Model High School & College",
    duration: "2014",
    result: "GPA: 5.00 / 5.00",
  },
];

const EducationSection = () => {
  return (
    <section
      id="education"
      className="min-h-screen bg-gray-800 text-white px-6 py-16 flex items-center"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-8">
          Education
        </h2>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-900 p-5 rounded-xl shadow-md border border-gray-700"
            >
              <h3 className="text-xl font-semibold text-green-300">
                {edu.degree}
              </h3>
              <p className="text-gray-200">{edu.institution}</p>
              <div className="flex justify-between text-sm text-gray-400 mt-1">
                <span>{edu.duration}</span>
                <span>{edu.result}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => (
  <section
    id="contact"
    className="min-h-screen px-6 py-20 bg-gray-800 text-white flex items-center justify-center"
  >
    <div className="max-w-xl w-full">
      <h2 className="text-4xl font-bold text-green-400 mb-8 border-b border-green-500 pb-2">
        Contact
      </h2>
      <form className="space-y-6">
        <div>
          {/* <label htmlFor="name" className="block mb-1 text-sm text-gray-300">
            Your Name
          </label> */}
          <input
            id="name"
            type="text"
            placeholder="Your Name"
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          {/* <label htmlFor="email" className="block mb-1 text-sm text-gray-300">
            Your Email
          </label> */}
          <input
            id="email"
            type="email"
            placeholder="Your Email"
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          {/* <label htmlFor="message" className="block mb-1 text-sm text-gray-300">
            Your Message
          </label> */}
          <textarea
            id="message"
            placeholder="Write your message here..."
            rows={5}
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
);

const App = () => {
  return (
    <div className="flex">
      <Header />
      <main className="ml-0 md:ml-56 w-full">
        <HomeSection />
        <EducationSection />
        <SkillSection />
        <ExperiencesSection />
        <ProjectSection />
        <ContactSection />
      </main>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
