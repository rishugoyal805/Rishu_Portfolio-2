"use client"

import { useState, useEffect, useRef } from "react"
import "../styles/Projects.css"

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all")
  const [isVisible, setIsVisible] = useState(false)
  const projectsRef = useRef()
  const [searchTerm, setSearchTerm] = useState("")

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React, Node.js, and MongoDB featuring real-time inventory management",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      category: "fullstack",
      github: "#",
      live: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management Dashboard",
      description:
        "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
      category: "frontend",
      github: "#",
      live: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Weather Analytics App",
      description:
        "A comprehensive weather application with location-based forecasts, historical data, and interactive charts",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["JavaScript", "Chart.js", "API Integration", "CSS3"],
      category: "frontend",
      github: "#",
      live: "#",
      featured: false,
    },
    {
      id: 4,
      title: "Blog API & CMS",
      description:
        "RESTful API for a blogging platform with JWT authentication, role-based access, and content management",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Node.js", "Express", "JWT", "PostgreSQL", "Redis"],
      category: "backend",
      github: "#",
      live: "#",
      featured: false,
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React featuring dark mode and smooth animations",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "CSS3", "Intersection Observer", "Local Storage"],
      category: "frontend",
      github: "#",
      live: "#",
      featured: true,
    },
    {
      id: 6,
      title: "Real-time Chat App",
      description:
        "A scalable chat application with Socket.io, featuring private messaging, group chats, and file sharing",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Socket.io", "Node.js", "Express", "MongoDB"],
      category: "fullstack",
      github: "#",
      live: "#",
      featured: false,
    },
  ]

  const filters = [
    { key: "all", label: "All Projects", count: projects.length },
    { key: "featured", label: "Featured", count: projects.filter((p) => p.featured).length },
    { key: "frontend", label: "Frontend", count: projects.filter((p) => p.category === "frontend").length },
    { key: "backend", label: "Backend", count: projects.filter((p) => p.category === "backend").length },
    { key: "fullstack", label: "Full Stack", count: projects.filter((p) => p.category === "fullstack").length },
  ]

  const getFilteredProjects = () => {
    let filtered = projects

    // Apply category filter
    if (activeFilter === "featured") {
      filtered = filtered.filter((project) => project.featured)
    } else if (activeFilter !== "all") {
      filtered = filtered.filter((project) => project.category === activeFilter)
    }

    // Apply search filter
    if (searchTerm.trim()) {
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.technologies.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }

    return filtered
  }

  const filteredProjects = getFilteredProjects()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (projectsRef.current) {
      observer.observe(projectsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="projects" ref={projectsRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">My work</span>
          <h2>Featured Projects</h2>
          <p className="section-description">A showcase of my recent work and personal projects</p>
        </div>

        <div className="project-search">
          <div className="search-container">
            <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
            <input
              type="text"
              placeholder="Search projects by name, description, or technology..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            {searchTerm && (
              <button className="clear-search" onClick={() => setSearchTerm("")} aria-label="Clear search">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              </button>
            )}
          </div>
        </div>

        <div className="project-filters">
          {filters.map((filter) => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? "active" : ""}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              <span>{filter.label}</span>
              <span className="filter-count">{filter.count}</span>
            </button>
          ))}
        </div>

        {searchTerm && (
          <div className="search-results-info">
            <p>
              {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""} found for "{searchTerm}"
            </p>
          </div>
        )}

        <div className={`projects-grid ${isVisible ? "animate" : ""}`}>
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${project.featured ? "featured" : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {project.featured && <div className="featured-badge">Featured</div>}

              <div className="project-image">
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} className="project-link" aria-label="View source code">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <a href={project.live} className="project-link" aria-label="View live demo">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <p>No projects found for the selected filter.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
