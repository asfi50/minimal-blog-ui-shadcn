# Minimal UI Blog

A modern, minimal blog platform built with Next.js, featuring a clean UI using shadcn/ui components, Tailwind CSS, and Lucide icons.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Next.js](https://img.shields.io/badge/Next.js-13.5.1-black)

## 🌟 Features

- 📱 Responsive design for all devices
- 🎨 Clean, minimal UI using shadcn/ui components
- 🔍 Search functionality
- 👤 User authentication
- 💡 Dark/Light mode support
- 🔔 Notifications panel
- 👥 User profiles
- 🏷️ Post categorization and tagging
- 📝 Many more features!

## 🛠️ Tech Stack

- **Framework:** Next.js 13.5.1 (App Router)
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** Lucide Icons
- **State Management:** React Hooks
- **Deployment:** Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/asfi50/minimal-blog-ui-shadcn.git
cd minimal-blog-ui-shadcn
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser.


## 🧩 Components

### Core Components

- `Navbar`: Navigation and user controls
- `PostFeed`: Main blog post listing
- `NotificationBar`: Real-time notification system
- `SearchPage`: Full-text search functionality
- `ProfilePage`: User profile management
- `MobileMenu`: Responsive navigation menu

### UI Components (shadcn/ui)

- Button
- Card
- Dialog
- Sheet
- Input
- Avatar
- Tabs
- and more...

## 🎨 Customization

### Theme Customization

Modify the theme in `globals.css`:

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    /* Add your custom theme variables */
  }
}
```

### Adding New Components

1. Install shadcn/ui components:
```bash
npx shadcn-ui@latest add [component-name]
```

2. Import and use in your pages:
```typescript
import { Button } from "@/components/ui/button";
```

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints:
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px


## 🚀 Deployment

Deploy to Vercel:

1. Push your code to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy


## 📝 Available Scripts

- `dev`: Run development server
- `build`: Build for production
- `start`: Start production server
- `lint`: Run ESLint

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com) for UI components
- [Lucide](https://lucide.dev) for icons
- [Next.js](https://nextjs.org) team
- [Tailwind CSS](https://tailwindcss.com) team

## 📧 Contact

mtasfi - [@mtasfi](https://linkedin.com/in/mtasfi)

Project Link: [https://github.com/asfi50/minimal-blog-ui-shadcn.git](https://github.com/asfi50/minimal-blog-ui-shadcn.git)

## 🛣️ Roadmap

- [ ] Add comment system
- [ ] Implement social sharing
- [ ] Add analytics dashboard
- [ ] Support for multiple languages
- [ ] Add RSS feed
- [ ] Image optimization
- [ ] SEO improvements

---

Built with ❤️ using Next.js and shadcn/ui