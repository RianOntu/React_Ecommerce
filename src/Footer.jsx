import React from 'react'

function Footer() {
    return (
        <footer>
        <div class="footer-container">
            <div class="footer-logo">
                <h2>FurniFlex</h2>
            </div>
            <div class="footer-links">
                <div class="footer-column">
                    <h3>About Us</h3>
                    <ul>
                        <li><a href="#">Master Plan</a></li>
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">Invest</a></li>
                        <li><a href="#">Pressroom</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Explore EEVE</h3>
                    <ul>
                        <li><a href="#">Unlock my Robot Power</a></li>
                        <li><a href="#">Starlight</a></li>
                        <li><a href="#">Robot Platform</a></li>
                        <li><a href="#">EEVE Roadmap</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Community & Support</h3>
                    <ul>
                        <li><a href="#">Willow X Community</a></li>
                        <li><a href="#">Developer & Maker Access</a></li>
                        <li><a href="#">Special Cases</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="social-icons">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
            </div>
            <div class="footer-bottom-links">
                <a href="#">March22 Recap</a>
                <a href="#">Privacy Policy</a>
                <a href="#">General Terms</a>
                <a href="#">Contact</a>
            </div>
            <div class="footer-country">
                <p>United States (English)</p>
            </div>
        </div>
        <div class="footer-copyright">
            <p>EEVE © 2024. All rights reserved.</p>
        </div>
    </footer>
    )
}

export default Footer
