
# Local Development Setup

This project is built with React, TypeScript, and Vite. Follow these steps to run it on your local machine:

## Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or later)
- npm (comes with Node.js) or [yarn](https://yarnpkg.com/)

## Installation Steps

1. Clone the repository:
   ```bash
   git clone [your-repository-url]
   cd [your-project-directory]
   ```

2. Install dependencies:
   ```bash
   npm install
   # or if you use yarn
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or if you use yarn
   yarn dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:8080
   ```

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Creates a production build
- `npm run preview` - Previews the production build locally

## Project Structure

- `/src` - Source files
  - `/components` - React components
  - `/lib` - Utility functions
  - `/hooks` - Custom React hooks
  - `/pages` - Page components

## Technologies Used

- React
- TypeScript
- Vite (for building and development)
- Tailwind CSS (for styling)
- shadcn/ui (for UI components)

## Troubleshooting

If you encounter any issues:

1. Make sure all dependencies are installed correctly
2. Check that you're using a compatible Node.js version
3. Clear your browser cache
4. Try deleting the `node_modules` folder and `package-lock.json` file, then run `npm install` again
