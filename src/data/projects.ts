export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  /** External URL — only set when there's something real to click through to
   * (a live deploy or a public repo). Cards without this expand in place
   * instead of linking out to an empty/private repo. */
  link?: string;
  linkLabel?: string;
  /** Real screenshot to show on the card instead of a plain gradient. */
  image?: string;
  /** Longer write-up shown when a no-link card is expanded. */
  details?: string;
}

export const projects: Project[] = [
  {
    id: "freezone-advisor",
    image: "/images/icons/freezone-advisor.svg",
    title: "Freezone Advisor",
    category: "Deployed AI Agent",
    description:
      "A LangChain + LangGraph agent that answers UAE free-zone registration pricing questions in plain English, backed by a real normalized SQLite database and hybrid document search — deployed live with a full CI test suite (87 passing tests).",
    tags: ["LangGraph", "LangChain", "FastAPI", "SQLite", "Groq"],
    link: "https://freezone-advisor.onrender.com",
    linkLabel: "Live demo",
  },
  {
    id: "process-line-erp",
    image: "/images/icons/process-line-erp.svg",
    title: "Process-Line ERP",
    category: "Full-Stack ERP · Live",
    description:
      "A full-stack ERP tracking a manufacturing process line end to end — raw materials through finished goods — with real-time OEE dashboards, defect Pareto tracking, live energy-per-unit monitoring, and an append-only audit trail.",
    tags: ["FastAPI", "PostgreSQL", "CI/CD", "RBAC"],
    link: "https://ei-erp-backend.onrender.com/",
    linkLabel: "Live demo",
  },
  {
    id: "agentic-rag-langgraph",
    image: "/images/icons/agentic-rag-langgraph.svg",
    title: "Agentic RAG",
    category: "LangGraph + Local LLM",
    description:
      "A LangChain + LangGraph agent doing retrieval-augmented Q&A with genuine hybrid search (keyword + semantic, blended not either/or), tool use, and human-in-the-loop approval before sensitive actions — running free and local against Ollama.",
    tags: ["LangGraph", "Ollama", "Hybrid Search", "FastAPI"],
    details:
      "Not pushed to a public repo yet, so here's what's actually built: a LangGraph state machine with two node types — one for normal tool calls (read-only lookups) and a separate 'sensitive_tools' node gated by interrupt_before, so any action that actually changes something pauses for human approval before it runs. Retrieval blends a keyword index with a semantic embedding space rather than picking one, so results aren't dependent on exact phrasing. Runs entirely against a local Ollama model — no API key, no per-token cost.",
  },
  {
    id: "agent-orchestration",
    image: "/images/icons/agent-orchestration.svg",
    title: "Agent Orchestration",
    category: "Tool Use & Memory",
    description:
      "A keyless multi-step agent loop: a compound task is split into sub-steps, each routed to a tool, results accumulate in a persistent memory store, and any sensitive action pauses for human approval before it runs.",
    tags: ["Tool Routing", "Memory", "Human-in-the-Loop"],
    details:
      "Not pushed to a public repo yet, so here's what's actually built: a compound user request gets decomposed into sub-steps by the planner, each sub-step is routed to whichever tool handles it, and results accumulate in a persistent memory store across the whole run rather than being discarded between steps. Same human-in-the-loop pattern as the other agent projects — anything with a real side effect stops and waits for explicit approval instead of firing automatically.",
  },
  {
    id: "llm-cost-autopilot",
    image: "/images/icons/llm-cost-autopilot.svg",
    title: "LLM Cost Autopilot",
    category: "Complexity-Based Routing",
    description:
      "Classifies each incoming prompt's complexity and routes it to the cheapest capable model. The classifier is a real trained logistic regression model, not a mock — 100% held-out accuracy, verified against hand-written prompts too.",
    tags: ["Model Routing", "Cost Optimization", "scikit-learn"],
    details:
      "Not pushed to a public repo yet, so here's what's actually built: a logistic regression classifier trained on labeled prompt/complexity pairs, scored on a genuine held-out test split (100% accuracy there) and then separately sanity-checked against a batch of hand-written prompts the model never saw during training. Simple prompts route to a small/cheap model, complex ones route to a stronger one — the actual mechanism freezone-advisor's own model routing was modeled on.",
  },
  {
    id: "prompt-ab-testing",
    image: "/images/icons/prompt-ab-testing.svg",
    title: "Prompt A/B Testing",
    category: "Eval Infrastructure",
    description:
      "The golden-dataset + regression-diff pattern real teams use to evaluate prompt changes before shipping them — versioned prompts, a hand-labeled golden dataset, and a diff report showing exactly which cases flip pass/fail between versions.",
    tags: ["Eval", "Regression Testing", "Prompt Versioning"],
    details:
      "Not pushed to a public repo yet, so here's what's actually built: a golden dataset of hand-labeled question/expected-answer pairs, a case-type-based grading system (exact match, grounded fact, clarification-expected, no-info-available, subjective — each graded differently since 'correct' means something different for each), and a CLI that runs two prompt versions against the same dataset and reports exactly which specific cases flipped pass/fail between them. This exact pattern is what freezone-advisor's own Step 6 eval harness was built from.",
  },
  {
    id: "rag-hybrid-search",
    image: "/images/icons/rag-hybrid-search.svg",
    title: "Hybrid Search RAG",
    category: "Retrieval Pipeline",
    description:
      "Retrieval-augmented generation over internal-style documents with real hybrid search: a TF-IDF keyword index blended with an SVD-reduced semantic space, so results aren't dependent on exact keyword matches alone.",
    tags: ["TF-IDF", "Hybrid Search", "Retrieval"],
    details:
      "Not pushed to a public repo yet, so here's what's actually built: a TF-IDF keyword index blended with an SVD-reduced semantic embedding space, so a query has to fail on both axes to return nothing — pure keyword search misses paraphrases, pure semantic search misses exact terms (part numbers, error codes), blending covers both. This is the retriever freezone-advisor's own search_docs tool is a simplified version of.",
  },
  {
    id: "rca-dashboard",
    title: "RCA Dashboard",
    category: "Power BI · Client Work",
    description:
      "A single Power BI view turning scattered root-cause-analysis data into one governed source of truth — live SLA breach flagging, repeat-issue detection across sites, and data-quality scoring, replacing spreadsheets and email threads.",
    tags: ["Power BI", "DAX", "Data Modeling"],
    image: "/images/rca-dashboard.jpg",
    details:
      "Built for a quality/operations team that couldn't answer 'how many RCAs are open right now' without manually compiling reports. The dashboard tracks every root cause analysis from open to close across sites and departments: real-time SLA breach flagging before investigations become audit findings, repeat-issue detection so the same root cause doesn't get re-solved from scratch under a different name each time, and a governance score exposing missing owners or incomplete records at a glance. Private client work — no public repo — screenshot above is the real dashboard.",
  },
  {
    id: "energy-monitoring",
    title: "Energy Monitoring Dashboard",
    category: "Python · Dash · Plotly",
    description:
      "An interactive Plotly/Dash dashboard converting raw multi-phase current sensor exports into live current, power, and energy readings — drag-select any time window on the chart for instant summary statistics.",
    tags: ["Python", "Dash", "Plotly"],
    image: "/images/energy-monitoring.jpg",
    details:
      "Built to turn raw amp-reading exports from a power logger into something a plant manager can actually read in seconds instead of scrolling spreadsheets. Automatically converts multi-phase current into kW/kWh, plots all three phases on one zoomable chart, toggles between actual-timestamp and relative-elapsed-time views to compare equipment runs side by side, and recalculates mean/min/max/std-dev live for whatever window is selected on the chart. Private client work — no public repo — screenshot above is the real dashboard.",
  },
  {
    id: "predictive-maintenance",
    image: "/images/icons/predictive-maintenance.svg",
    title: "Predictive Maintenance",
    category: "ML · In Progress",
    description:
      "A predictive maintenance project — repo is currently private while it's in progress, so there's no public link or screenshot to show yet. More detail coming as it's finished.",
    tags: ["Machine Learning"],
    details:
      "Repo is private for now, so there's genuinely nothing public to link to or a real screenshot to show yet — this card is a placeholder until it's ready to share properly rather than a stand-in link or a stock image.",
  },
];
