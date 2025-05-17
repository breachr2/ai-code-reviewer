# AI Code Reviewer

This repository contains the full stack **AI Code Reviewer** application, which allows users to submit code snippets and receive AI-generated feedback on code quality, readability, and best practices.

### Client (frontend)
The client directory is where the code for the UI resides.
- **`public/`**  
  Contains static files that get served directly, like the HTML template and icons.

- **`src/components/`**  
  Contains reusable UI components like buttons, cards, and text areas to build the interface.

- **`src/App.tsx`**  
  Main React component that renders the UI, handles user input, sends code to backend, and displays AI feedback.

- **`src/main.tsx`**  
  Entry point that mounts the React app to the DOM.

- **`package.json` & `vite.config.ts`**  
  Manage frontend dependencies and development/build configuration using Vite.


### Server (backend)
The server directory is where the code for the business logic of the application resides. This includes handling requests from the client, and making API requests to the OpenAI GPT model.

- **`app.js`**  
  Sets up an Express server with routes. The `/api/review` POST endpoint accepts code snippets, sends them to OpenAI’s API, and returns the AI’s review.

- **`.env`**  
  Contains sensitive environment variables such as the OpenAI API key (not pushed to GitHub).

- **`package.json`**  
  Lists backend dependencies like Express, CORS, OpenAI SDK, and dotenv for environment variables.

## How to Run the Project

### Frontend

1. Navigate to the `client` directory.

2. Install dependencies:
```bash
npm install

```
3. Start the server:

```bash
npm run dev
```

The frontend will be available at http://localhost:5173.

### Backend

1. Navigate to the `server` directory.
2. Create a `.env` file with your OpenAI API key:

```env
OPENAI_API_KEY=your_api_key_here
```

3. Install dependencies:
```bash
npm install
```
4. Start the server:

```bash
npm run dev
```