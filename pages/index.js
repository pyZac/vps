import React, { useEffect, useState } from 'react';
import NavbarStyleTwo from "@/components/_App/NavbarStyleTwo";
import MainBanner from "@/components/Hosting/MainBanner";
import TopFeatures from '@/components/Hosting/TopFeatures';
import WhyChoose from '@/components/Hosting/WhyChoose';
import PricingStyleTwo from '@/components/PricingPlans/PricingStyleTwo';
import FeedbackStyleTwo from '@/components/Common/FeedbackStyleTwo';
import Partner from "@/components/Common/Partner";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner'; 
import Link from 'next/link';
import { useTranslation } from 'react-i18next';


const Hosting = () => {
    const [showFirstCode, setShowFirstCode] = useState(true);
    const { t } = useTranslation();

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowFirstCode(false);
      }, 5000);
  
      return () => clearTimeout(timer);
    }, []);

    

    return (
        <>
          {showFirstCode ? (
            <div>
              <div>
                <div className="shape1Onle">
                  <img src="/images/shape2.png" alt="shape" />
                </div>
                <div className="shape-text">
                  <img src="/images/shapeHome.png" alt="shape" />
                </div>
              </div>
            </div>
          ) : (
            <>
              <NavbarStyleTwo />
              <MainBanner />
              <TopFeatures />
              <WhyChoose />
              <PricingStyleTwo />
              <div className="pb-80">
                <Partner />
              </div>
              <PageBanner pageTitle={t('OurProjects')} />
              <div className="ml-projects-area pt-80 pb-50">
                  <div className="container-fluid">
                    <div className="row justify-content-center">
                      <div className="col-lg-3 col-sm-6 col-md-6">
                          <div className="single-ml-projects-box">
                              <img src="/images/project1.png" alt="image" />

                              <div className="plus-icon">
                                  <Link href="https://www.6figure-earner.world/">
                                      <span></span>
                                  </Link>
                              </div>
                          </div>
                      </div>

                      <div className="col-lg-3 col-sm-6 col-md-6">
                          <div className="single-ml-projects-box">
                              <img src="/images/project2.png" alt="image" />

                              <div className="plus-icon">
                                  <Link href="https://it-homs.com/ALFARAHEDU/">
                                      <span></span>
                                  </Link>
                              </div>
                          </div>
                      </div>

                      <div className="col-lg-3 col-sm-6 col-md-6">
                          <div className="single-ml-projects-box">
                              <img src="/images/projec3.png" alt="image" />

                              <div className="plus-icon">
                                  <Link href="https://details-homs.com/">
                                      <span></span>
                                  </Link>
                              </div>
                          </div>
                      </div>

                      <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-ml-projects-box">
                            <img src="/images/project4.png" alt="image" />

                            <div className="plus-icon">
                                <Link href="https://fgstraining.net/">
                                    <span></span>
                                </Link>
                            </div>
                        </div>
                      </div>


                    </div>
                  </div>
                </div>
              {/* <FeedbackStyleTwo /> */}
              <Footer />
            </>
          )}
        </>
    );
}

export default Hosting;