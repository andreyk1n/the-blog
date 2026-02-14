import "./Footer.scss";

const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="footer__container">
                <p>© 2023</p>
                <div className="footer__nav">
                    <a href="#" className="footer__link">Twitter</a>
                    <a href="#" className="footer__link">LinkedIn</a>
                    <a href="#" className="footer__link">Email</a>
                    <a href="#" className="footer__link">RSS feed</a>
                    <a href="#" className="footer__link">Add to Feedly</a>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;