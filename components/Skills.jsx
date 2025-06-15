"use client"

import { useEffect, useRef, useState } from "react"
import "../styles/Skills.css"

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)
  const skillsRef = useRef()

  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: [
        { name: "React", level: 90, icon: "⚛️" },
        { name: "JavaScript", level: 85, icon: "🟨" },
        { name: "TypeScript", level: 80, icon: "🔷" },
        { name: "HTML/CSS", level: 95, icon: "🌐" },
        { name: "Next.js", level: 85, icon: "▲" },
      ],
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 80, icon: "🟢" },
        { name: "Express", level: 75, icon: "🚀" },
        { name: "MongoDB", level: 70, icon: "🍃" },
        { name: "PostgreSQL", level: 65, icon: "🐘" },
        { name: "REST APIs", level: 85, icon: "🔗" },
      ],
    },
    {
      title: "Tools & DevOps",
      icon: "🛠️",
      skills: [
        { name: "Git", level: 90, icon: "📝" },
        { name: "Docker", level: 60, icon: "🐳" },
        { name: "AWS", level: 55, icon: "☁️" },
        { name: "Figma", level: 75, icon: "🎯" },
        { name: "Webpack", level: 70, icon: "📦" },
      ],
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (skillsRef.current) {
      observer.observe(skillsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="skills" ref={skillsRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">What I know</span>
          <h2>Skills & Expertise</h2>
          <p className="section-description">Technologies and tools I use to bring ideas to life</p>
        </div>

        <div className={`skills-grid ${isVisible ? "animate" : ""}`}>
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="skill-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-info">
                        <span className="skill-icon">{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          animationDelay: `${(categoryIndex * 5 + skillIndex) * 0.1}s`,
                        }}
                      ></div>
                    </div>
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
