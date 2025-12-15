import './Education.css'


export default function Education() {
return (
    <section id="education" className="section gray">
        <h2 style={{textAlign:"center",fontSize:"40px"}}>Education</h2> <br /><br />
        <div className="edu-card">
            <h3>B.Tech – Computer Science and Engineering</h3>
            <p>A.P.J Abdul Kalam Technical University</p>
            <span>2021 – 2025</span>
        </div><br />
         <div className="edu-card">
            <h3>Pluse Two– Computer Science</h3>
            <p>KMHSS Kottakkal,Kozhikode </p>
            <span>2020 – 2021</span>
        </div><br />
         <div className="edu-card">
            <h3>B.Tech – Computer Science</h3>
            <p>Technical High School Payyoli,Calicut</p>
            <span>2018 – 2019</span>
        </div>
    </section>
    
)
}