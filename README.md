# Cloud Professional Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, showcasing cloud engineering expertise, professional experience, certifications, and technical projects.

## Features

- **Responsive Design**: Fully responsive layout optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean blue and white color scheme with smooth animations and transitions
- **Sections**:
  - Hero section with professional introduction
  - About section with education and current role
  - Experience section with detailed work history
  - Projects showcase with technologies and outcomes
  - Certifications with external verification links
  - Blog section linking to Medium articles
  - Contact form with multiple contact methods

## Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Linting**: ESLint

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)

## Installation

1. **Clone or navigate to the project directory**:
   ```bash
   cd project
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## Development

To run the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is busy).

## Building for Production

To create a production build:

```bash
npm run build
```

The optimized files will be in the `dist` directory.

## Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
project/
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Navigation header with smooth scrolling
│   │   ├── Hero.tsx            # Hero section with introduction
│   │   ├── About.tsx           # About section with background
│   │   ├── Experience.tsx      # Professional experience timeline
│   │   ├── Projects.tsx        # Featured projects showcase
│   │   ├── Certifications.tsx  # Professional certifications
│   │   ├── Blog.tsx            # Blog articles with Medium links
│   │   ├── Contact.tsx         # Contact form and social links
│   │   └── Footer.tsx          # Footer component
│   ├── App.tsx                 # Main application component
│   ├── main.tsx                # Application entry point
│   └── index.css               # Global styles with Tailwind
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## Customization

### Personal Information

Update the following files with your personal information:

1. **Contact Links** (`src/components/Contact.tsx`):
   - Replace email: `your.email@example.com`
   - Replace LinkedIn: `https://linkedin.com/in/yourprofile`
   - Replace GitHub: `https://github.com/yourusername`

2. **Blog Links** (`src/components/Blog.tsx`):
   - Replace Medium profile: `https://medium.com/@yourusername`
   - Update blog post links and content

3. **Certification Links** (`src/components/Certifications.tsx`):
   - Update links to your actual certification badges on CertMetrics or Credly

### Styling

The website uses a blue and white color scheme. To customize colors:

1. Edit `tailwind.config.js` to add custom colors
2. Update component files to use your custom color classes

### Content

All content is defined within the component files:

- Experience: `src/components/Experience.tsx`
- Projects: `src/components/Projects.tsx`
- Certifications: `src/components/Certifications.tsx`
- Blog posts: `src/components/Blog.tsx`

## Deployment

### Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Deploy to Netlify

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Deploy:
   ```bash
   netlify deploy --prod --dir=dist
   ```

### Deploy to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/repository-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## Backend Integration (Optional)

This portfolio is currently a static frontend application. If you want to add backend functionality:

### Contact Form with Supabase

1. **Install Supabase client** (already included):
   ```bash
   npm install @supabase/supabase-js
   ```

2. **Create a Supabase project** at https://supabase.com

3. **Set up environment variables**:
   Create a `.env` file:
   ```env
   VITE_SUPABASE_URL=your-project-url
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```

4. **Create a database table**:
   ```sql
   create table contact_messages (
     id uuid default gen_random_uuid() primary key,
     name text not null,
     email text not null,
     message text not null,
     created_at timestamptz default now()
   );
   ```

5. **Update Contact component** to submit form data to Supabase

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal and commercial use.

## Support

For issues or questions, please open an issue in the repository or contact via the portfolio website.
