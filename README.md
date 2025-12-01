# Sudipta Chakraborty - Portfolio Website

A modern, responsive portfolio website built with React, Vite, and TailwindCSS, showcasing professional experience, skills, projects, and credentials.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations using Framer Motion
- **Dark/Light Mode**: Toggle between dark and light themes with persistent preference
- **Fully Responsive**: Optimized for all device sizes (mobile, tablet, desktop)
- **SEO Optimized**: Meta tags and semantic HTML for better search engine visibility
- **Fast Performance**: Built with Vite for lightning-fast development and optimized production builds
- **Interactive Sections**:
  - Hero section with animated typewriter effect
  - About section with professional photo and achievement stats
  - Skills section with interactive progress bars
  - Projects showcase with hover effects
  - Experience timeline
  - Credentials & certifications display
  - Contact form
  - Social media links

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: TailwindCSS 3
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Smooth Scrolling**: React Scroll
- **Typewriter Effect**: React Simple Typewriter

## 📦 Installation

1. Clone the repository or navigate to the project directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

## 🏃‍♂️ Running Locally

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173` (or another port if 5173 is in use).

## 🏗️ Building for Production

Create an optimized production build:
```bash
npm run build
```

The build output will be in the `dist/` directory.

Preview the production build locally:
```bash
npm run preview
```

## 🚀 Deployment to Vercel

### Method 1: Using Vercel CLI

1. Install Vercel CLI globally:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. For production deployment:
```bash
vercel --prod
```

### Method 2: Using Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite and configure build settings
6. Click "Deploy"

### Build Settings (Auto-detected by Vercel)
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## 📁 Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── assets/
│   │   └── images/     # Profile photos and images
│   ├── components/     # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Credentials.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── resume.js   # Resume data
│   ├── hooks/
│   │   └── useDarkMode.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🎨 Customization

### Update Personal Information

Edit `src/data/resume.js` to update:
- Personal details (name, title, contact info)
- Skills and proficiency levels
- Work experience
- Projects
- Education
- Social media links

### Change Colors

Edit `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  primary: "#0ea5e9",    // Main accent color
  secondary: "#6366f1",  // Secondary accent color
  dark: "#0f172a",       // Dark mode background
}
```

### Add/Remove Sections

Modify `src/App.jsx` to add or remove sections from the portfolio.

## 📧 Contact Form Setup

The contact form currently uses a placeholder action. To make it functional:

1. **Option 1 - EmailJS**:
   - Sign up at [emailjs.com](https://www.emailjs.com/)
   - Get your service ID, template ID, and public key
   - Update the Contact component with EmailJS integration

2. **Option 2 - Getform.io**:
   - Sign up at [getform.io](https://getform.io/)
   - Create a form and get your endpoint
   - Update the form action in `src/components/Contact.jsx`

3. **Option 3 - Formspree**:
   - Sign up at [formspree.io](https://formspree.io/)
   - Get your form endpoint
   - Update the form action in `src/components/Contact.jsx`

## 🌐 Environment Variables

If you need environment variables (e.g., for API keys), create a `.env` file:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Access them in your code with `import.meta.env.VITE_*`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available for personal use.

## 👤 Author

**Sudipta Chakraborty**
- LinkedIn: [linkedin.com/in/chakrabortysudipta](https://linkedin.com/in/chakrabortysudipta)
- Email: sudipta89chakraborty@gmail.com

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Styled with [TailwindCSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
