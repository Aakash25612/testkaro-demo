# TestKaro · IELTS Mind Map Academy

Site for IELTS Mind Map Academy, with the TestKaro mock-test desk. No build step.

## Files
- `index.html` — the site: layout, routes, test room, student desk, admin
- `content.js` — **the academy team's write-ups.** Paste text here; nothing else needs editing
- `mocks.js` — the mock paper for each exam (passages, questions, prompts, model answers)
- `images/` — `logo.jpg`, and `founder.jpg` when you have it

## Pages
Routes are handled in the browser. On Vercel, any path that is not a real file falls back to `index.html`.

- `/` homepage, bento grid: hero, programmes, mock desk, route, founder, FAQ, contact
- `/ielts` `/pte` `/toefl` `/gmat` `/gre` exam overview: official format, score scale, course write-up
- `/ielts/mock-test` `/pte/mock-test` `/toefl/mock-test` `/gmat/mock-test` `/gre/mock-test` a separate mock page for each exam
- `/spoken-english` three levels (`#beginner`, `#intermediate`, `#advanced`)
- `/founder`, `/testimonials`
- `/student` student desk, `/admin` payments, packs, tests, students and messages

Each mock has its own sections and its own scale:

| Exam  | Mock sections                              | Scored as                       |
|-------|--------------------------------------------|---------------------------------|
| IELTS | Reading, Writing Task 2                    | Band 0–9                        |
| PTE   | Reading, Write Essay                       | 10–90                           |
| TOEFL | Reading, Academic Discussion               | Band 1–6 (January 2026 scale)   |
| GMAT  | Quantitative, Verbal, Data Insights        | 205–805, sections 60–90         |
| GRE   | Analytical Writing, Verbal, Quantitative   | 130–170 each, Writing 0–6       |

## Adding the team's write-ups
Open `content.js`. Each exam has `intro`, `course` and `mock`. Paste the text between the quotes. Use `\n\n` for a new paragraph.
While `showSlots` is `true`, every empty field shows a dashed "write-up goes here" box so the team can see where it lands. Set it to `false` before launch.

## Motion
Page transitions (curtain wipe), scroll reveals, word-by-word headings, counters, cursor spotlight and tilt on cards, a drawn route line, and a marquee. Everything switches off for visitors who set "reduce motion" on their device.

## Settings
`FOUNDER_LINKEDIN` and `WHATSAPP` sit at the top of the script in `index.html`.

## Deploy to Vercel
Import this repo. Framework preset: **Other**. Leave the build command and output directory empty.
Custom domain: Vercel → Project → Settings → Domains → add the domain, then set the DNS records Vercel shows at the registrar.

## Run locally
```bash
python3 -m http.server 8765
```
Open `http://127.0.0.1:8765/`. In-app links work from the homepage. A refresh on a direct path such as `/ielts/mock-test` needs the Vercel rewrite.
