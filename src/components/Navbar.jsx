import './Navbar.css'


export default function Navbar() {
const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
}


return (
    <nav className="navbar">
        <h2 className="logo">Abhiram</h2>
            <ul className="nav-links">
                <li onClick={() => scrollTo('home')}>Home</li>
                <li onClick={() => scrollTo('about')}>About</li>
                <li onClick={() => scrollTo('education')}>Education</li>
                <li onClick={() => scrollTo('skills')}>Skills</li>
                <li onClick={() => scrollTo('projects')}>Projects</li>
                <li onClick={() => scrollTo('contact')}>Contact</li>
           </ul>
    </nav>
    )
}