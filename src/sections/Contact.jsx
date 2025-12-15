import './Contact.css'


export default function Contact() {
return (
    <section id="contact" className="section">
        <h2 style={{textAlign:"center",fontSize:"40px"}}>Get In Touch</h2><br />
        <p style={{textAlign:"center"}}>
            I’m open to job opportunities, freelance work, and collaborations. <br />
            Feel free to reach out — I’d be happy to connect.
        </p><br />
        <div className="contact-grid">
             <div>
                <div style={{display:"flex",justifyContent:"center"}}>
                    <img src="/images/contacts/gmail.jpg" alt="" style={{width:"25px"}} />
                    <a href="mailto:abhiram@email.com">abhiramnk70@gmail.com</a>
                </div><br />
                <div  style={{display:"flex",justifyContent:"center"}}>
                    <a href="https://github.com/Abhiram333-lang"><img src="/images/contacts/github-log0.jpg" alt="" style={{width:"35px"}} /></a>
                 
                    <a href="https://www.linkedin.com/in/abhiram-nk-71bb43227/"><img src="/images/contacts/download.png" alt="" style={{width:"35px"}} /></a>
                </div>
                
                
             </div>
        </div><br /><br /><br />
        <footer style={{textAlign:"center"}}>
            <div>© 2025 Abhiram.All rights reserved</div>
        </footer>
    </section>
   
    
    )
} 

