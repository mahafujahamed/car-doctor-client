import { Link } from 'react-router-dom';
import logo from '../../../Assets/logo.svg';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <div>
                <img src={logo} alt="" />
                <p>Edwin Diaz is a software and web <br /> technologies engineer, a life coach <br /> trainer who is also a serial .</p>
            </div>
            <div>
                <span className="footer-title">About</span>
                <Link to="/" className="link link-hover">Home</Link>
                <Link to="/services" className="link link-hover">Services</Link>
                <Link to="/contact" className="link link-hover">Contact</Link>
                
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">Why Car Doctor</a>
                <a className="link link-hover">About</a>
              
            </div>        
            <div>
                <span className="footer-title">Sopport</span>
                <a className="link link-hover">Support Center</a>
                <a className="link link-hover">Feedback</a>
                <a className="link link-hover">Accesibility</a>
            </div>
        </footer>
    );
};              

export default Footer;