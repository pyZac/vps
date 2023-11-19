import React from 'react';

const WhyChoose = () => {
    return (
        <>
            <div className="why-choose-us ptb-80 pt-0">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="section-title">
                                <h2>Why Choose Us</h2>
                                <div className="bar"></div>
                                <p>We will present to you several points that you must consider carefully to decide if we are the most suitable choice for you.</p>
                            </div>

                            <div className="why-choose-us-image">
                                <img 
                                    src="/images/why-choose-us-image/man-stand.png"
                                    className="animate__animated animate__fadeInLeft" 
                                    alt="image"
                                />
                        
                                <img 
                                    src="/images/why-choose-us-image/database.png"
                                    className="animate__animated animate__fadeInRight" 
                                    alt="image"
                                />
                    
                                <img 
                                    src="/images/services-left-image/cercle-shape.png"
                                    className="rotateme" 
                                    alt="image"
                                />
                    
                                <img 
                                    src="/images/why-choose-us-image/main-static.png"
                                    className="main-pic animate__animated animate__fadeInUp" 
                                    alt="image"
                                />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="single-why-choose-us">
                                        <div className="icon">
                                            <i className="flaticon-team"></i>
                                        </div>
                                        <h3>Proficient & Friendly</h3>
                                        <p>When you choose our hosting and web design services, you'll receive support from a team that is not only highly skilled and proficient but also friendly and eager to assist you.</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-why-choose-us">
                                        <div className="icon">
                                            <i className="flaticon-rocket"></i>
                                        </div>
                                        <h3>Extremely Fast</h3>
                                        <p>Our infrastructure and technologies are optimized for speed, allowing us to provide hosting and web design services that are extremely fast and responsive.</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-why-choose-us">
                                        <div className="icon">
                                            <i className="flaticon-shield"></i>
                                        </div>
                                        <h3>100% Safe & Security</h3>
                                        <p>With our hosting and web design solutions, you can rest assured that your website is protected with robust security measures, ensuring 100% safety against threats and vulnerabilities.</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-why-choose-us">
                                        <div className="icon">
                                            <i className="flaticon-diamond"></i>
                                        </div>
                                        <h3>Top-Rated</h3>
                                        <p>Experience the difference of our top-rated hosting and web design services, backed by positive reviews and testimonials from satisfied clients.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WhyChoose;
