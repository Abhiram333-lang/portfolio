

import './Home.css'

export default function Home() {
  return (
    <section id="home" className="home">
      <h1 className="home-title" >Hi, I'm Abhiram 👋</h1>
      <p className="home-subtitle">Frontend Developer</p>

      <div className="btn-group">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          View Resume
        </a>
        <a href="/resume.pdf" download className="btn outline">
          Download Resume
        </a>
      </div>
    </section>
  )
}
