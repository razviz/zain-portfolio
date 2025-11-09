
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function App() {
  const [active, setActive] = useState('home');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, duration: 0.6 } },
  };
  const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

  const projects = [
    { title: 'Georgetown Medical Associates Website (Client Website)', desc: 'Responsive website built using HTML, CSS, and JavaScript to display up-to-date clinic information, operating hours, and contact details. Focused on accessibility and patient engagement.', link: 'https://www.georgetownma.ca/' },
    { title: 'Event Driven Community Collaboration (Cross-Platform App)', desc: 'Cross-platform app promoting community collaboration by enabling users to create and join local events in real time. Built with Flutter, Firebase, Google Maps API, and OpenAI NLP.', link: 'https://github.com/razviz/EDCC-Collab' },
    { title: 'ConTrackt Me (Android App)', desc: 'Connects users with verified professionals for tasks like home repairs or painting. Built with a focus on trust and reliability, the app streamlines hiring skilled workers for everyday jobs. Developed using Flutter and Firebase, it emphasizes secure authentication and a smooth, responsive user experience.', link: 'https://github.com/Yousuft414/ConTrackt_Me' },
    { title: 'Chef It Up (Android App)', desc: 'Gamified cooking app designed to make cooking more engaging for young adults through fun and interactive features. Built with Kotlin and Java for Android, it uses Firebase for data management and an OCR-based receipt scanner API to reward users and enhance overall engagement.', link: 'https://github.com/Yousuft414/ChefItUpApp' },
    { title: 'AI Research Project (Python)', desc: 'Multiclass classification analysis using PyCaret and the Wine Quality dataset, comparing models like decision trees, random forests, and gradient boosting.', link: 'https://github.com/razviz/AI-research-project' },
    { title: 'Blackjack Game (Python)', desc: 'Terminal-based Python blackjack game implementing full game logic, probability handling, and iterative loops for user interaction.', link: 'https://github.com/razviz/Blackjack' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#5B9EFF] via-[#5CC0FF] to-[#C9E6FF] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      <div className="backdrop-blur-sm bg-white/40 dark:bg-gray-900/40 flex-1 flex flex-col">
        <header className="flex justify-between items-center p-6 shadow-md bg-white/60 dark:bg-gray-800/70 sticky top-0 z-10 backdrop-blur-md">
          <h1 className="text-2xl font-bold text-blue-700 dark:text-blue-400">Zain Razvi</h1>
          <div className="flex items-center space-x-6">
            {['home', 'projects', 'about', 'skills', 'resume', 'contact'].map((s) => (
	      <button
	        key={s}
	        onClick={() => setActive(s)}
	        className={`capitalize font-medium ${active === s
	          ? 'text-blue-700 dark:text-blue-400'
	          : 'hover:text-blue-500 dark:hover:text-blue-300'
	          }`}
	      >
	        {s}
	      </button>
	    ))}
            <button onClick={() => setDarkMode(!darkMode)} className="ml-4 px-3 py-1 border rounded-2xl text-sm hover:bg-gray-100 dark:hover:bg-gray-700">{darkMode ? '☀️ Light' : '🌙 Dark'}</button>
          </div>
        </header>

        <main className="flex-1">
          {active === 'home' && (
            <motion.section className="flex flex-col items-center text-center px-6 py-24" initial="hidden" animate="visible" variants={sectionVariants}>
              <motion.img src="/profile.jpg" alt="Zain Razvi" className="w-40 h-40 rounded-full shadow-lg mb-6 object-cover" variants={item} />
              <motion.h2 className="text-4xl md:text-5xl font-semibold mb-3" variants={item}>Hi, I'm Zain Razvi 👋</motion.h2>
              <motion.p className="text-blue-700 dark:text-blue-400 text-lg font-medium mb-2" variants={item}>Driven by creativity, guided by data — building human-centered technology.</motion.p>
              <motion.p className="text-lg md:text-xl max-w-2xl text-gray-700 dark:text-gray-300" variants={item}>
                I’m a <span className="font-medium">Software, Mobile App, and Web Developer</span> passionate about creating intuitive, high-performance applications. From designing responsive interfaces to deploying secure cloud systems, I bring ideas to life through clean, efficient code.
              </motion.p>
              <motion.p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl" variants={item}>Currently at <span className="font-medium text-blue-700 dark:text-blue-400">Roots Funding</span>, where I develop features that enhance accessibility and improve user experience across platforms.</motion.p>
              <motion.div className="mt-8 flex gap-3" variants={item}>
                <a href="https://linkedin.com/in/zain-razvi-07506717b" target="_blank" rel="noopener noreferrer" className="px-5 py-3 bg-blue-700 text-white rounded-2xl shadow hover:bg-blue-600">LinkedIn 🔗</a>
                <a href="https://github.com/razviz" target="_blank" rel="noopener noreferrer" className="px-5 py-3 border border-blue-700 text-blue-700 dark:border-blue-400 dark:text-blue-400 rounded-2xl hover:bg-blue-50 dark:hover:bg-gray-800">GitHub 🔗</a>
              </motion.div>
            </motion.section>
          )}

          {active === 'projects' && (
            <motion.section className="px-6 py-24 max-w-5xl mx-auto" initial="hidden" animate="visible" variants={sectionVariants}>
              <motion.h2 className="text-3xl font-semibold mb-8 text-center" variants={item}>Projects</motion.h2>
              <motion.div className="grid md:grid-cols-2 gap-6" variants={item}>
                {projects.map((p) => (
                  <motion.div key={p.title} className="p-6 bg-white/70 dark:bg-gray-800/60 shadow-md rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition" variants={item}>
                    <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400">{p.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 mt-2 mb-4">{p.desc}</p>
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">View Project 🔗</a>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>
          )}

          {active === 'about' && (
            <motion.section className="px-6 py-24 max-w-3xl mx-auto text-center" initial="hidden" animate="visible" variants={sectionVariants}>
              <motion.h2 className="text-3xl font-semibold mb-4" variants={item}>About Me</motion.h2>
              <motion.p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4" variants={item}>
                I hold an Advanced Diploma in Software Development and Network Engineering, as well as an Honours Bachelor’s in Computer Science (Mobile Computing) from Sheridan College, where I developed expertise in software engineering, cloud systems, and AI research.
              </motion.p>
              <motion.p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4" variants={item}>
                I also earned an Undergraduate Certificate in Creativity and Creative Problem Solving, where I learned to integrate theories and methodologies of creativity and innovation into software design and professional problem-solving.
              </motion.p>

              <motion.div className="bg-white/70 dark:bg-gray-800/60 p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 text-left mt-6" variants={item}>
                <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-3 text-center">Education Credentials</h3>
                <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                  <li>🎓 Honours Bachelor of Computer Science (Mobile Computing) — Sheridan College — <a className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer" href="https://learner.mycreds.ca/sharelink/853b543d-53e4-4159-9d97-5b1089b5e6a7/33d2319a-4d66-4af7-953e-9e07d060c14a">View Credential 🔗</a></li>
                  <li>🎓 Undergraduate Certificate in Creativity & Creative Problem Solving — Sheridan College — <a className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer" href="https://learner.mycreds.ca/sharelink/d5ddca87-fe0e-43b8-9196-cb1732b4976f/1726b0f2-ba35-44c5-898e-0ef5ff89457b">View Credential 🔗</a></li>
                  <li>🎓 Advanced Diploma in Software Development & Network Engineering — Sheridan College — <a className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer" href="https://www.parchment.com/u/award/c3bd94e09f426d367764cee2d4357b5a">View Credential 🔗</a></li>
                </ul>
              </motion.div>

	      <motion.p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-6" variants={item}>
                Professionally, I’ve contributed to software projects at <span className="font-medium text-blue-700 dark:text-blue-400">Roots Funding</span>, <span className="font-medium text-blue-700 dark:text-blue-400">Georgetown Medical Associates</span>, <span className="font-medium text-blue-700 dark:text-blue-400">Naryant</span>, <span className="font-medium text-blue-700 dark:text-blue-400">SigmaRPA Inc.</span>, and <span className="font-medium text-blue-700 dark:text-blue-400">Nexuswave Inc.</span>, building responsive websites, designing UI prototypes, developing RPA solutions, optimizing data systems, and implementing secure web architectures.
              </motion.p>
              <motion.p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-6" variants={item}>
                Beyond coding, I enjoy exploring new technologies, mentoring peers, and creating solutions that merge creativity with functionality. Outside of development, I like expressing creativity through art and music, practicing martial arts such as Taekwondo, Brazilian Jiu-Jitsu, and Muay Thai, and staying active through regular fitness training, all of which help me stay creative, focused, and disciplined.
              </motion.p>
            </motion.section>
          )}

          {active === 'skills' && (
            <motion.section className="px-6 py-24 max-w-5xl mx-auto text-center" initial="hidden" animate="visible" variants={sectionVariants}>
              <motion.h2 className="text-3xl font-semibold mb-4" variants={item}>Skills & Certifications</motion.h2>
              <motion.p className="text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto" variants={item}>A blend of technical depth and soft skills built through professional experience and hands-on projects.</motion.p>
              <motion.div className="grid md:grid-cols-3 gap-6 text-left" variants={item}>
                <motion.div className="bg-white/70 dark:bg-gray-800/70 shadow-md rounded-2xl p-6 border" variants={item}>
                  <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-3">Programming</h3>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                    <li>Python, Java, C#, C/C++, JavaScript, SQL</li>
                    <li>HTML, CSS, PHP, React.js, Node.js, TypeScript, Bash</li>
                    <li>Kotlin, Swift, Dart (mobile)</li>
                  </ul>
                </motion.div>
                <motion.div className="bg-white/70 dark:bg-gray-800/70 shadow-md rounded-2xl p-6 border" variants={item}>
                  <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-3">Cloud & DevOps</h3>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                    <li>AWS | Azure | Docker | Kubernetes</li>
                    <li>CI/CD pipelines (Git, Jenkins)</li>
                    <li>Agile & Scrum Methodologies</li>
                  </ul>
                </motion.div>
                <motion.div className="bg-white/70 dark:bg-gray-800/70 shadow-md rounded-2xl p-6 border" variants={item}>
                  <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-3">Professional Strengths</h3>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                    <li>Analytical and structured problem solving</li>
                    <li>Excellent collaboration and communication</li>
                    <li>Continuous learning mindset</li>
                    <li>Leadership and mentorship experience</li>
                  </ul>
                </motion.div>
              </motion.div>

              <motion.div className="mt-12" variants={item}>
                <h3 className="text-2xl font-semibold text-blue-700 dark:text-blue-400 mb-3">Tools & Frameworks</h3>
                <p className="text-gray-700 dark:text-gray-300">Git • GitHub • Figma • Firebase • PostgreSQL • MySQL • TensorFlow • PyCaret</p>
              </motion.div>

              <motion.div className="mt-12" variants={item}>
                <h3 className="text-2xl font-semibold text-blue-700 dark:text-blue-400 mb-3">Certifications</h3>
                <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                  <li><span className="font-medium">Google Cybersecurity Professional Certificate</span> — <a href="https://coursera.org/share/c9e1150844ca79db4fe1036afffd48ed" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">View Credential 🔗</a> (Oct 2025)</li>
                  <li><span className="font-medium">Python Basics for Data Science</span> — <a href="https://courses.edx.org/certificates/414244ec11974c3b950f4774b5e52421" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">View Credential 🔗</a> (Mar 2025)</li>
                </ul>
              </motion.div>
            </motion.section>
          )}

          {active === 'resume' && (
            <motion.section className="px-6 py-24 max-w-3xl mx-auto text-center" initial="hidden" animate="visible" variants={sectionVariants}>
              <motion.h2 className="text-3xl font-semibold mb-4" variants={item}>Resume</motion.h2>
              <motion.p className="text-gray-700 dark:text-gray-300 mb-6" variants={item}>
                Results-driven developer with experience across web, mobile, and cloud systems. I design reliable, scalable solutions that balance innovation with user-centered design and security.
              </motion.p>
              <motion.div className="bg-white/70 dark:bg-gray-800/60 p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 text-left" variants={item}>
                <ul className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-2">
                  <li>• 5+ years of combined co-op and professional experience</li>
                  <li>• Skilled in Python, Java, C#, JavaScript, React.js, and SQL</li>
                  <li>• Experienced with AWS, Azure, Docker, and CI/CD pipelines</li>
                  <li>• Strong focus on accessible, secure, and high-performance applications</li>
                </ul>
              </motion.div>
              <motion.div className="mt-8 flex justify-center gap-4" variants={item}>
                <a href="/Zain_Razvi_Resume.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-blue-700 text-white rounded-2xl shadow hover:bg-blue-600">View Resume</a>
                <a href="/Zain_Razvi_Resume.pdf" download className="px-6 py-3 border border-blue-700 text-blue-700 dark:border-blue-400 dark:text-blue-400 rounded-2xl hover:bg-blue-50 dark:hover:bg-gray-800">Download PDF</a>
              </motion.div>
            </motion.section>
          )}

          {active === 'contact' && (
            <motion.section className="px-6 py-24 max-w-xl mx-auto text-center" initial="hidden" animate="visible" variants={sectionVariants}>
              <motion.h2 className="text-3xl font-semibold mb-4" variants={item}>Get In Touch</motion.h2>
              <motion.p className="text-gray-700 dark:text-gray-300 mb-6" variants={item}>Let’s connect! Feel free to reach out for collaborations, questions, or just to say hi.</motion.p>
              <motion.div className="space-y-2 text-blue-700 dark:text-blue-400 font-medium" variants={item}>
                <p>📧 <a href="mailto:bruceraz123@gmail.com" className="hover:underline">bruceraz123@gmail.com</a></p>
                <p>📱 <a href="tel:+16479708502" className="hover:underline">(647) 970-8502</a></p>
                <p>💼 <a href="https://linkedin.com/in/zain-razvi-07506717b" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn Profile 🔗</a></p>
                <p>💻 <a href="https://github.com/razviz" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub Profile 🔗</a></p>
              </motion.div>
            </motion.section>
          )}
        </main>

        <footer className="py-8 text-center text-gray-600 dark:text-gray-400 text-sm border-t border-gray-300 dark:border-gray-700">
          © {new Date().getFullYear()} Zain Razvi. Built with React, Vite & TailwindCSS.
        </footer>
      </div>
    </div>
  );
}
