import React from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next';

const Partner = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className="ready-to-talk">
                
                
            </div>

            <div className="partner-area partner-section">
                <div className="container">
                    <h5>{t('laestTools')}</h5>

                    <div className="partner-inner">
                        <div className="row justify-content-center">   
                            <div className="col-lg-2 col-md-3 col-6">
                                <a href="#" target="_balnk">
                                    <img src="/images/partner-img/partner-6.png" alt="partner" />
                                    <img src="/images/partner-img/partner-hover6.png" alt="partner" />
                                </a>
                            </div>                  

                            <div className="col-lg-2 col-md-3 col-6">
                                <a href="#" target="_balnk">
                                    <img src="/images/partner-img/partner-3.png" style={{width:"65%"}} alt="partner" />
                                    <img src="/images/partner-img/partner-hover3.png" style={{width:"65%"}} alt="partner" />
                                </a>
                            </div>

                            <div className="col-lg-2 col-md-3 col-6">
                                <a href="#" target="_balnk">
                                    <img src="/images/partner-img/partner-4.png" style={{width:"40%"}} alt="partner" />
                                    <img src="/images/partner-img/partner-hover4.png" style={{width:"40%"}} alt="partner" />
                                </a>
                            </div>

                            <div className="col-lg-2 col-md-3 col-6">
                                <a href="#" target="_balnk">
                                    <img src="/images/partner-img/partner-5.png" alt="partner" />
                                    <img src="/images/partner-img/partner-hover5.png" alt="partner" />
                                </a>
                            </div>   
                            <div className="col-lg-2 col-md-3 col-6">
                                <a href="#" target="_balnk">
                                    <img src="/images/partner-img/partner-7.png" alt="partner" />
                                    <img src="/images/partner-img/partner-hover7.png" alt="partner" />
                                </a>
                            </div>



                            <div className="col-lg-2 col-md-3 col-6">
                                <a href="#" target="_balnk">
                                    <img src="/images/partner-img/partner-2.png" alt="partner" />
                                    <img src="/images/partner-img/partner-hover2.png" alt="partner" />
                                </a>
                            </div>                        
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
 
}

export default Partner;  