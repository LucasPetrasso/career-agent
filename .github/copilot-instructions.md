
# Career Agent — Copilot Instructions

## 1. Project Overview
Personal AI assistant for career management, job discovery, LinkedIn assistance and freelance prospecting.

The project uses a modular monolith architecture with frontend and backend separated in an npm workspaces monorepo.

## 2. Technology Stack

### Frontend
- React 19
- TypeScript 6
- Vite 8
- CSS Modules
- Fetch API

### Backend
- Node.js
- Express 5
- TypeScript
- Prisma 7
- Zod
- PostgreSQL (Neon)

### Testing
- Vitest

## 3. Architecture

### Frontend
Located in `client/src/`.

- components/: reusable UI components
- features/: feature-specific modules
- hooks/: custom hooks
- pages/: application pages
- services/api/: backend communication
- styles/: global styles
- types/: TypeScript types
- utils/: utility functions

### Backend
Located in `server/src/`.

- config/: application configuration and Prisma instance
- controllers/: HTTP request and response handling
- middleware/: validation and error handling
- routes/: API routes
- schemas/: Zod schemas and inferred types
- services/: business logic and database operations
- generated/: generated Prisma Client

Prisma schema and migrations are maintained in `server/prisma/`.

## 4. Development Rules

- Use TypeScript throughout the project.
- Follow existing project conventions and naming patterns.
- Keep controllers, services, schemas and routes separated.
- Keep business logic inside services.
- Use Zod for input validation.
- Use Prisma for database access.
- Avoid unnecessary abstractions and duplicated code.
- Prefer small, reusable and maintainable implementations.
- Do not introduce new dependencies without justification.
- Do not create unnecessary folders or architectural layers.
- Do not replace existing implementations without a technical reason.

## 5. Database Rules

- PostgreSQL is hosted on Neon.
- Prisma 7 is already configured.
- Use the existing shared Prisma instance.
- Never create additional PrismaClient instances.
- Never modify migrations or database schema without explicit authorization.
- Never execute destructive database commands without approval.
- Preserve existing relationships and constraints.

## 6. API Development

Follow the existing flow:

Route → Validation Middleware → Controller → Service → Prisma

- Validate request payloads with Zod.
- Keep controllers focused on HTTP handling.
- Keep business rules inside services.
- Return consistent HTTP status codes.
- Handle missing records and invalid input appropriately.
- Follow existing response conventions.

## 7. Security and Reliability

- Never expose environment variables or credentials.
- Never hardcode API keys or database URLs.
- Validate external input.
- Do not trust AI-generated information without verification.
- Require backend validation for sensitive operations.
- Do not execute external actions without the required authorization.

## 8. AI and Token Efficiency

Token and API cost optimization are project requirements.

- Use only the context necessary for each task.
- Avoid repeatedly analyzing the entire repository.
- Inspect only relevant files and dependencies.
- Avoid unnecessary explanations and duplicated output.
- Prefer focused changes over large rewrites.
- Avoid redundant API and AI model calls.
- Do not introduce background agents or automatic execution without authorization.
- Prefer deterministic backend logic over AI calls when possible.

## 9. Workflow

Before implementing a task:

1. Inspect the relevant existing files.
2. Identify established patterns.
3. Check dependencies and related implementations.
4. Present a concise implementation plan when necessary.
5. Implement only the requested scope.

After implementation:

1. Review modified files.
2. Run relevant tests and builds.
3. Report modified files and test results.
4. Highlight unresolved issues.

Never claim that a test or build succeeded without actually executing it.

Do not modify unrelated files.

Do not assume a feature is missing before checking the current implementation.

## 10. Development Environment

The developer uses Windows, VS Code and PowerShell.

Run both applications from the repository root:

`npm run dev`

Build the backend:

`npm run build --workspace=server`

Run Prisma commands from the repository root:

`npm exec --workspace=server -- prisma <command>`

Do not run `npx prisma` directly from the repository root.

## 11. Important Project Rules

- This is an existing project, not a new project.
- Preserve the current architecture.
- Do not recreate completed features.
- Do not change technology choices without approval.
- Do not implement additional features outside the requested scope.
- Ask before making significant architectural decisions.
- Prioritize correctness, maintainability and controlled development over unnecessary complexity.
