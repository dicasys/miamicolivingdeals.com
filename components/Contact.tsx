import { useState } from 'react';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const Contact = () => {
    const { t } = useTranslation();
    const [isSuccess, setIsSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        setErrorMessage("");

        // Create FormData object from the form
        const formData = new FormData(event.currentTarget);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setIsSuccess(true);
                // Reset the form
                event.currentTarget.reset();
            } else {
                console.error("Error submitting form", data);
                setIsSuccess(false);
                setErrorMessage(data.message || t('contact.form.error'));
            }
        } catch (error) {
            console.error("Error submitting form", error);
            setIsSuccess(false);
            setErrorMessage(t('contact.form.connectionError'));
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="pt-20">
            {/* Contact Hero Section */}
            <section className="relative py-20 bg-brand-surface overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/10 backdrop-blur-sm">
                            <span className="text-brand-gold text-xs font-bold tracking-widest uppercase">{t('contact.subtitle')}</span>
                        </div>
                        <h1 className="font-serif text-4xl md:text-6xl font-medium text-white mb-6">
                            {t('contact.title')}
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                            {t('contact.description')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-24 bg-brand-dark">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="bg-brand-surface p-8 md:p-10 rounded-2xl border border-white/10 shadow-2xl relative"
                        >
                            <h3 className="font-serif text-2xl text-white mb-6 text-center">{t('contact.form.title')}</h3>

                            <form onSubmit={onSubmit} className="space-y-6">
                                {/* Web3Forms Access Key */}
                                <input type="hidden" name="access_key" value="d5a5092d-3cb7-49fd-bf2d-5700c5f870cf" />

                                {/* From Name for Email Subject */}
                                <input type="hidden" name="from_name" value="Miami Coliving Deals" />

                                {/* Redirect Fallback */}
                                <input type="hidden" name="redirect" value="https://miamicolivingdeals.com/thanks.html" />

                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-slate-300">{t('contact.form.labels.name')}</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                                        placeholder={t('contact.form.placeholders.name')}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-slate-300">{t('contact.form.labels.email')}</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                                        placeholder={t('contact.form.placeholders.email')}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium text-slate-300">{t('contact.form.labels.subject')}</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        required
                                        className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                                        placeholder={t('contact.form.placeholders.subject')}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-slate-300">{t('contact.form.labels.message')}</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        required
                                        className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors resize-none"
                                        placeholder={t('contact.form.placeholders.message')}
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full relative px-8 py-4 rounded-md font-semibold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden group bg-brand-gold text-brand-dark hover:bg-white hover:text-brand-dark shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_30px_rgba(251,191,36,0.6)] disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>
                                    <span className="relative z-10 flex items-center gap-2">
                                        {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')} <Send className="w-4 h-4" />
                                    </span>
                                </button>
                            </form>

                            {isSuccess && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mt-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-200 text-center font-medium"
                                >
                                    {t('contact.form.success')}
                                </motion.div>
                            )}

                            {errorMessage && !isSuccess && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mt-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-center font-medium"
                                >
                                    {errorMessage}
                                </motion.div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};
