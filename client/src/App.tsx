import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";

async function reviewCode(code: string) {
  const response = await fetch("http://localhost:3000/api/review", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ code }),
  });

  if (!response.ok) {
    throw new Error("Internal server error");
  }

  return response.json();
}

function App() {
  const [code, setCode] = useState("");
  const mutation = useMutation({ mutationFn: reviewCode });

  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">AI Code Reviewer</h1>
      <p className="text-gray-600 mb-8">
        Enter your code below and get instant feedback from our AI code
        reviewer.
      </p>

      <div className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="code" className="text-sm font-medium">
            Your Code
          </label>
          <Textarea
            id="code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Paste your code here..."
            className="font-mono h-64 resize-none"
            required
          />
        </div>

        <Button
          className="w-full sm:w-auto"
          onClick={() => mutation.mutate(code)}
        >
          Review Code
        </Button>

        {mutation.data?.review && (
          <Card className="p-4 mt-6">
            <h2 className="text-xl font-semibold mb-4">AI Review</h2>
            <div className="prose prose-sm max-w-none">
              <pre className="whitespace-pre-wrap font-mono text-sm bg-gray-50 p-4 rounded-md overflow-auto">
                {mutation.data.review}
              </pre>
            </div>
          </Card>
        )}
      </div>
    </main>
  );
}

export default App;
