# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: recruiters and hiring managers evaluating Zain Haider for a software / full-stack role while he is applying for jobs. Their job is to decide whether to reach out; success is a resume download or a contact email.

Secondary: clients seeking freelance or contract work. Success is starting a conversation.

## Product Purpose

A personal portfolio that showcases Zain Haider's skills and shipped work so a visitor can decide to hire or engage him. The site exists to support job applications first and client inquiries second. Success is a qualified inbound contact.

## Positioning

Hands-on full-stack builder in Node.js and Python who ships production web applications. Neighboring generic "full stack developer" portfolios cannot truthfully claim that mechanism without the same shipped work. Canonical strengths and target titles live in `docs/reference.md`; do not invent others.

## Operating Context

Visitors typically arrive from a job application, LinkedIn, GitHub, or a shared URL, and scan the page in a browser before contacting. Evaluation is short: skills, experience, projects, then resume or email. The public product is a single page; a blog may exist later as an unlinked surface.

Factual identity, experience, skills, projects, and education for copy and proof are maintained in `docs/reference.md` (gitignored). Read that file when writing or replacing site content. Do not paste, quote, or restated its contents into PRODUCT.md, DESIGN.md, commit messages, or chat.

## Capabilities and Constraints

- Single-page public portfolio. Stack in the repo: Astro 5, Tailwind CSS 4, TypeScript, pnpm. Page content lives in frontmatter arrays on `src/pages/index.astro`.
- Confirmed capabilities: hero/intro, skills, experience, about, featured projects, resume download, contact form that delivers mail to Zain's inbox. Existing code has a TODO to integrate StaticForm for contact.
- Resume download is a required CTA. No resume file is in the repository yet; do not invent a filename or ship a fake PDF.
- Newsletter signup is not a product capability. Do not treat the current footer form as a requirement.
- Blogs is not a nav destination. A blog page may be added later as an unlinked surface; do not put Blogs in the navbar until explicitly requested.
- Header nav currently uses placeholder `href="/"`; footer uses `#anchor` links whose matching section ids do not yet exist.
- Site frontmatter still contains lorem placeholders. Those are not facts. Replace them from `docs/reference.md` only. Do not treat "Tech Company", "Web Agency", or "Project 1/2" as factual. Do not add employers, projects, skills, metrics, or links that file does not list.
- The skill logos currently on the page are a subset, not the canonical inventory. Intersect on-page skills with `docs/reference.md`; do not invent skills absent from that file.
- Where live site copy (email, socials, title, name) disagrees with `docs/reference.md`, the reference file wins. Empty fields there mean omit, not fall back to old site values.

## Brand Commitments

Public-facing name on the site: Zain Haider. Intro voice is first-person, direct, and professional. Portraits and supporting images referenced by the site: `public/profile.webp`, `public/zainHaider.webp`, `public/paper-bg.webp`, project image slot `public/project.webp`. Canonical contact, links, and identity strings are only in `docs/reference.md` — copy them onto the site when implementing, never into this file.

## Evidence on Hand

- Canonical source: `docs/reference.md` (gitignored). It is the only approved source for contact, links, GitHub projects, experience, skills, and education.
- Also real on disk: portrait photos and paper background referenced above.
- Absent: resume file. Site experience, project, and about copy remain placeholders until replaced from the reference file.
- Future work must not fabricate jobs, clients, testimonials, metrics, or project case studies, and must not reproduce the reference file's contents anywhere except the live site surfaces that need them.

## Product Principles

1. Hiring is the primary job of the page; client inquiry is secondary. Surfaces should make skills and proof scannable for that decision.
2. Only confirmed identity and real work appear as facts. Placeholders are gaps, not content. `docs/reference.md` is the fact file.
3. Conversion is resume download and inbox contact, not newsletter capture.
4. Public navigation only lists real destinations. Unready surfaces stay unlinked.
5. Preserve confirmed identity across future design work; resolve identity from `docs/reference.md`, not from stale markup.
