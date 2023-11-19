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


const Hosting = () => {
    const [showFirstCode, setShowFirstCode] = useState(true);

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
              <PageBanner pageTitle="Our Projects" />
              <div className="ml-projects-area pt-80 pb-50">
                {/* Rest of the code */}
              </div>
              <FeedbackStyleTwo />
              <Footer />
            </>
          )}
        </>
    );
}

export default Hosting;