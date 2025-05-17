### AI Code Reviewer

This is the backend server for the AI Code Reviewer tool.

## How it works
- Accepts code snippets
- Sends code to OpenAI API for analysis and feedack
- Returns AI-generated code review based on readability, style, bugs, and best practices

## Libraries
- Node.js + Express.js -- API server
- OpenAI SDK -- Interface with OpenAI GPT models

## Model Used
Currently using the gpt-3.5-turbo model, since it was one of the cheapest option. Some other models I considered was the gpt-4o, and gpt-4.1-mini. They are all priced around the same so any of them would work with this app.

## How to set up and start server
1. Move into the server directory

```bash
cd server
```
2. Install dependencies

```bash
npm install
```

3. Create .env file:
```bash
OPENAI_API_KEY=your_openai_api_key_here
```

4. Start the server:

```bash
npm run dev
```

5. The server will run on http://localhost:3000