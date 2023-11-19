import React from 'react';
import Link from 'next/link';

const PricingStyleTwo = () => {
    return (
        <>
            <div className="pricing-area pt-80 pb-50 bg-f7fafd">
                <div className="container">
                    <div className="section-title">
                        <h2>Choose Your Plan.</h2>
                        <div className="bar"></div>
                        <p>We have hosting packages for every type of site and every budget, Not sure what's best? Give us a call and we'll help you figure it out.</p>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-pricing-table">
                                <div className="pricing-header">
                                    <i className="flaticon-vps"></i>
                                    <h3>Vps Hosting</h3>
                                    <h3 style={{color:"#1bc1e1"}}>always with you</h3>
                                </div>
                                
                                <div className="price">
                                    <span><sup>$</sup>15.00<span>/y</span></span>
                                </div>                                
                                <div className="pricing-features">
                                    <ul>
                                        <li><i data-feather="check"></i> 150 MB + 150 MB (free)</li>
                                        <li><i data-feather="check"></i> free domain</li>
                                        <li><i data-feather="check"></i> hosting discounts</li>
                                        <li><i data-feather="check"></i> 3 GB Bandwidth</li>
                                        <li><i data-feather="check"></i> 2 sub-domains</li>
                                        <li><i data-feather="check"></i> 1 database</li>
                                        <li><i data-feather="check"></i> 5 E-mail Accounts</li>
                                        <li><i data-feather="check"></i> 24/7 Support</li>
                                    </ul>
                                </div>                              
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-pricing-table">
                                <div className="pricing-header">
                                    <i className="flaticon-vps"></i>
                                    <h3>Vps Hosting</h3>
                                    <h3 style={{color:"#1bc1e1"}}>StartUp</h3>
                                </div>
                                
                                <div className="price">
                                    <span><sup>$</sup>22.5<span>/y</span></span>
                                </div>                                
                                <div className="pricing-features">
                                    <ul>
                                        <li><i data-feather="check"></i> 250 MB + 250 MB (free)</li>
                                        <li><i data-feather="check"></i> free domain</li>
                                        <li><i data-feather="check"></i> hosting discounts</li>
                                        <li><i data-feather="check"></i> 10 GB Bandwidth</li>
                                        <li><i data-feather="check"></i> 5 sub-domains</li>
                                        <li><i data-feather="check"></i> 5 database</li>
                                        <li><i data-feather="check"></i> 10 E-mail Accounts</li>
                                        <li><i data-feather="check"></i> 24/7 Support</li>
                                    </ul>
                                </div>                              
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-pricing-table">
                                <div className="pricing-header">
                                    <i className="flaticon-vps"></i>
                                    <h3>Vps Hosting</h3>
                                    <h3 style={{color:"#1bc1e1"}}>Basic</h3>
                                </div>
                                
                                <div className="price">
                                    <span><sup>$</sup>32.5 <span>/y</span></span>
                                </div>                                
                                <div className="pricing-features">
                                    <ul>
                                        <li><i data-feather="check"></i> 500 MB + 500 MB (free)</li>
                                        <li><i data-feather="check"></i> free domain</li>
                                        <li><i data-feather="check"></i> hosting discounts</li>
                                        <li><i data-feather="check"></i> 30 GB Bandwidth</li>
                                        <li><i data-feather="check"></i> 10 sub-domains</li>
                                        <li><i data-feather="check"></i> 10 database</li>
                                        <li><i data-feather="check"></i> 20 E-mail Accounts</li>
                                        <li><i data-feather="check"></i> 24/7 Support</li>
                                    </ul>
                                </div>                              
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-pricing-table">
                                <div className="pricing-header">
                                    <i className="flaticon-vps"></i>
                                    <h3>Vps Hosting</h3>
                                    <h3 style={{color:"#1bc1e1"}}>Bronze Plan</h3>
                                </div>
                                
                                <div className="price">
                                    <span><sup>$</sup>55.00<span>/y</span></span>
                                </div>                                
                                <div className="pricing-features">
                                    <ul>
                                        <li><i data-feather="check"></i> 1 GB + 1 GB (free)</li>
                                        <li><i data-feather="check"></i> free domain</li>
                                        <li><i data-feather="check"></i> hosting discounts</li>
                                        <li><i data-feather="check"></i> 150 GB Bandwidth</li>
                                        <li><i data-feather="check"></i> 20 sub-domains</li>
                                        <li><i data-feather="check"></i> 15 database</li>
                                        <li><i data-feather="check"></i> 30 E-mail Accounts</li>
                                        <li><i data-feather="check"></i> 24/7 Support</li>
                                    </ul>
                                </div>                              
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-pricing-table">
                                <div className="pricing-header">
                                    <i className="flaticon-vps"></i>
                                    <h3>Vps Hosting</h3>
                                    <h3 style={{color:"#1bc1e1"}}>Silver Plan</h3>
                                </div>
                                
                                <div className="price">
                                    <span><sup>$</sup>90.00<span>/y</span></span>
                                </div>                                
                                <div className="pricing-features">
                                    <ul>
                                        <li><i data-feather="check"></i> 2 GB + 2 GB (free)</li>
                                        <li><i data-feather="check"></i> free domain</li>
                                        <li><i data-feather="check"></i> hosting discounts</li>
                                        <li><i data-feather="check"></i> 150 GB Bandwidth</li>
                                        <li><i data-feather="check"></i> 25 sub-domains</li>
                                        <li><i data-feather="check"></i> 20 database</li>
                                        <li><i data-feather="check"></i> 35 E-mail Accounts</li>
                                        <li><i data-feather="check"></i> 24/7 Support</li>
                                    </ul>
                                </div>                              
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-pricing-table">
                                <div className="pricing-header">
                                    <i className="flaticon-vps"></i>
                                    <h3>Vps Hosting</h3>
                                    <h3 style={{color:"#1bc1e1"}}>Gold Plan</h3>
                                </div>
                                
                                <div className="price">
                                    <span><sup>$</sup>120 <span>/y</span></span>
                                </div>                                
                                <div className="pricing-features">
                                    <ul>
                                        <li><i data-feather="check"></i> 3 GB + 3 GB (free)</li>
                                        <li><i data-feather="check"></i> free domain</li>
                                        <li><i data-feather="check"></i> hosting discounts</li>
                                        <li><i data-feather="check"></i> 200 GB Bandwidth</li>
                                        <li><i data-feather="check"></i> 30 sub-domains</li>
                                        <li><i data-feather="check"></i> 30 database</li>
                                        <li><i data-feather="check"></i> 40 E-mail Accounts</li>
                                        <li><i data-feather="check"></i> 24/7 Support</li>
                                    </ul>
                                </div>                              
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="shape8 rotateme">
                    <img src="/images/shape2.png" alt="shape" />
                </div>
                <div className="shape2 rotateme">
                    <img src="/images/shape2.png" alt="shape" />
                </div>
            </div>
        </>
    );
}

export default PricingStyleTwo;
