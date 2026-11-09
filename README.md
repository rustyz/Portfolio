# Rishi Pandey — Portfolio

**Live site:** https://portfolio-m0xc.onrender.com

I build data and AI systems for manufacturing and operations teams, and lead them from problem definition to a working, deployed product. This site collects that work: what each project is, why it was built, and where you can see it running.

## Featured work

| Project | What it is | See it |
|---|---|---|
| **Production Intelligence Platform** | Live visibility of a manufacturing process line from raw-material intake to finished goods: stage status, OEE, defects by cause, and a full audit trail. Sits on top of a plant's existing database. Customisable, human-in-the-loop, governed by design. | [Live demo](https://ei-erp-backend.onrender.com/) · demo video and case study on the site |
| **Freezone Advisor** | LangChain + LangGraph agent answering UAE free-zone registration pricing questions, backed by a normalised SQLite database and hybrid search, with 87 passing tests in CI. | [Live demo](https://freezone-advisor.onrender.com) |
| **RCA Dashboard** | Power BI view turning scattered root-cause-analysis data into one governed source of truth: SLA breach flagging, repeat-issue detection, data-quality scoring. | Client work, screenshot on the site |
| **Energy Monitoring Dashboard** | Plotly/Dash dashboard converting raw multi-phase current readings into power and energy, with live statistics for any selected time window. | Client work, screenshot on the site |
| **Agentic RAG** | LangGraph agent with hybrid retrieval, tool use and human approval before sensitive actions, running locally on Ollama. | Write-up on the site |
| **Agent Orchestration** | Multi-step agent loop: task decomposition, tool routing, persistent memory, human-in-the-loop approval. | Write-up on the site |
| **LLM Cost Autopilot** | Trained classifier that routes each prompt to the cheapest capable model. | Write-up on the site |
| **Prompt A/B Testing** | Golden-dataset and regression-diff harness for evaluating prompt changes before shipping. | Write-up on the site |
| **Hybrid Search RAG** | Retrieval pipeline blending a keyword index with a semantic embedding space. | Write-up on the site |
| **Predictive Maintenance** | In progress. | Coming soon |

### Try the Production Intelligence Platform

| | |
|---|---|
| URL | https://ei-erp-backend.onrender.com/ |
| Username | `planner1` |
| Password | `ChangeMe123!` |

Read-only planner account on synthetic data. It runs on a free host, so the first load can take about 30 seconds to wake up.

## Contact

- Work: [rishi.pandey@tus.ie](mailto:rishi.pandey@tus.ie)
- Personal: [prishi34@gmail.com](mailto:prishi34@gmail.com)
- LinkedIn: [linkedin.com/in/rishi-pandey-aiconsultation](https://www.linkedin.com/in/rishi-pandey-aiconsultation)

---

## About this repo

Single-page site built with React, Vite, TypeScript, Tailwind CSS, GSAP and Framer Motion. Deployed on Render as a static site from the `main` branch (`render.yaml`).

### Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static output in dist/
```

### Where things live

```
src/
  data/projects.ts           project cards: edit this to add or update work
  components/
    Hero.tsx                 intro and calls to action
    SelectedWorks.tsx        project grid; cards expand in place for video,
                             case study and demo login
    Stats.tsx                headline numbers
    Contact.tsx              contact details and footer
    Navbar.tsx, LoadingScreen.tsx
public/
  images/                    project thumbnails and screenshots
  videos/                    demo videos and poster frames
```

To add a project, add an entry to `src/data/projects.ts`. Optional fields: `video` and `videoPoster` for a demo video, `caseStudy` for a structured write-up, and `demo` for public login details.
