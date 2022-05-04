import "../components/Main.css";
import email from "../images/email.png";
import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png";

function Footer() {
    return (
        <div className="Footer">
            <img className="social-media" alt="social media" src={instagram}></img>
            <img className="social-media" alt="social media" src={twitter}></img>
            <img className="social-media" alt="social media" src={email}></img>
        </div>
    );
}

export default Footer;