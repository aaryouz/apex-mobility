# Apex Mobility

A modern web application for mobility routines and exercises, built with React, Express, and TypeScript.

## Features

- Full-stack TypeScript application
- Modern UI with Tailwind CSS and Radix UI components
- Real-time updates with WebSocket
- Secure authentication with Passport.js
- Form validation with Zod
- Database integration with Drizzle ORM

## Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, Radix UI
- **Backend**: Express.js, TypeScript
- **Database**: Drizzle ORM
- **Authentication**: Passport.js
- **Form Handling**: React Hook Form with Zod
- **Routing**: Wouter
- **Real-time**: WebSocket

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
cd apex-mobility
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory with the following variables:
```env
DATABASE_URL=your_database_url
SESSION_SECRET=your_session_secret
```

### Development

Run the development server:
```bash
npm run dev
```

### Building for Production

Build the application:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## Project Structure

```
apex-mobility/
├── client/          # Frontend React application
├── server/          # Backend Express server
├── shared/          # Shared code between client and server
├── vite.config.ts   # Vite configuration
├── tailwind.config.ts # Tailwind CSS configuration
└── package.json     # Project dependencies and scripts
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 