import React from 'react';
import * as Icon from 'react-feather';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const TopFeatures = () => {
    const { t } = useTranslation();
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
                                        {t('moneyBack')}
                                    </Link>
                                </h3>
                                <p>{t('moneyBackSent')}</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-box bg-f78acb">
                                <div className="icon">
                                    <Icon.Database />
                                </div>
                                <h3>
                                    <Link href="#">
                                        {t('bigData')}
                                    </Link>
                                </h3>
                                <p>{t('bigDataSent')}</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-box bg-c679e3">
                                <div className="icon">
                                    <Icon.BarChart />
                                </div>
                                <h3>
                                    <Link href="#">
                                        {t('serverUptime')}
                                    </Link>
                                </h3>
                                <p>{t('serverUptimeSen')}</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-box bg-eb6b3d">
                                <div className="icon">
                                    <Icon.Tablet />
                                </div>
                                <h3>
                                    <Link href="#">
                                        {t('24Support')}
                                    </Link>
                                </h3>
                                <p>{t('24SupportSent')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TopFeatures;
