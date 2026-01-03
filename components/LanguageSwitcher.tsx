
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { Globe } from 'lucide-react';

export const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();


    const currentLang = i18n.language;

    const toggleLanguage = () => {
        const newLang = currentLang === 'en' ? 'es' : 'en';

        // Replace the language segment in the URL
        // Assuming URL structure is /:lang/...
        const pathSegments = location.pathname.split('/').filter(Boolean);

        if (pathSegments[0] === 'en' || pathSegments[0] === 'es') {
            pathSegments[0] = newLang;
        } else {
            pathSegments.unshift(newLang);
        }

        const newPath = `/${pathSegments.join('/')}${location.hash}`;
        navigate(newPath);
    };

    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors border border-white/20 rounded-full px-3 py-1.5 text-sm"
        >
            <Globe className="w-4 h-4" />
            <span className="uppercase">{currentLang === 'en' ? 'Español' : 'English'}</span>
        </button>
    );
};
