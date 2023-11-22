import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const PricingStyleTwo = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className="pricing-area pt-80 pb-50 bg-f7fafd">
                <div className="container">
                    <div className="section-title">
                        <h2>{t('ChoosePlan')}</h2>
                        <div className="bar"></div>
                        <p>{t('ChoosePlanSent')}</p>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-pricing-table">
                                <div className="pricing-header">
                                    <i className="flaticon-vps"></i>
                                    <h3>{t('SharedHosting')}</h3>
                                    <h3 style={{color:"#1bc1e1"}}>{t('alwaysWitYou')}</h3>
                                </div>
                                
                                <div className="price">
                                    <span><sup>$</sup>15.00<span>/{t('y')}</span></span>
                                </div>                                
                                <div className="pricing-features">
                                    <ul>
                                        <li><i data-feather="check"></i> 150 MB + 150 MB (free)</li>
                                        <li><i data-feather="check"></i> {t('FreeDomain')}</li>
                                        <li><i data-feather="check"></i> {t('Discount')}</li>
                                        <li><i data-feather="check"></i> 3 GB {t('Bandwidth')}</li>
                                        <li><i data-feather="check"></i> 2 {t('subDomains')}</li>
                                        <li><i data-feather="check"></i> 1 {t('database')}</li>
                                        <li><i data-feather="check"></i> 5 {t('mailAccounts')}</li>
                                        <li><i data-feather="check"></i> 24/7 {t('Support')}</li>
                                    </ul>
                                </div>                              
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-pricing-table">
                                <div className="pricing-header">
                                    <i className="flaticon-vps"></i>
                                    <h3>{t('SharedHosting')}</h3>
                                    <h3 style={{color:"#1bc1e1"}}>{t('StartUp')}</h3>
                                </div>
                                
                                <div className="price">
                                    <span><sup>$</sup>22.5<span>/{t('y')}</span></span>
                                </div>                                
                                <div className="pricing-features">
                                    <ul>
                                        <li><i data-feather="check"></i> 250 MB + 250 MB (free)</li>
                                        <li><i data-feather="check"></i> {t('FreeDomain')}</li>
                                        <li><i data-feather="check"></i> {t('Discount')}</li>
                                        <li><i data-feather="check"></i> 10 GB {t('Bandwidth')}</li>
                                        <li><i data-feather="check"></i> 5 {t('subDomains')}</li>
                                        <li><i data-feather="check"></i> 5 {t('database')}</li>
                                        <li><i data-feather="check"></i> 10 {t('mailAccounts')}</li>
                                        <li><i data-feather="check"></i> 24/7 {t('Support')}</li>
                                    </ul>
                                </div>                              
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-pricing-table">
                                <div className="pricing-header">
                                    <i className="flaticon-vps"></i>
                                    <h3>{t('SharedHosting')} </h3>
                                    <h3 style={{color:"#1bc1e1"}}>{t('Basic')}</h3>
                                </div>
                                
                                <div className="price">
                                    <span><sup>$</sup>32.5 <span>/{t('y')}</span></span>
                                </div>                                
                                <div className="pricing-features">
                                    <ul>
                                        <li><i data-feather="check"></i> 500 MB + 500 MB (free)</li>
                                        <li><i data-feather="check"></i> {t('FreeDomain')}</li>
                                        <li><i data-feather="check"></i> {t('Discount')}</li>
                                        <li><i data-feather="check"></i> 30 GB {t('Bandwidth')}</li>
                                        <li><i data-feather="check"></i> 10 {t('subDomains')}</li>
                                        <li><i data-feather="check"></i> 10 {t('database')}</li>
                                        <li><i data-feather="check"></i> 20 {t('mailAccounts')}</li>
                                        <li><i data-feather="check"></i> 24/7 {t('Support')}</li>
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
                                    <h3>{t('SharedHosting')}</h3>
                                    <h3 style={{color:"#1bc1e1"}}>{t('Bronze')}</h3>
                                </div>
                                
                                <div className="price">
                                    <span><sup>$</sup>55.00<span>/{t('y')}</span></span>
                                </div>                                
                                <div className="pricing-features">
                                    <ul>
                                        <li><i data-feather="check"></i> 1 GB + 1 GB (free)</li>
                                        <li><i data-feather="check"></i> {t('FreeDomain')}</li>
                                        <li><i data-feather="check"></i> {t('Discount')}</li>
                                        <li><i data-feather="check"></i> 150 GB {t('Bandwidth')}</li>
                                        <li><i data-feather="check"></i> 20 {t('subDomains')}</li>
                                        <li><i data-feather="check"></i> 15 {t('database')}</li>
                                        <li><i data-feather="check"></i> 30 {t('mailAccounts')}</li>
                                        <li><i data-feather="check"></i> 24/7 {t('Support')}</li>
                                    </ul>
                                </div>                              
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-pricing-table">
                                <div className="pricing-header">
                                    <i className="flaticon-vps"></i>
                                    <h3>{t('SharedHosting')}</h3>
                                    <h3 style={{color:"#1bc1e1"}}>{t('Silver')}</h3>
                                </div>
                                
                                <div className="price">
                                    <span><sup>$</sup>90.00<span>/{t('y')}</span></span>
                                </div>                                
                                <div className="pricing-features">
                                    <ul>
                                        <li><i data-feather="check"></i> 2 GB + 2 GB (free)</li>
                                        <li><i data-feather="check"></i> {t('FreeDomain')}</li>
                                        <li><i data-feather="check"></i> {t('Discount')}</li>
                                        <li><i data-feather="check"></i> 150 GB {t('Bandwidth')}</li>
                                        <li><i data-feather="check"></i> 25 {t('subDomains')}</li>
                                        <li><i data-feather="check"></i> 20 {t('database')}</li>
                                        <li><i data-feather="check"></i> 35 {t('mailAccounts')}</li>
                                        <li><i data-feather="check"></i> 24/7 {t('Support')}</li>
                                    </ul>
                                </div>                              
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-pricing-table">
                                <div className="pricing-header">
                                    <i className="flaticon-vps"></i>
                                    <h3>{t('SharedHosting')}</h3>
                                    <h3 style={{color:"#1bc1e1"}}>{t('Gold')}</h3>
                                </div>
                                
                                <div className="price">
                                    <span><sup>$</sup>120 <span>/{t('y')}</span></span>
                                </div>                                
                                <div className="pricing-features">
                                    <ul>
                                        <li><i data-feather="check"></i> 3 GB + 3 GB (free)</li>
                                        <li><i data-feather="check"></i> {t('FreeDomain')}</li>
                                        <li><i data-feather="check"></i> {t('Discount')}</li>
                                        <li><i data-feather="check"></i> 200 GB {t('Bandwidth')}</li>
                                        <li><i data-feather="check"></i> 30 {t('subDomains')}</li>
                                        <li><i data-feather="check"></i> 30 {t('database')}</li>
                                        <li><i data-feather="check"></i> 40 {t('mailAccounts')}</li>
                                        <li><i data-feather="check"></i> 24/7 {t('Support')}</li>
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
