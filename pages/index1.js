import React,{ useEffect } from  'react';
import { useRouter } from 'next/router';

const Index = () => {
    const router = useRouter();
    useEffect(() => {
        const timeout = setTimeout(() => {
          router.push('/'); 
        }, 10000); 
    
        return () => clearTimeout(timeout);
      }, []);
    return (
        <div >
            <div>
                <div className="shape1Onle">
                    <img src="/images/shapeHome.png" alt="shape" />                
                </div> 
            </div>          
        </div>
       
    )
}

export default Index;