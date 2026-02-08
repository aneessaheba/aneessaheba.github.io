# Anees Saheba Guddi - Portfolio Website

A modern, one-page portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. Features smooth scroll animations, an AI chatbot assistant, and responsive design optimized for GitHub Pages deployment.

## 🚀 Features

- **One-Page Layout**: Smooth scrolling navigation between sections
- **AI Chatbot Assistant**: Portfolio-specific chatbot that answers questions using a local knowledge base
- **Scroll Animations**: Staggered reveal animations powered by Framer Motion
- **Responsive Design**: Mobile-friendly with hamburger menu
- **Modern UI**: Dark theme with glass morphism effects and gradient accents
- **GitHub & LeetCode Stats**: Live statistics widgets
- **Fast Performance**: Optimized with Vite for quick load times

## 📁 Project Structure
```
portfolio/
├── public/
│   ├── knowledgeBase.json
│   ├── profile.jpg          # Add your profile photo here
│   └── resume.pdf           # Add your resume here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Chatbot.jsx
│   │   └── BackToTop.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   ├── Stats.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   ├── personalInfo.js
│   │   ├── skills.js
│   │   ├── projects.js
│   │   ├── experience.js
│   │   └── education.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
└── [config files]
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git

### Local Development

1. **Clone the repository:**
```bash
   git clone https://github.com/aneessaheba/aneessaheba.github.io.git
   cd aneessaheba.github.io
```

2. **Install dependencies:**
```bash
   npm install
```

3. **Add your files:**
   - Add your profile photo as `public/profile.jpg`
   - Add your resume as `public/resume.pdf`

4. **Run the development server:**
```bash
   npm run dev
```
   
   The site will be available at `http://localhost:5173`

## 📦 Build for Production

To create a production build:
```bash
npm run build
```

The optimized files will be in the `dist` folder.

To preview the production build locally:
```bash
npm run preview
```

## 🚀 Deploy to GitHub Pages

### Option 1: Manual Deployment

1. **Build the project:**
```bash
   npm run build
```

2. **Deploy using gh-pages:**
```bash
   npm run deploy
```

### Option 2: GitHub Actions (Recommended)

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically deploys on every push to main/master.

**Setup:**
1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Under "Build and deployment", select "GitHub Actions" as the source
4. The workflow will automatically deploy on every push

### Important: Update Base URL

If your repository name is NOT `aneessaheba.github.io`, update `vite.config.js`:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/', // Change this to your repo name
})
```

For `aneessaheba.github.io`, keep `base: '/'`

## 🤖 Chatbot Knowledge Base

The chatbot uses `public/knowledgeBase.json` to answer questions. It includes:
- Personal information
- Education details
- Work experience
- Projects
- Skills
- FAQ

To update the chatbot's knowledge, edit `public/knowledgeBase.json`.

### Example Questions:
- "What is Anees currently working on?"
- "Tell me about her HP experience"
- "Which projects use LangChain?"
- "What is her education and GPA?"
- "What are her main skills?"

## 🎨 Customization

### Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  'primary': '#6366f1',
  'secondary': '#8b5cf6',
  'accent': '#ec4899',
}
```

### Content
Update content in data files (`src/data/`) or directly in component files.

### Fonts
Update in `index.html` and `tailwind.config.js`.

## 📝 Adding Your Files

### Profile Photo
1. Add your photo as `public/profile.jpg`
2. Recommended size: 512x512px or larger (square)
3. Formats: JPG, PNG, WebP

### Resume
1. Add your resume as `public/resume.pdf`
2. The "Resume" button will open this file

## 🔧 Troubleshooting

### Build Fails
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Images Not Loading
- Ensure files are in `public/` folder
- File names are case-sensitive
- Check browser console for errors

### GitHub Pages 404
- Verify `base` in `vite.config.js`
- Wait 5-10 minutes after deployment
- Check GitHub Actions tab for build status

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [GitHub Readme Stats](https://github.com/anuraghazra/github-readme-stats)
- [LeetCard](https://github.com/JacobLinCool/LeetCode-Stats-Card)

## 📧 Contact

Anees Saheba Guddi
- Email: aneessaheba.guddi@sjsu.edu
- LinkedIn: [Anees Saheba Guddi](https://www.linkedin.com/in/anees-saheba-guddi-215a97248/)
- GitHub: [@aneessaheba](https://github.com/aneessaheba)

---

Made with ❤️ by Anees Saheba Guddi