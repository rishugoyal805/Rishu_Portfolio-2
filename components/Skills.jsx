"use client"
import { useEffect, useRef, useState } from "react"
import "../styles/skills.css"

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)
  const skillsRef = useRef()

  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: [
        { name: "React", icon: "⚛️" },
        { name: "JavaScript", icon: "🟨" },
        { name: "HTML/CSS", icon: "🌐" },
        { name: "Next.js", icon: "▲" },
      ],
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Node.js", icon: "🟢" },
        { name: "Express.js", icon: "🚀" },
        { name: "MongoDB", icon: "🍃" },
        { name: "REST APIs", icon: "🔗" },
      ],
    },
    {
      title: "Tools & Others",
      icon: "🛠️",
      skills: [
        { name: "Git", icon: "📝" },
        { name: "Docker", icon: "🐳" },
        { name: "Figma", icon: "🎯" },
        { name: "VS Code", icon: "💻" },
      ],
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.3 }
    )

    if (skillsRef.current) observer.observe(skillsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="skills-section" ref={skillsRef}>
      <div className="skills-container">
        <div className="skills-header">
          <span className="skills-tag">WHAT I KNOW</span>
          <h2 className="skills-title">Skills & Expertise</h2>
          <p className="skills-description">
            Technologies, tools, and frameworks I use to build seamless user experiences and scalable backend systems.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`skill-card group ${isVisible ? "visible" : ""}`}
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              {/* Gradient overlay */}
              <div className="card-overlay"></div>

              {/* Decorative lighting */}
              <div className="light-effect top-right"></div>
              <div className="light-effect bottom-left"></div>

              {/* Header */}
              <div className="card-header">
                <div className="card-icon">{category.icon}</div>
                <h3 className="card-title">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="card-skills">
                {category.skills.map((skill, i) => (
                  <div className="skill-pill" key={skill.name}>
                    <span className="pill-icon">{skill.icon}</span>
                    <span className="pill-text">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills


// "use client"
// import { useEffect, useRef, useState } from "react"
// import "../styles/skills.css"

// const Skills = () => {
//   const [isVisible, setIsVisible] = useState(false)
//   const skillsRef = useRef()

//   const skillCategories = [
//     {
//       title: "Frontend",
//       icon: "🎨",
//       skills: [
//         { name: "React", icon: "⚛️" },
//         { name: "JavaScript", icon: "🟨" },
//         { name: "HTML/CSS", icon: "🌐" },
//         { name: "Next.js", icon: "▲" },
//       ],
//     },
//     {
//       title: "Backend",
//       icon: "⚙️",
//       skills: [
//         { name: "Node.js", icon: "🟢" },
//         { name: "Express.js", icon: "🚀" },
//         { name: "MongoDB", icon: "🍃" },
//         { name: "REST APIs", icon: "🔗" },
//       ],
//     },
//     {
//       title: "Tools & Others",
//       icon: "🛠️",
//       skills: [
//         { name: "Git", icon: "📝" },
//         { name: "Docker", icon: "🐳" },
//         { name: "Figma", icon: "🎯" },
//         { name: "VS Code", icon: "💻" },
//       ],
//     },
//   ]

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setIsVisible(true)
//       },
//       { threshold: 0.3 }
//     )

//     if (skillsRef.current) observer.observe(skillsRef.current)
//     return () => observer.disconnect()
//   }, [])

//   return (
//     <section 
//       id="skills" 
//       className="py-20 px-4"
//       ref={skillsRef}
//     >
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full text-sm mb-4">
//             WHAT I KNOW
//           </span>
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
//             Skills & Expertise
//           </h2>
//           <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//             Technologies, tools, and frameworks I use to build seamless user experiences and scalable backend systems.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {skillCategories.map((category, index) => (
//             <div
//               key={category.title}
//               className={`group relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
//                 isVisible 
//                   ? 'opacity-100 translate-y-0' 
//                   : 'opacity-0 translate-y-8'
//               }`}
//               style={{
//                 animationDelay: `${index * 150}ms`,
//                 transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
//               }}
//             >
//               {/* Gradient border effect */}
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              
//               {/* Category header */}
//               <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-200/50 dark:border-slate-700/50">
//                 <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
//                   {category.icon}
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
//                   {category.title}
//                 </h3>
//               </div>

//               {/* Skills grid */}
//               <div className="grid grid-cols-2 gap-3">
//                 {category.skills.map((skill, skillIndex) => (
//                   <div
//                     key={skill.name}
//                     className="group/skill flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 dark:from-slate-700 dark:to-slate-600 hover:from-blue-50 hover:to-purple-50 dark:hover:from-slate-600 dark:hover:to-slate-500 transition-all duration-300 hover:scale-105 hover:shadow-md"
//                     style={{
//                       animationDelay: `${(index * 4 + skillIndex) * 100}ms`
//                     }}
//                   >
//                     <span className="text-lg group-hover/skill:scale-110 transition-transform duration-200">
//                       {skill.icon}
//                     </span>
//                     <span className="font-medium text-gray-800 dark:text-gray-200 text-sm">
//                       {skill.name}
//                     </span>
//                   </div>
//                 ))}
//               </div>

//               {/* Decorative elements */}
//               <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
//               <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Skills