import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const MainBanner = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className="hosting-main-banner">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12">
                                    <div className="hosting-banner-content">
                                        <h1>{t('bestHosting')}</h1>
                                        <ul>
                                            <li>{t('freeDomain')}</li>
                                            <li>{t('freeSLL')}</li>
                                            <li>{t('Wordpress')}</li>
                                            <li>{t('Supports')}</li>
                                        </ul>

                                        <p>{t('startingAt')} <spam>$15/{t('year')} </spam>   {t('insteadOf')}<span>$25</span></p>

                                        {/* Add Telegram Button */}
                                        <div className="telegram-btn-container">
                                            <Link href="https://t.me/itzzacbot" passHref>
                                                <a className="btn telegram-btn">{t('chatWithBot')}</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6 col-md-12">
                                    <div className="hosting-banner-image">
                                        <img 
                                            src="/images/hosting-banner-image/hosting-shape1.png" 
                                            className="animate__animated animate__fadeInDown animate__delay-0.7s"
                                            alt="image" 
                                        /> 

                                        <img 
                                            src="/images/hosting-banner-image/hosting-shape2.png" 
                                            className="animate__animated animate__fadeInDown animate__delay-0.7s" 
                                            alt="image"
                                        />
                                
                                        <img 
                                            src="/images/hosting-banner-image/hosting-shape3.png" 
                                            className="animate__animated animate__fadeInDown animate__delay-0.7s" 
                                            alt="image"
                                        />
                                
                                        <img 
                                            src="/images/hosting-banner-image/hosting-shape4.png" 
                                            className="animate__animated animate__fadeInDown animate__delay-0.7s" 
                                            alt="image"
                                        />
                                
                                        <img 
                                            src="/images/hosting-banner-image/hosting-shape5.png" 
                                            className="animate__animated animate__fadeInDown animate__delay-0.7s" 
                                            alt="image"
                                        />
                            
                                        <img 
                                            src="/images/hosting-banner-image/hosting-shape6.png" 
                                            className="animate__animated animate__fadeInDown animate__delay-0.7s" 
                                            alt="image"
                                        />
                                
                                        <img 
                                            src="/images/hosting-banner-image/hosting-shape7.png" 
                                            className="animate__animated animate__fadeInDown animate__delay-0.7s" 
                                            alt="image"
                                        />
                                
                                        <img 
                                            src="/images/hosting-banner-image/hosting-shape8.png" 
                                            className="animate__animated animate__fadeInDown animate__delay-0.7s" 
                                            alt="image"
                                        />
                            
                                        <img 
                                            src="/images/hosting-banner-image/hosting-shape9.png" 
                                            className="animate__animated animate__fadeInDown animate__delay-0.7s" 
                                            alt="image"
                                        />
                            
                                        <img 
                                            src="/images/hosting-banner-image/hosting-static-main.png" 
                                            className="animate__animated animate__fadeInUp animate__delay-0.7s" 
                                            alt="image"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Shape Images */}
                <div className="shape1"><img src="/images/shape1_0.png" alt="shape" /></div>
            </div>
        </>
    );
}

export default MainBanner;
