import './Skills.css'


export default function Skills() {
const lbSkills = ['Python','JavaScript','MySQL','C Programming']
const ftSkills = ['HTML','CSS','TailwindCSS','React']
const tpSkills=['GitHub','VS Code']
return (
    <section id="skills" className="section" style={{textAlign:"center"}}>
        <h2 style={{fontSize:"40px"}}>Skills</h2> <br /> <br /><br />
        <p>I enjoy learning new technologies and applying them to build effcient user-friendly solutions.Here are the major languages,tools and technologies i work with: </p> <br /> <br />
        <div>
            <h2>Languages & Databases</h2> <br /> <br />
                <div className="skills-grid">
                    {lbSkills.map(skill1 => (
                    <div key={skill1} className="skill-box">{skill1}</div>
                    ))}
                </div>
        </div> <br /> <br />
        <div>
            <h2>Frontend  Technologies</h2> <br /> <br />
                <div className="skills-grid">
                    {ftSkills.map(skill2 => (
                    <div key={skill2} className="skill-box">{skill2}</div>
                    ))}
                </div>
        </div> <br /> <br />
         <div>
            <h2>Tools & Platforms</h2> <br /> <br />
                <div className="skills-grid">
                    {tpSkills.map(skill3 => (
                    <div key={skill3} className="skill-box">{skill3}</div>
                    ))}
                </div>
        </div> <br /> <br />
</section>
)
}