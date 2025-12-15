import './Projects.css'


export default function Projects() {
return (
    <section id="projects" className="section gray">
        <h2 style={{textAlign:"center",fontSize:"40px"}}>Projects</h2> <br /><br />
        <div className="project-grid">
            <div className="project-card">
                <h3 style={{textAlign:"center"}}>Planty's</h3><br />
                <p>A clean and responsive single-page portfolio website designed for smooth navigation and modern presentation across all devices.</p>
                <div className="links" style={{display:"flex",justifyContent:"space-between"}}>
                    <a href="https://github.com/Abhiram333-lang/plant">GitHub</a>
                    <a href="https://abhiram333-lang.github.io/plant/">Live Demo</a>
                </div><br />
                <ul style={{display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>TailwindCSS</li>
                </ul>
            </div>
            <div className="project-card">
                <h3 style={{textAlign:"center"}}>StarBucks</h3><br />
                <p>A visually rich brand-inspired landing page focused on clean layout and engaging presentation.</p><br />
                <div className="links" style={{display:"flex",justifyContent:"space-between"}}>
                    <a href="https://github.com/Abhiram333-lang/task_Starbucks">GitHub</a>
                    <a href="https://abhiram333-lang.github.io/task_Starbucks/">Live Demo</a>
                </div><br />
                <ul style={{display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>TailwindCSS</li>
                </ul>
            </div>
            <div className="project-card">
                <h3 style={{textAlign:"center"}}>Double cheese and Bacon</h3><br />
                <p>A playful themed webpage showcasing creative design with smooth visual flow and responsiveness.</p>
                <div className="links" style={{display:"flex",justifyContent:"space-between"}}>
                    <a href="https://github.com/Abhiram333-lang/task_cheese">GitHub</a>
                    <a href="https://abhiram333-lang.github.io/task_cheese/">Live Demo</a>
                </div> <br />
                <ul style={{display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>TailwindCSS</li>
                </ul>
            </div>
            

        </div>
    </section>
)
}