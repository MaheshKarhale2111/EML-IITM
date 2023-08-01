import React from 'react'
import "./footer.css"

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div className="footer-wrap ">
            <div className="footer-basic d-flex align-items-center justify-content-center">
                <footer>
                    <div className="social">
                        <a href="mailto:head@eml-iitm.org"><i className="fa-solid fa-envelope"></i></a>
                        <a href="https://www.youtube.com/c/emliitm"><i className="fa-brands fa-youtube"></i></a>
                        <a href="https://www.instagram.com/emliitm/"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://www.facebook.com/eml.iitm/"><i className="fa-brands fa-facebook"></i></a>
                        <a href="https://www.linkedin.com/company/eml-iitm/"><i className="fa-brands fa-linkedin"></i></a>
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


