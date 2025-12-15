
import './About.css'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="about-text">
        <h2 className="about-title" style={{fontSize:"40px"}}>About Me</h2>

        <p>
          I am a passionate and self-driven Python and MERN full-stack developer
          who loves building clean, efficient, and user-friendly applications.
          My strong technical foundation in Python, C, SQL, HTML, CSS,
          TailwindCSS, JavaScript, and React.js allows me to develop projects
          that blend functionality with great user experience.
        </p>

        <p>
          I take pride in being a hardworking, creative, and fast learner with
          excellent problem-solving abilities. My adaptability and team
          collaboration skills help me work confidently in dynamic environments.
        </p>

        <p>
          My long-term goal is to become a skilled MERN full-stack developer
          capable of building scalable, impactful, and modern web applications.
        </p>
      </div>

      <div className="about-img">
        <img src="/profile.jpg" alt="profile" />
      </div>
    </section>
  )
}
