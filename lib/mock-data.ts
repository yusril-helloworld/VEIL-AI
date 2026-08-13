import { AIModeType, Conversation, PromptSuggestion } from "./types";

// Fallback AI Streaming Responses according to mode
export const MOCK_AI_RESPONSES: Record<AIModeType, string> = {
  general: `VEIL AI is an advanced intelligence platform engineered to streamline complex reasoning, creative generation, and dynamic analysis in real-time. 

Here is what I can help you with today:
* **Data & Analysis:** Summarize dense documents, extract key metrics, and analyze datasets.
* **Code & Architecture:** Debug scripts, write clean code, and optimize algorithms.
* **Content Generation:** Draft emails, write technical articles, and polish copy.

How can I assist your workflow right now?`,

  coding: `Here is a clean, modern implementation in **TypeScript** with asynchronous execution and error boundaries:

\`\`\`typescript
interface FetchOptions {
  timeout?: number;
  headers?: Record<string, string>;
}

async function fetchWithRetry<T>(
  url: string,
  retries = 3,
  delay = 1000
): Promise<T> {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(\`HTTP error! Status: \${response.status}\`);
      }
      return (await response.json()) as T;
    } catch (error) {
      if (attempt === retries) throw error;
      await new Promise((resolve) => setTimeout(resolve, delay * attempt));
    }
  }
  throw new Error("Unexpected error during request execution.");
}
\`\`\`

### Key Optimizations:
1. **Exponential Retry Logic:** Prevents server overloading during temporary network hiccups.
2. **Strict Static Typing:** Returns a strongly typed response via generic \`Promise<T>\`.
3. **Error Boundary Safe:** Prevents unhandled promise rejections from crashing the client runtime.`,

  writing: `### Subject: Executive Summary & Project Milestone Delivery

Dear Team,

I am writing to provide an executive status update regarding our current operational timeline and upcoming software release.

#### **Key Achievements:**
* **Performance:** Reduced API latency by **35%** across core streaming endpoints.
* **Interface UI:** Deployed dark theme design system aligned with modern SaaS specifications.
* **Security:** Conducted comprehensive client-side and server-side input validation audits.

#### **Next Steps:**
1. Finalize multi-tenant database schemas.
2. Initiate end-to-end load testing prior to staging deployment.

Please reach out if you require additional technical documentation.

Best regards,  
**VEIL AI Engineering**`,

  research: `Based on empirical analysis of recent computer science literature:

### 1. Retrieval-Augmented Generation (RAG) vs. Fine-Tuning
* **RAG Systems:** Optimal for real-time dynamic knowledge bases. Reduces model hallucinations by grounding responses in verifiable vector embeddings.
* **Fine-Tuning:** Superior for style consistency, syntax adaptation, and specialized domain vocabulary.

### 2. Efficiency Comparison
| Approach | Implementation Speed | Monthly Cost | Data Freshness |
| :--- | :--- | :--- | :--- |
| **Vector RAG** | Fast (< 1 day) | Low to Medium | Real-Time |
| **Full Fine-Tune** | Slow (Days/Weeks) | High | Static |

> **Key Takeaway:** A hybrid approach using vector search combined with instruction tuning produces the highest benchmark scores for modern enterprise software.`,

  creative: `Here are **3 disruptive AI startup concepts** designed for execution in 2026:

1. **SynapseCanvas:** An AI-powered design studio that converts UI voice descriptions directly into live React/Tailwind component code in real time.
2. **LexiGuard:** Autonomous legal agents that audit B2B vendor contracts in seconds, flagging liability traps and suggesting safer alternative clauses.
3. **EchoFlow:** Context-aware multilingual voice translation agents for global distributed developer standups.`
};

// Default Prompt Suggestions
export const MOCK_PROMPT_SUGGESTIONS: PromptSuggestion[] = [
  {
    category: "Write",
    title: "Write a professional email",
    prompt: "Write a concise and professional email requesting a project timeline update from a client.",
    iconName: "PenTool"
  },
  {
    category: "Learn",
    title: "Explain quantum computing",
    prompt: "Explain quantum computing and qubit superposition in simple terms for a beginner.",
    iconName: "Search"
  },
  {
    category: "Code",
    title: "Build a Python calculator",
    prompt: "Build an object-oriented Python script for a command-line calculator supporting standard operations.",
    iconName: "Code"
  },
  {
    category: "Analyze",
    title: "Analyze this document",
    prompt: "Analyze the attached document and provide a bulleted summary of key actionable insights.",
    iconName: "FileText"
  },
  {
    category: "Brainstorm",
    title: "Give me 10 startup ideas",
    prompt: "Brainstorm 10 disruptive AI startup ideas operating in the productivity SaaS space.",
    iconName: "BrainCircuit"
  },
  {
    category: "Create",
    title: "Create a marketing strategy",
    prompt: "Create a 30-day product launch marketing strategy for an AI productivity app.",
    iconName: "Rocket"
  }
];

// Sample Initial Chats
export const MOCK_RECENT_CHATS: Conversation[] = [
  {
    id: "1",
    title: "AI Startup Ideas 2026",
    mode: "creative",
    createdAt: "2026-08-14T08:00:00.000Z",
    isFav: true,
    messages: [
      {
        id: "m1",
        role: "user",
        content: "Give me 10 startup ideas",
        timestamp: "08:00 AM"
      },
      {
        id: "m2",
        role: "assistant",
        content: MOCK_AI_RESPONSES.creative,
        timestamp: "08:01 AM"
      }
    ]
  },
  {
    id: "2",
    title: "Explain Quantum Computing",
    mode: "general",
    createdAt: "2026-08-14T09:30:00.000Z",
    isFav: false,
    messages: []
  },
  {
    id: "3",
    title: "Python Async Debugging",
    mode: "coding",
    createdAt: "2026-08-13T14:15:00.000Z",
    isFav: true,
    messages: []
  },
  {
    id: "4",
    title: "Marketing Strategy Proposal",
    mode: "writing",
    createdAt: "2026-08-13T16:45:00.000Z",
    isFav: false,
    messages: []
  }
];