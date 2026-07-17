"use client"
import React from 'react';
import { motion } from 'framer-motion';
import {
    FiLayout,
    FiBriefcase,
    FiShoppingCart,
    FiFileText,
} from 'react-icons/fi';
import { useTranslations } from 'next-intl';

// Components
const SectionTitle = ({ title, subtitle }) => (
    <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">{title}</h2>
        {subtitle && <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
);

const ServicesGrid = ({ services }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s, i) => (
            <motion.div
                key={i}
                className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition border border-gray-100"
                whileHover={{ scale: 1.03 }}
            >
                <div className="mb-4">{s.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-3">{s.desc}</p>
                <p className="text-sm text-emerald-600 font-medium">
                    ✓ {s.bestFor}
                </p>
            </motion.div>
        ))}
    </div>
);

export default function Services() {
    const t = useTranslations('ServicesPage');
    
    const rawServices = t.raw('services');
    const icons = [
        <FiLayout key="1" className="w-10 h-10 text-emerald-600" />,
        <FiBriefcase key="2" className="w-10 h-10 text-emerald-600" />,
        <FiShoppingCart key="3" className="w-10 h-10 text-emerald-600" />,
        <FiFileText key="4" className="w-10 h-10 text-emerald-600" />
    ];
    const services = rawServices.map((s, i) => ({ ...s, icon: icons[i] }));

    const pricingPackages = t.raw('pricingPackages');
    const rawAddOns = t.raw('addOnServices');
    const addOnIcons = ['✍️', '📸', '🔧', '📈'];
    const addOnServices = rawAddOns.map((a, i) => ({ ...a, icon: addOnIcons[i] }));
    const standardFeatures = t.raw('standardFeatures');
    const notIncluded = t.raw('notIncluded');
    const processSteps = t.raw('processSteps');
    const faqs = t.raw('faqs');

    return (
        <div className="space-y-24 pt-20">
            {/* Header */}
            <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <SectionTitle 
                    title={t('headerTitle')} 
                    subtitle={t('headerSubtitle')} 
                />
                <ServicesGrid services={services} />
            </section>

            {/* Pricing Packages */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4">
                    <SectionTitle 
                        title={t('pricingTitle')} 
                        subtitle={t('pricingSubtitle')} 
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {pricingPackages.map((plan, idx) => (
                            <motion.div
                                key={idx}
                                className={`relative bg-white rounded-2xl shadow-lg p-6 flex flex-col hover:shadow-xl transition border-2 ${
                                    plan.badge ? 'border-emerald-500' : 'border-gray-100'
                                }`}
                                whileHover={{ y: -5 }}
                            >
                                {/* Badge */}
                                {plan.badge && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-emerald-600 text-white text-xs font-semibold px-4 py-1 rounded-full whitespace-nowrap">
                                        {plan.badge}
                                    </div>
                                )}
                                
                                {/* Header */}
                                <div className="text-center mb-6 mt-4">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-1">{plan.name}</h3>
                                    <p className="text-sm text-emerald-600 font-medium mb-3">{plan.subtitle}</p>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{plan.description}</p>
                                    
                                    {/* Price */}
                                    <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-lg p-4">
                                        {plan.strikePrice && (
                                            <div className="text-sm text-gray-500 line-through mb-1">{plan.strikePrice}</div>
                                        )}
                                        <div className="text-3xl font-bold text-emerald-700">{plan.price}</div>
                                        <div className="text-gray-600 text-xs mt-1">Timeline: {plan.timeline}</div>
                                    </div>
                                </div>

                                {/* Features */}
                                <ul className="flex-1 space-y-2 text-gray-700 mb-4">
                                    {plan.features.map((f, i) => (
                                        <li key={i} className="flex items-start text-sm">
                                            <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                                            </svg>
                                            <span className="ml-2 leading-snug">{f}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Limitations (untuk Paket Express) */}
                                {plan.limitations && (
                                    <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                                        <p className="text-xs font-semibold text-amber-800 mb-2">{t('notePrefix')}</p>
                                        {plan.limitations.map((l, i) => (
                                            <p key={i} className="text-xs text-amber-700 mb-1">• {l}</p>
                                        ))}
                                    </div>
                                )}

                                {/* Note */}
                                {plan.note && (
                                    <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                                        <p className="text-xs text-amber-800">{plan.note}</p>
                                    </div>
                                )}

                                {/* CTA Button */}
                                <a
                                    href={`https://wa.me/6289526323412?text=Halo%20Kelvin,%20saya%20tertarik%20dengan%20${plan.name}.%20Boleh%20diskusi%3F`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 rounded-lg transition"
                                >
                                    {t('selectPackage')}
                                </a>
                            </motion.div>
                        ))}
                    </div>

                    {/* Payment Info */}
                    <div className="mt-12 text-center space-y-3 bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
                        <p className="text-gray-700 font-semibold">
                            {t('paymentTitle')}
                        </p>
                        <div className="text-gray-600 space-y-1">
                            <p>{t('payment1')}</p>
                            <p>{t('payment2')}</p>
                            <p>{t('payment3')}</p>
                        </div>
                        <p className="text-sm text-gray-500 pt-2">
                            {t('paymentNote')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Add-On Services */}
            <section className="py-20 bg-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <SectionTitle 
                    title={t('addonTitle')} 
                    subtitle={t('addonSubtitle')} 
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {addOnServices.map((addon, i) => (
                        <motion.div
                            key={i}
                            className="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-xl shadow-md border border-emerald-100 hover:shadow-lg transition"
                            whileHover={{ scale: 1.03 }}
                        >
                            <div className="text-4xl mb-3">{addon.icon}</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{addon.title}</h3>
                            <p className="text-2xl font-bold text-emerald-600 mb-2">{addon.price}</p>
                            <p className="text-sm text-gray-600 mb-4">{addon.desc}</p>
                            <ul className="space-y-2">
                                {addon.features.map((f, idx) => (
                                    <li key={idx} className="flex items-start text-sm text-gray-700">
                                        <span className="text-emerald-500 mr-2">✓</span>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Standard Features */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-gray-50">
                <SectionTitle 
                    title={t('featuresTitle')} 
                    subtitle={t('featuresSubtitle')} 
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {standardFeatures.map((feature, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-3 p-4 rounded-lg bg-white border border-emerald-100 shadow-sm"
                        >
                            <span className="text-emerald-600 text-xl font-bold">✓</span>
                            <span className="text-gray-700 font-medium text-sm">{feature}</span>
                        </div>
                    ))}
                </div>

                {/* What's NOT Included */}
                <div className="mt-12 bg-amber-50 border-2 border-amber-200 rounded-xl p-6 max-w-3xl mx-auto">
                    <h3 className="text-xl font-bold text-amber-800 mb-4 flex items-center gap-2">
                        <span>⚠️</span> {t('notIncludedTitle')}
                    </h3>
                    <ul className="space-y-2">
                        {notIncluded.map((item, i) => (
                            <li key={i} className="flex items-start text-sm text-amber-900">
                                <span className="text-amber-600 mr-2">✗</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Process */}
            <section className="py-20 bg-white">
                <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <SectionTitle 
                        title={t('processTitle')} 
                        subtitle={t('processSubtitle')} 
                    />
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                        {processSteps.map((p) => (
                            <motion.div
                                key={p.step}
                                className="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition border border-emerald-100"
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="w-14 h-14 mx-auto bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold shadow-lg">
                                    {p.step}
                                </div>
                                <h4 className="text-lg font-semibold text-gray-800 mb-2">{p.title}</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <SectionTitle 
                    title={t('faqTitle')} 
                />
                <div className="space-y-6">
                    {faqs.map((faq, i) => (
                        <div key={i} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-emerald-200 transition">
                            <h4 className="font-semibold text-gray-800 mb-2">Q: {faq.q}</h4>
                            <p className="text-gray-600">A: {faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700">
                <div className="max-w-3xl mx-auto text-center px-4">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        {t('ctaTitle')}
                    </h2>
                    <p className="text-white/90 text-lg mb-8 leading-relaxed">
                        {t('ctaSubtitle')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a 
                            href="https://wa.me/6289526323412?text=Halo%20Kelvin,%20saya%20tertarik%20konsultasi%20tentang%20pembuatan%20website.%20Boleh%20diskusi%3F" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-white text-emerald-600 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition transform hover:scale-105"
                        >
                            {t('ctaChat')}
                        </a>
                        <a 
                            href="/portfolio" 
                            className="inline-block bg-emerald-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-emerald-400 transition"
                        >
                            {t('ctaPortfolio')}
                        </a>
                    </div>
                    <p className="mt-6 text-white/80 text-sm">
                        {t('ctaResp')}
                    </p>
                </div>
            </section>
        </div>
    );
}