"use client"

import { useEffect, useState, useRef } from "react"
import "../styles/Hero.css"

const Hero = () => {
  const [displayText, setDisplayText] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef()

const roles = [
  "Full Stack Web Developer",
  "MERN Stack Enthusiast",
  "React.js Specialist",
  "UI/UX Designer",
  "Tech Problem Solver",
  "Open Source Contributor",
  // "LLM Integration Developer",
  "AI Agent Workflow Builder",
  "Generative AI Explorer"
];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const currentRole = roles[currentRoleIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [displayText, currentRoleIndex, isDeleting, roles])

  const scrollToProjects = () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-background">
        <div className="grid-pattern"></div>
        <div className="floating-elements">
          <div className="element element-1"></div>
          <div className="element element-2"></div>
          <div className="element element-3"></div>
          <div className="element element-4"></div>
        </div>
      </div>

      <div className="container">
        <div className={`hero-content ${isVisible ? "animate" : ""}`}>
          <div className="hero-text">
            <div className="greeting">
              <span className="wave">👋</span>
              <span>Hello, I'm</span>
            </div>
            <h1>
              <span className="highlight">Rishu Goyal</span>
            </h1>
            <h2 className="typing-text">
              {displayText}
              <span className="cursor">|</span>
            </h2>
            <p className="hero-description">
              I craft scalable, efficient, and user-friendly digital experiences. 
              Passionate about blending functionality with aesthetics to build impactful solutions.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={scrollToProjects}>
                <span>View My Work</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z" />
                </svg>
              </button>
              <a href="#contact" className="btn btn-secondary">
                <span>Get In Touch</span>
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="code-window">
              <div className="window-header">
                <div className="window-controls">
                  <span className="control close"></span>
                  <span className="control minimize"></span>
                  <span className="control maximize"></span>
                </div>
                {/* <span className="window-title">portfolio.js</span> */}
              </div>
              <pre className="code-content" aria-label="Developer code snippet">
                <code>
                  {[
                    {
                      lineNumber: 1,
                      code: (
                        <>
                          <span className="keyword">const</span>{" "}
                          <span className="variable">developer</span> = {"{"}
                        </>
                      ),
                    },
                    {
                      lineNumber: 2,
                      code: (
                        <>
                          &nbsp;&nbsp;<span className="property">name</span>:{" "}
                          <span className="string">"Rishu Goyal"</span>,
                        </>
                      ),
                    },
                    {
                      lineNumber: 3,
                      code: (
                        <>
                          &nbsp;&nbsp;<span className="property">skills</span>: [
                          <span className="string">"React"</span>,{" "}
                          <span className="string">"Node.js"</span>,{" "}
                          <span className="string">"MongoDB"</span>],
                        </>
                      ),
                    },
                    {
                      lineNumber: 4,
                      code: (
                        <>
                          &nbsp;&nbsp;<span className="property">passion</span>:{" "}
                          <span className="string">"Building amazing apps"</span>,
                        </>
                      ),
                    },
                    {
                      lineNumber: 5,
                      code: (
                        <>
                          &nbsp;&nbsp;<span className="property">LinkedIn</span>:{" "}
                          <span className="string">"rishugoyal0405"</span>,
                        </>
                      ),
                    },
                    {
                      lineNumber: 6,
                      code: (
                        <>
                          &nbsp;&nbsp;<span className="property">Github</span>:{" "}
                          <span className="string">"rishugoyal805"</span>,
                        </>
                      ),
                    },
                    {
                      lineNumber: 7,
                      code: <>{"}"}</>,
                    },
                  ].map(({ lineNumber, code }, index) => (
                    <div
                      className="code-line"
                      key={index}
                      style={{
                        animationDelay: `${0.2 + index * 0.15}s`,
                        animationFillMode: "forwards",
                      }}
                    >
                      <span className="line-number">{lineNumber}</span>
                      <span className="code-text">{code}</span>
                    </div>
                  ))}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
