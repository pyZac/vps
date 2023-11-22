import React from 'react';
import { useTranslation } from 'react-i18next';

const WhyChoose = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className="why-choose-us ptb-80 pt-0">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="section-title1">
                                <h2>{t('whyChooseUs')}</h2>
                                <div className="bar"></div>
                                <p>{t('whyChooseUsSent')}</p>
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
                                        <h3>{t('Proficient&Friendly')}</h3>
                                        <p>{t('Proficient&FriendlySent')}</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-why-choose-us">
                                        <div className="icon">
                                            <i className="flaticon-rocket"></i>
                                        </div>
                                        <h3>{t('ExtremelyFast')}</h3>
                                        <p>{t('ExtremelyFastSent')}</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-why-choose-us">
                                        <div className="icon">
                                            <i className="flaticon-shield"></i>
                                        </div>
                                        <h3>{t('Safe&Security')}</h3>
                                        <p>{t('Safe&SecuritySent')}</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-why-choose-us">
                                        <div className="icon">
                                            <i className="flaticon-diamond"></i>
                                        </div>
                                        <h3>{t('TopRated')}</h3>
                                        <p>{t('TopRatedSent')}</p>
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
