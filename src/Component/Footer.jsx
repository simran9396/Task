import React from 'react'
import '../footer.css'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <div>
            <footer className="footer-section">
                <div className="footer-top">
                    <Container>
                        <Row>
                            <Col md={3}>
                                <div className="widget company-intro-widget">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
                                    <ul className="company-footer-contact-list">
                                        <li><i className="fas fa-phone"></i>0123456789</li>
                                        <li><i className="fas fa-clock"></i>Mon - Sat 8.00 - 18.00</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className="widget course-links-widget">
                                    <h5 className="widget-title">Popular Courses</h5>
                                    <ul className="courses-link-list">
                                        <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i>Academic English</a></li>
                                        <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i>Web Technology</a></li>
                                        <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i>PC Systems</a></li>
                                        <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i>Ui Web Design</a></li>
                                        <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i>Web Development</a></li>
                                        <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i>Apps Development</a></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className="widget latest-news-widget">
                                    <h5 className="widget-title">lastest news</h5>
                                    <ul className="small-post-list">
                                        <li>
                                            <div className="small-post-item">
                                                <a href="#" className="post-date">July 18, 2018</a>
                                                <h6 className="small-post-title"><a href="#">Lorem Ipsum is simply dummy text of the printing.</a></h6>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="small-post-item">
                                                <a href="#" className="post-date">July 28, 2018</a>
                                                <h6 className="small-post-title"><a href="#">Lorem Ipsum is simply dummy text of the printing</a></h6>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className="widget newsletter-widget">
                                    <h5 className="widget-title">Newsletter</h5>
                                    <div className="footer-newsletter">
                                        <p>Sign Up to Our Newsletter to Get Latest Updates & Services</p>
                                        {/* <form className="news-letter-form">
                                            <input type="email" name="news-email" id="news-email" placeholder="Your email address">
                                                <input type="submit" value="Send">
                                            </form>
                                        </div> */}
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </footer>
        </div>
    )
}

export default Footer