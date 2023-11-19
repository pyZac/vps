import React from 'react';
import * as Icon from 'react-feather';
import Link from 'next/link';

const TopFeatures = () => {
    return (
        <>
            <div className="boxes-area hosting-boxes-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-box">
                                <div className="icon">
                                    <Icon.DollarSign />
                                </div>
                                <h3>
                                    <Link href="#">
                                        Money-back Guarantee
                                    </Link>
                                </h3>
                                <p>You can try our services risk-free, knowing that you can get a refund if you're not completely satisfied.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-box bg-f78acb">
                                <div className="icon">
                                    <Icon.Database />
                                </div>
                                <h3>
                                    <Link href="#">
                                        Big Data Transfer
                                    </Link>
                                </h3>
                                <p>We provide robust infrastructure and high-speed networks to handle the demands of Big Data Transfer.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-box bg-c679e3">
                                <div className="icon">
                                    <Icon.BarChart />
                                </div>
                                <h3>
                                    <Link href="#">
                                        99.9% Server Uptime
                                    </Link>
                                </h3>
                                <p>Our hosting and web design services offer a rock-solid 99.9% Server Uptime guarantee.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-box bg-eb6b3d">
                                <div className="icon">
                                    <Icon.Tablet />
                                </div>
                                <h3>
                                    <Link href="#">
                                        Live 24/7 Support
                                    </Link>
                                </h3>
                                <p>Our experts will evaluate your web hosting needs as you grow to maximize your hosting experience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TopFeatures;
