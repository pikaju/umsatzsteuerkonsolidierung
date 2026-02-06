# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + TypeScript + Vite application for "Umsatzsteuerkonsolidierung" (VAT consolidation). The project is currently in its initial setup phase with a minimal React starter template.

## Package Management

This project uses **Yarn Berry (v2+)** with Plug'n'Play (PnP) mode:
- Dependencies are managed via `.pnp.cjs` and `.pnp.loader.mjs` (not `node_modules`)
- Use `yarn` commands exclusively (not `npm`)
- The Nix flake provides `yarn-berry` in the development environment

## Common Commands

### Development
```bash
yarn dev          # Start development server with HMR
yarn build        # Type-check with tsc and build for production
yarn preview      # Preview production build locally
yarn lint         # Run ESLint on all TypeScript files
```

### Testing
Currently, no test framework is configured.

## Tech Stack

- **React 19.2** - UI library with StrictMode enabled
- **TypeScript 5.9** - Type safety with project references
- **Vite 7** - Build tool with fast HMR using @vitejs/plugin-react (Babel-based Fast Refresh)
- **ESLint 9** - Linting with flat config format

## Architecture

### Project Structure
```
src/
├── main.tsx        # Application entry point with React root
├── App.tsx         # Main App component
├── App.css         # App-specific styles
├── index.css       # Global styles
└── assets/         # Static assets (images, etc.)
```

### TypeScript Configuration
The project uses TypeScript project references:
- `tsconfig.json` - Root config that references app and node configs
- `tsconfig.app.json` - Configuration for application code
- `tsconfig.node.json` - Configuration for Node.js tooling (Vite config, etc.)

### ESLint Configuration
Uses ESLint 9's flat config format (`eslint.config.js`) with:
- JavaScript recommended rules
- TypeScript ESLint recommended rules
- React Hooks plugin rules
- React Refresh plugin for Vite

## Development Environment

A Nix flake is provided for reproducible development environments:
```bash
nix develop        # Enter development shell with yarn-berry
```

## Rules

* Do not bother with design. We are raw-dogging HTML components here without CSS. This is a tool for practical utility.
* All localized text must be in German. This is a German software for German Umsatzsteuerkonsolidierung and Umsatzsteuervoranmeldung.
