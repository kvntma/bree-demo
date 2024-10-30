# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

# Bree Demo

This project is a demo application built with React, TypeScript, and Vite. It includes a minimal setup to get React working with Vite, HMR, and some ESLint rules. The project also uses Material-UI for styling and Jotai for state management.

## Table of Contents

- [Installation](#installation)
- [Running the Project Locally](#running-the-project-locally)
- [Dependencies](#dependencies)
- [Folder Structure](#folder-structure)
- [Decision Making](#decision-making)

## Installation

To install the project dependencies, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/bree-demo.git
   ```

````

2. Navigate to the project directory:

  ```
  cd bree-demo
  ```

3. Install the dependencies:
  ```
  npm i
  ```

4. Running it locally:

````

npm run dev

```

Dependencies
The project uses the following dependencies:

React: A JavaScript library for building user interfaces.
TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.
Vite: A fast build tool and development server for modern web projects.
Material-UI: A popular React UI framework for building responsive and accessible user interfaces.
Jotai: A state management library for React.
ESLint: A tool for identifying and fixing problems in JavaScript code.
Prettier: An opinionated code formatter.
Folder Structure
The project follows a simple and organized folder structure:


bree-demo/
├── public/                 # Public assets
├── src/                    # Source code
│   ├── assets/             # Static assets (images, fonts, etc.)
│   ├── components/         # Reusable React components
│   ├── constants/          # Constant values and mock data
│   ├── helpers/            # Utility functions and helpers
│   ├── page/               # Page components
│   ├── store/              # Jotai atoms and state management
│   ├── styles/             # Styled components and global styles
│   ├── App.tsx             # Main application component
│   ├── index.css           # Global CSS styles
│   ├── main.tsx            # Entry point of the application
│   └── theme.tsx           # Material-UI theme configuration
├── .eslintrc.js            # ESLint configuration
├── .prettierrc             # Prettier configuration


- At first I wanted to keep all the styles inside styles but the project was a bit small and it was faster
to iterate styles within the components.

- I started to use styled components closer into the components for the smaller pieces.
- If i were to scale the project I would definitely move them into their own styles either next to the
component file or in a schema styled structure

Separation of Concerns: Components, pages, assets, and utilities are organized into separate folders to keep the codebase modular and maintainable.

Reusability: Reusable components are placed in the components folder, while page-specific components are placed in the page folder.

State Management: Jotai atoms and state management logic are centralized in the store folder, with React's built in
useState for more local changes.




--- Struggles ---

- Specific sizing for responsiveness, needed to using some pixel breakpoints or components would overlap
- State management - needed to have a more robust way of handling the logic between screens. I used Jotai over
React's context because I needed something quick (as I was under time constraints and didn't want to set up
a structured context provider)
- I would add more animations and UI visibility on added accounts/transactions if I had more time.

```
