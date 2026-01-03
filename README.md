# Miami Co-Living Deals 🏠

A modern, high-performance landing page for Miami co-living real estate investment opportunities. Built with React, TypeScript, and Tailwind CSS, featuring stunning animations and a premium user experience.

![Miami Co-Living Deals](https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

## ✨ Features

- **Modern Design**: Premium UI with glassmorphism effects, smooth animations, and responsive layouts
- **Performance Optimized**: Built with Vite for lightning-fast development and optimized production builds
- **Fully Responsive**: Seamless experience across desktop, tablet, and mobile devices
- **Interactive Components**: Engaging animations using Framer Motion
- **SEO Ready**: Comprehensive meta tags for search engines and social media
- **TypeScript**: Type-safe code for better development experience and fewer bugs
- **Accessible**: WCAG compliant with proper ARIA labels and semantic HTML

## 🚀 Tech Stack

- **Framework**: React 19.2.3
- **Language**: TypeScript 5.8.2
- **Build Tool**: Vite 6.2.0
- **Styling**: Tailwind CSS 3.x (via CDN)
- **Animations**: Framer Motion 12.23.26
- **Icons**: Lucide React 0.562.0
- **Fonts**: Inter & Playfair Display (Google Fonts)

## 📋 Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dicasys/miamicolivingdeals.com.git
   cd miamicolivingdeals.com
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` directory.

To preview the production build locally:
```bash
npm run preview
```

## 🌐 Deployment

This project can be easily deployed to various platforms:

### Vercel (Recommended)
1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy!

### Netlify
1. Push your code to GitHub
2. Import the repository in [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Configure environment variables
6. Deploy!

### Other Platforms
The project is compatible with any static hosting service that supports Node.js builds (GitHub Pages, Cloudflare Pages, AWS S3, etc.)

## 📁 Project Structure

```
miami-co-living-deals/
├── components/           # React components
│   ├── ui/              # Reusable UI components
│   │   ├── Button.tsx
│   │   └── SectionHeading.tsx
│   ├── Hero.tsx
│   ├── NavBar.tsx
│   ├── WhyColiving.tsx
│   ├── AnalogySection.tsx
│   ├── FloorplanSection.tsx
│   ├── DemographicsSection.tsx
│   ├── FinancingSection.tsx
│   ├── ProcessSection.tsx
│   ├── Testimonials.tsx
│   ├── CTASection.tsx
│   └── Footer.tsx
├── App.tsx              # Main application component
├── index.tsx            # Application entry point
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies

```

## 🎨 Customization

### Colors
The brand colors are defined in `index.html` using Tailwind's configuration:
- **Dark Background**: `#0f172a` (Slate 900)
- **Gold Accent**: `#fbbf24` (Amber 400)
- **Surface**: `#1e293b` (Slate 800)

### Fonts
- **Sans-serif**: Inter (body text)
- **Serif**: Playfair Display (headings)

### Content
Update the content in individual component files located in the `components/` directory.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

For questions or inquiries about Miami co-living investment opportunities, please visit our website or contact us through the form on the landing page.

## 🙏 Acknowledgments

- Images from [Unsplash](https://unsplash.com)
- Icons from [Lucide](https://lucide.dev)
- Fonts from [Google Fonts](https://fonts.google.com)

---

**Built with ❤️ for high-yield real estate investors**
