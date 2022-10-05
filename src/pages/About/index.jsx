import { Link } from "react-router-dom"
import Footer from "../../components/footer"
import Header from "../../components/header"
import './about.css'

const About = () => {
    return(
        <>
        <Header />
        <main id="about">
            <h1 className="aboutHeader">About</h1>
            <section className="content"></section>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis aliquet justo, ac lobortis sem. Maecenas ultricies sollicitudin ultrices. Maecenas viverra pellentesque sollicitudin. Nam molestie hendrerit arcu vel ultricies. Etiam vitae hendrerit mauris. In nec dignissim ante. Etiam sapien sem, feugiat eget lacus id, condimentum interdum metus. Integer rutrum, metus in viverra interdum, dolor nisi tempor nibh, nec imperdiet velit odio eget diam. Vestibulum tincidunt rutrum ex. Duis et massa nec nisl maximus ultrices sit amet quis mi. Aenean dolor tortor, varius non commodo sit amet, condimentum id lectus.</p>

            <p>Hasellus in maximus sem. Donec at nunc eget nulla dictum hendrerit. Nullam ut fermentum urna. Praesent a leo bibendum, gravida risus non, euismod mauris. Cras nec rhoncus odio, at lobortis est. Maecenas viverra id nisi sit amet finibus. Sed mollis erat non blandit efficitur. Proin pellentesque posuere sapien at pellentesque. Maecenas turpis sapien, tincidunt vitae risus ac, eleifend egestas ipsum. Ut aliquet nulla ut ultricies commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed ultricies sapien quam, ut gravida nibh venenatis egestas. Praesent varius eu dolor in tempus.</p>

            <p>Malesuada orci sit amet sagittis dignissim. Fusce aliquam tincidunt purus sed ullamcorper. Etiam facilisis ipsum mollis mi interdum hendrerit. Etiam mollis sed risus ut porta. Duis volutpat est eu arcu egestas, at viverra felis tincidunt. Nam sed vehicula nulla. Phasellus vel ligula quis nibh mollis rutrum ut ut libero. Praesent vestibulum fringilla tempor.</p>

            <p>Aenean vestibulum nibh in molestie dictum. Nulla in libero enim. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi diam nibh, consectetur ac placerat a, consequat vitae erat. Donec id dui ac est maximus cursus et ut nibh.</p>

            <p>Proin pharetra scelerisque enim, et feugiat enim commodo sit amet. Cras molestie egestas nisl, at gravida purus. Vestibulum facilisis pellentesque eros, ut convallis nibh condimentum quis. Duis urna risus, placerat id enim ut, pulvinar ultricies felis. Vestibulum viverra eget leo nec ullamcorper. Morbi tristique finibus est, in aliquet mauris scelerisque id. Ut sed libero eget tortor ullamcorper eleifend ut nec dui. Proin ornare posuere magna, hendrerit dictum purus dictum nec. Nulla ullamcorper nunc in elit posuere, vitae ultricies odio auctor. Donec non cursus nunc. Curabitur enim augue, bibendum a enim nec, luctus posuere lorem.
            </p>

        <Link to="/"className="link">
             Home
        </Link>
        </main>
        <Footer />
        </>
    )
}

export default About