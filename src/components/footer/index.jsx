import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
        <h1>My Portfolio</h1>

        <section className="contact" vocab="reactportfolio123.netlify.com"typeof="localbusiness">
            <h2>
                Contact Me:
            </h2>

            <address property="email">
                <a href="mailto:hi@contact.us">hi@contact.us</a>
            </address>

            <p className="telephone">123-456-7890</p>
            
            <address property="address" typeof="PostalAddress">
                 <p property="streetAddress">123 Main Street., Suite 234</p>
                 <p>
                    <span property="addressLocality">Centerville</span>
                    <br />
                    <span property="addressRegion">New Jersey</span>
                    <br />
                    <span property="postalCode">07760</span>
                 </p>
                 <p property="addressCountry">United States of America</p>
            </address>
        </section>    
     
        <p>&copy; 2022</p>

        </footer>
    )
}

export default Footer

