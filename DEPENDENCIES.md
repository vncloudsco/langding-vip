# TinyPanel Landing Page Dependencies

## Automatically Inferred Dependencies

The v0 Next.js runtime automatically handles these dependencies based on imports:

### Core Framework
- `next` - Next.js framework
- `react` - React library
- `react-dom` - React DOM renderer

### UI Components (Pre-installed)
- `@/components/ui/button` - Button component from shadcn/ui
- `@/components/ui/card` - Card components from shadcn/ui  
- `@/components/ui/badge` - Badge component from shadcn/ui

### Icons
- `lucide-react` - Icon library (CheckCircle, Server, Shield, etc.)

### Styling
- `tailwindcss` - Utility-first CSS framework
- `class-variance-authority` - For component variants
- `clsx` - Conditional className utility

### TypeScript
- `typescript` - TypeScript support
- `@types/react` - React type definitions
- `@types/node` - Node.js type definitions

## Installation for Local Development

If you want to run this project locally outside of v0, you would need:

\`\`\`json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "lucide-react": "^0.300.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^3.3.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0"
  }
}
\`\`\`

## Notes

- No package-lock.json is generated in v0 environment
- Dependencies are managed automatically
- For local development, use the "Download Code" button in v0 to get a complete project setup
