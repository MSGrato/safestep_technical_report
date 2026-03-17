# Team Project Page Template

This repository is a standalone starter for a polished team project page.

Students should be able to use it without redesigning anything.

In most cases, they only need to do two things:

1. edit `src/data/projectData.ts`
2. add files to `public/project-assets/`

## Fast start

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal.

## Read these first

- `START_HERE.md`
- `src/data/projectData.ts`
- `public/project-assets/README.md`

## The two folders that matter most

Main content file:

- `src/data/projectData.ts`

Assets folder:

- `public/project-assets/`

## What goes in `public/project-assets/`

Students can place any of these there:

- screenshots
- diagrams
- photos
- exported slide decks as PDF
- technical reports as PDF
- any other downloadable project file

Example paths to use inside `src/data/projectData.ts`:

- `/project-assets/hero-screen.png`
- `/project-assets/system-diagram.png`
- `/project-assets/final-slides.pdf`
- `/project-assets/report.pdf`

## Recommended student workflow

1. Open `src/data/projectData.ts`.
2. Replace all bracketed placeholder text like `[Project Title]`.
3. Add screenshots, diagrams, or PDFs to `public/project-assets/`.
4. Update the gallery, links, stack, features, and roadmap in `src/data/projectData.ts`.
5. Run `npm run dev` and refresh the browser as you edit.
6. Run `npm run build` before submitting or sharing.

## What students usually should NOT edit

Most students should leave these files alone:

- `src/App.tsx`
- `src/styles.css`
- `vite.config.ts`
- `tsconfig*.json`

Only edit those if you intentionally want to redesign the page.

## What the template supports

- title and summary
- team member section
- problem and solution
- project links
- screenshot / diagram gallery
- methods and technical stack
- feature cards
- architecture explanation
- code snippets
- roadmap
- risks and constraints
- final closing section

## Minimum viable submission

If students are short on time, they should still fill in at least:

- title
- subtitle
- executive summary
- problem
- solution
- team members
- 1 to 3 screenshots
- stack
- 2 to 3 feature cards

## Common mistakes to avoid

- leaving bracketed placeholder text in the final page
- putting files in the wrong folder instead of `public/project-assets/`
- using local filesystem paths instead of `/project-assets/...`
- rewriting layout code when the data file was enough
- pasting huge code samples instead of one or two focused examples

## Before sharing the page

Check these quickly:

- all placeholders are replaced
- all links open correctly
- images render correctly
- PDF links work
- page still runs with `npm run dev`
- project still builds with `npm run build`

## Suggested prompt for students

Students can paste a prompt like this into Codex, Claude, or another coding model after they have added their slides, code, screenshots, and other materials.

```text
Use this repository as the working template for the final project page:

/Users/leobix/msis522-team-project-template

Your job is to fully populate the template into a polished, professional showcase page for our project using the materials I provide.

Main instructions:
- Work directly in this repo.
- Keep the existing template structure and overall design language.
- Do not redesign the page from scratch unless something is clearly broken or missing.
- Fill in the page as completely as possible using my materials.
- Copy useful screenshots, diagrams, PDFs, or other assets into `public/project-assets/` yourself when needed.
- Never invent anything.
- If anything is unclear, unknown, unsupported by the materials, or ambiguous, ask me directly instead of guessing.

Primary files to edit:
- `src/data/projectData.ts`
- `public/project-assets/`

What to use as source material:
- my slide deck
- my project code repository/files
- screenshots, diagrams, PDFs, notes, and any other assets I provide

Source priority:
1. project code and actual implementation details
2. slide deck and written project materials
3. direct clarification from me if anything is still unclear

What I want you to do:
- Replace all placeholder content in `src/data/projectData.ts`
- Write the title, subtitle, owner line, executive summary, problem, solution, team roles, stack, methods, features, architecture, roadmap, risks, and links
- Add or reference screenshots/diagrams in `public/project-assets/`
- Use the codebase to infer the real stack, workflow, system architecture, features, and technical decisions
- Use the slide deck to infer positioning, goals, user value, milestones, and business framing
- Keep the writing factual, specific, and concrete
- Make the final page feel complete and impressive, not like a half-filled template

Constraints:
- Prefer concrete statements over hype
- Keep the page visually clean and professional
- Do not invent features, metrics, claims, or technical details that are not supported by the materials
- If evidence is missing, ask me instead of filling the gap with assumptions

Definition of done:
- The page is fully populated or nearly fully populated
- The content is grounded in the project materials
- Assets are copied into `public/project-assets/` and wired into the page where appropriate
- The repo runs successfully
- `npm run build` passes

At the end, give me:
1. a short summary of what you filled in
2. a list of anything still missing
3. a list of questions for anything unclear or unsupported
```

## Instructor integration note

This repo also includes:

- `INTEGRATE_INTO_FOSTER_AI_HUB.md`
- `src/data/fosterAiHubExport.ts`

Those exist to make it easier for me to bring student work back into the main `foster-ai-hub` app later.
