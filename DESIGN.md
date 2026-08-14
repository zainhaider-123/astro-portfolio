---
name: Zain Haider
description: Arcade operator’s service manual — newsprint, plates, exploded assemblies, revision stamps.
colors:
  newsprint: "#e8dcc8"
  ink: "#1a1814"
  stamp: "#c41e3a"
  cyan: "#2a6f97"
  plate: "#f7f1e6"
  desk: "#c4b49a"
typography:
  display:
    fontFamily: "Big Shoulders Display, Arial Narrow, sans-serif"
    fontSize: "clamp(2.75rem, 9vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Big Shoulders Display, Arial Narrow, sans-serif"
    fontSize: "clamp(2rem, 5vw, 3.5rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Big Shoulders Display, Arial Narrow, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Source Sans 3, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Big Shoulders Text, Arial Narrow, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.14em"
rounded:
  none: "0px"
  punch: "999px"
spacing:
  binding: "clamp(2.5rem, 6vw, 4.5rem)"
  section-y: "clamp(3.5rem, 8vw, 6.5rem)"
  fold: "clamp(1.5rem, 4vw, 3.5rem)"
components:
  stamp:
    backgroundColor: "{colors.plate}"
    textColor: "{colors.stamp}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.7rem 1.4rem"
    height: "3.25rem"
  stamp-hover:
    backgroundColor: "{colors.stamp}"
    textColor: "{colors.plate}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.7rem 1.4rem"
    height: "3.25rem"
  stamp-ghost:
    backgroundColor: "{colors.plate}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.7rem 1.4rem"
    height: "3.25rem"
  field:
    backgroundColor: "{colors.plate}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0.5rem 0.75rem"
  plate:
    backgroundColor: "{colors.plate}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "1.5rem 2rem"
---

# Design System: Zain Haider

## Overview

**Creative North Star: "The Book Taped Inside the Cabinet"**

The shipped site is a cabinet service manual on newsprint: hole-punch binding, snipped plates, blueprint drawing boards, numbered balloons, and revision stamps. It is arcade as working paper under office light, not a CRT or a portfolio template.

Display type is manufacturing-plate condensed (Big Shoulders Display). Body is Source Sans 3, sized for a recruiter to finish a paragraph on a phone. Stamp red is reserved for the two hire actions. Blueprint cyan is the drawing layer.

**Key Characteristics:**
- Newsprint field `#e8dcc8` with cabinet ink `#1a1814`
- Snipped-corner plates and hole-punch binding
- Exploded assemblies with cyan balloons
- Stamp CTAs that flood ink on hover via clip-path
- No pixel fonts, scanlines, or neon-on-black

## Colors

Full palette, four working roles plus desk (the punch-through).

### Primary
- **Revision Stamp** (#c41e3a): Outline and hover flood of the hire stamps only.

### Secondary
- **Blueprint Cyan** (#2a6f97): Leaders, balloons, figure IDs, drawing-grid lines.

### Neutral
- **Newsprint Field** (#e8dcc8): Page ground.
- **Cabinet Ink** (#1a1814): Type, rules, module stroke.
- **Plate White** (#f7f1e6): Stuck-on stock and drawing board.
- **Desk** (#c4b49a): Visible through hole punches.

**The Paper Ground Rule.** The site is printed matter under office light. A black CRT field is a different world.

**The Stamp Rule.** Revision red appears on actions only. If it tints a section, it has been overused.

## Typography

**Display Font:** Big Shoulders Display (Arial Narrow fallback)
**Body Font:** Source Sans 3 (system-ui, sans-serif)
**Label Font:** Big Shoulders Text

**Character:** Condensed industrial plates over a recruiter-legible grotesque.

### Hierarchy
- **Display** (900, clamp 2.75rem–6rem, 0.9 leading, -0.03em): Operator name only.
- **Headline** (800, clamp 2rem–3.5rem): Section plates (Notes, Assemblies, Service, Call in).
- **Title** (700, clamp 1.5rem–2.25rem): Machine and role names.
- **Body** (400, 1.0625rem / 1.5, max 70ch): Callouts, notes, form copy.
- **Label** (600, 0.75rem, 0.14em tracking, uppercase): Running head, figure IDs, parts, form labels.

**The Model Plate Rule.** The operator name is one condensed industrial lockup. It does not become a header wordmark.

**The Reading Rule.** Body copy never uses a pixel, decorative, or outline face.

## Layout

Bound manual: left hole-punch gutter `clamp(2.5rem, 6vw, 4.5rem)`, 12-column spread at `lg`, fold gap `clamp(1.5rem, 4vw, 3.5rem)`. More space above a section plate than below it (`section-block` padding). Phone stacks drawing under the plate; stamps stay on the plate so they remain in the first viewport.

Drawing boards carry an actual 16px blueprint grid. That grid is not a page-wide decoration.

**The Fold Rule.** More space above a plate than below it. Equal padding all around is an app frame.

## Elevation & Depth

Ink on stock. Separation is a 1px ink rule, a plate, or a stamp — not drop shadows. Hole punches use a small offset shadow plus inset shade because they are punched through the page. Stamps sit at -2.5° and press to 0° on hover.

**The Overprint Rule.** If it needs a shadow to separate from the page, it is not printed yet.

## Shapes

Plates clip a 14px snipped corner (`polygon`). Stamps and fields are square-cut. Balloons and punches are circles. No pills.

**The Stock Cut Rule.** Corners look like paper and metal plates, not app widgets.

## Components

### Stamp
Primary hire control (`.stamp`). Plate fill, 2px stamp-red rule, label tracking 0.16em, min-height 3.25rem, rotate -2.5°. Hover/focus floods the fill with stamp red via `clip-path: circle()` and sets type to plate. Ghost variant (`.stamp-ghost`) uses ink instead of stamp red.

### Field
1px ink border, plate fill, stamp caret. Placeholder at 55% ink.

### Plate
Stuck-on stock with snipped corner. Used for the name block, education, and the contact form.

### Drawing board
Plate fill plus 16px cyan grid. Hosts exploded assemblies.

### Balloon
28px cyan-ringed circle, plate fill, label numerals. Keys diagram modules to notes.

### Navigation
Running head with 1px ink rule. Label links, stamp hover color. Mobile: checkbox drawer, `MENU` plate control, newsprint panel, ink scrim.

## Do's and Don'ts

### Do:
- **Do** put resume and contact on the model plate so they survive the first viewport.
- **Do** draw projects as exploded assemblies with balloons, not icon tiles.
- **Do** keep factual copy aligned to `docs/reference.md`; no invented employers or metrics.

### Don't:
- **Don't** put a kicker or eyebrow above the operator name.
- **Don't** use pixel fonts, scanlines, phosphor bloom, or Press Start gags.
- **Don't** ship a newsletter or put Blogs in the navbar.
- **Don't** tint whole sections with stamp red.
