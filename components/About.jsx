"use client"

import { useEffect, useRef, useState } from "react"
import "../styles/About.css"

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const aboutRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="about" ref={aboutRef}>
      <div className="container">
        <div className={`about-content ${isVisible ? "animate" : ""}`}>
          <div className="about-text">
            <div className="section-header">
              <span className="section-tag">Get to know me</span>
              <h2>About Me</h2>
            </div>

            <div className="about-description">
              <p className="lead">
                I'm a passionate full-stack developer who loves turning complex problems into simple, beautiful, and
                intuitive solutions.
              </p>
              <p>
                With expertise in modern web technologies, I specialize in creating responsive, user-friendly
                applications that deliver exceptional experiences. My journey in development is driven by curiosity and
                a commitment to continuous learning.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
                sharing knowledge with the developer community.
              </p>
            </div>

            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
                  </svg>
                </div>
                <div>
                  <h4>Clean Code</h4>
                  <p>Writing maintainable, scalable code</p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <div>
                  <h4>Problem Solving</h4>
                  <p>Finding innovative solutions</p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div>
                  <h4>User Focus</h4>
                  <p>Creating exceptional user experiences</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-stats">
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">50+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">2+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">100%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Learning Mode</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
