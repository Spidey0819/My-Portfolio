# Marvel-Themed Portfolio - Dhruv Goswami

![Portfolio Screenshot](/public/screenshot.png)

## Overview

A Marvel-themed personal portfolio website showcasing my projects, skills, and professional experience. Built with React, Vite, and Tailwind CSS, this interactive portfolio features a unique Marvel superhero aesthetic with themed sections and animations.

## 🚀 Features

- **Interactive Marvel UI**: Comic-inspired design elements and animations
- **Responsive Design**: Fully responsive on all devices
- **Project Showcase**: GitHub repository integration
- **Skills Visualization**: Interactive skill level indicators
- **Contact Form**: EmailJS integration for direct messaging
- **Smooth Transitions**: Page transitions with Marvel styling
- **Accessibility**: Screen reader friendly and keyboard navigable

## 🛠️ Technology Stack

- **Frontend**: React, JavaScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **Form Handling**: EmailJS
- **Deployment**: [Vercel]

## 📋 Sections

1. **Home**: Marvel-themed welcome screen
2. **S.H.I.E.L.D. Profile**: About me and education
3. **Mission Records**: Projects and GitHub repositories
4. **Power Stats**: Skills and technologies
5. **Stark Communications**: Contact form and information


## 🚀 Getting Started

### Prerequisites

- Node.js 14.x or higher
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/marvel-portfolio.git
   cd marvel-portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 📧 Setting Up Email Functionality

1. Create an account on [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Update the following in `Contact.jsx`:
   ```javascript
   const serviceID = 'YOUR_SERVICE_ID';
   const templateID = 'YOUR_TEMPLATE_ID';
   const publicKey = 'YOUR_PUBLIC_KEY';
   ```

## 🔄 CI/CD and Deployment

This project is configured for automatic deployment:

1. Push your changes to the main branch
2. The CI/CD pipeline will automatically build and deploy your site
3. Your site will be available at your chosen deployment platform

## 🎨 Customization

- **Colors**: Modify the Marvel theme colors in `tailwind.config.js`
- **Content**: Update your personal information in the component files
- **Projects**: Add your own projects in the `Projects.jsx` file
- **Skills**: Update your skills in the `Skills.jsx` file

## 🖼️ Adding Project Screenshots

Replace the placeholder images in the Projects component with your actual project screenshots:

1. Add your screenshots to the public folder
2. Update the image paths in `Projects.jsx`

## 📱 Responsive Design

The portfolio is designed to be fully responsive across different devices:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgements

- Marvel theme inspiration
- Tailwind CSS for styling
- React and Vite communities
- EmailJS for contact form functionality

---

Created with ⚡ by Dhruv Goswami