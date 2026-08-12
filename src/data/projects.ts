export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  link?: string;
  linkLabel?: string;
}

export const projects: Project[] = [
  {
    id: "freezone-advisor",
    title: "Freezone Advisor",
    category: "Deployed AI Agent",
    description:
      "A LangChain + LangGraph agent that answers UAE free-zone registration pricing questions in plain English, backed by a real normalized SQLite database and hybrid document search — deployed live with a full CI test suite (69 passing tests).",
    tags: ["LangGraph", "LangChain", "FastAPI", "SQLite", "Groq"],
    link: "https://freezone-advisor.onrender.com",
    linkLabel: "Live demo",
  },
  {
    id: "agentic-rag-langgraph",
    title: "Agentic RAG",
    category: "LangGraph + Local LLM",
    description:
      "A LangChain + LangGraph agent doing retrieval-augmented Q&A with genuine hybrid search (keyword + semantic, blended not either/or), tool use, and human-in-the-loop approval before sensitive actions — running free and local against Ollama.",
    tags: ["LangGraph", "Ollama", "Hybrid Search", "FastAPI"],
  },
  {
    id: "agent-orchestration",
    title: "Agent Orchestration",
    category: "Tool Use & Memory",
    description:
      "A keyless multi-step agent loop: a compound task is split into sub-steps, each routed to a tool, results accumulate in a persistent memory store, and any sensitive action pauses for human approval before it runs.",
    tags: ["Tool Routing", "Memory", "Human-in-the-Loop"],
  },
  {
    id: "llm-cost-autopilot",
    title: "LLM Cost Autopilot",
    category: "Complexity-Based Routing",
    description:
      "Classifies each incoming prompt's complexity and routes it to the cheapest capable model. The classifier is a real trained logistic regression model, not a mock — 100% held-out accuracy, verified against hand-written prompts too.",
    tags: ["Model Routing", "Cost Optimization", "scikit-learn"],
  },
  {
    id: "prompt-ab-testing",
    title: "Prompt A/B Testing",
    category: "Eval Infrastructure",
    description:
      "The golden-dataset + regression-diff pattern real teams use to evaluate prompt changes before shipping them — versioned prompts, a hand-labeled golden dataset, and a diff report showing exactly which cases flip pass/fail between versions.",
    tags: ["Eval", "Regression Testing", "Prompt Versioning"],
  },
  {
    id: "rag-hybrid-search",
    title: "Hybrid Search RAG",
    category: "Retrieval Pipeline",
    description:
      "Retrieval-augmented generation over internal-style documents with real hybrid search: a TF-IDF keyword index blended with an SVD-reduced semantic space, so results aren't dependent on exact keyword matches alone.",
    tags: ["TF-IDF", "Hybrid Search", "Retrieval"],
  },
];
