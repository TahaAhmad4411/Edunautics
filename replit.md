# EduNautics - Educational Platform

## Overview

EduNautics is a modern educational platform built as a full-stack web application that allows students to browse courses, subscribe to newsletters, and engage with educational content. The application features a responsive design with a landing page showcasing courses, testimonials, and subscription functionality.

## System Architecture

The application follows a modern full-stack architecture with clear separation between client and server components:

- **Frontend**: React-based SPA with TypeScript, built using Vite
- **Backend**: Express.js server with REST API endpoints
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Styling**: Tailwind CSS with shadcn/ui components for consistent design
- **Deployment**: Optimized for Replit's autoscale deployment target

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens for the EduNautics brand
- **Animations**: Framer Motion for smooth page transitions and interactions

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API**: RESTful endpoints for newsletter subscriptions
- **Storage**: In-memory storage with interface for future database integration
- **Development**: Hot reloading with Vite middleware in development

### UI Components
- **Design System**: shadcn/ui components with "new-york" style
- **Theme**: Custom EduNautics color palette with CSS custom properties
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Accessibility**: ARIA-compliant components from Radix UI

### Database Schema
Currently using in-memory storage with a defined schema for:
- **Newsletters**: Email subscriptions with timestamps
- **Course Data**: Static course information (frontend-only)
- **Testimonials**: Student testimonial data (frontend-only)

## Data Flow

1. **Client Requests**: Frontend makes API calls using TanStack Query
2. **API Processing**: Express server handles requests and validates data
3. **Data Storage**: Currently uses in-memory storage (MemStorage class)
4. **Response**: JSON responses with appropriate error handling
5. **State Updates**: TanStack Query manages cache invalidation and updates

### Newsletter Subscription Flow
1. User enters email in footer form
2. Form validation using Zod schema
3. POST request to `/api/newsletter/subscribe`
4. Server validates and stores subscription
5. Toast notification confirms success/failure
6. Query cache invalidates to update subscription list

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Database driver (configured for future use)
- **drizzle-orm & drizzle-zod**: Type-safe database operations and validation
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library
- **react-hook-form & @hookform/resolvers**: Form handling with validation

### UI Dependencies
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority & clsx**: Conditional styling utilities
- **lucide-react**: Icon library

### Development Dependencies
- **vite**: Build tool and development server
- **typescript**: Type checking
- **tsx**: TypeScript execution for server
- **esbuild**: Production bundling for server

## Deployment Strategy

The application is configured for Replit's deployment platform:

### Development
- **Command**: `npm run dev`
- **Port**: 5000 (mapped to external port 80)
- **Hot Reload**: Vite middleware with React Fast Refresh

### Production Build
- **Build Process**: 
  1. `vite build` - Builds client-side assets
  2. `esbuild` - Bundles server code for production
- **Output**: 
  - Client assets: `dist/public/`
  - Server bundle: `dist/index.js`

### Environment Configuration
- **Database**: PostgreSQL module provisioned (ready for future use)
- **Node.js**: Version 20 runtime
- **Modules**: Web and PostgreSQL modules enabled

### Scaling Considerations
- Stateless server design for horizontal scaling
- Static asset serving optimized for CDN deployment
- Database operations abstracted through storage interface

## Changelog
- June 19, 2025: Initial setup
- June 19, 2025: Redesigned homepage to match Nearpeer layout with teal theme, course carousel, and exam category cards

## User Preferences

Preferred communication style: Simple, everyday language.