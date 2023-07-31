import React from 'react'
import "./footer.css"
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div className="footer-wrap ">
            <div className="footer-basic d-flex align-items-center justify-content-center">
                <footer>
                    <div className="social">
                        <a href="#"><i className="fa-solid fa-envelope"></i></a>
                        <a href="#"><i className="fa-brands fa-youtube"></i></a>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#"><i className="fa-brands fa-facebook"></i></a>
                        <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                    <ul className="list-inline">
                        <li className="list-inline-item"><a href="#">Download Brochure</a></li>
                        <li className="list-inline-item"><a href="#">Home</a></li>
                        <li className="list-inline-item"><a href="#">Speakers</a></li>
                        <li className="list-inline-item"><a href="#">Gallery</a></li>
                        <li className="list-inline-item"><a href="#">Contact Us</a></li>
                        
                    </ul>
                    <p className="copyright">Developed By EML Webops Team - &copy; {currentYear}</p>
                </footer>
            </div>
        </div >
    )
}


