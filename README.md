# TestKaro · IELTS Mind Map Academy

Site for IELTS Mind Map Academy, with the TestKaro mock-test desk. No build step.

## Pages
Routes are handled in the browser. On Vercel, every path falls back to `index.html`.

- `/` homepage bento: IELTS, PTE, TOEFL, GMAT, GRE, Spoken English
- `/ielts` `/pte` `/toefl` `/gmat` `/gre` `/spoken-english`
- `/testimonials` reviews and score reports
- `/student` student desk
- `/admin` payments, packs, tests and students

Spoken English levels: `/spoken-english#beginner`, `#intermediate`, `#advanced`.

Colours follow the academy logo: plum, gold, warm white.

## Deploy to Vercel
Import this repo. Framework preset: **Other**. Leave the build command and output directory empty.

## Run locally
```bash
python3 -m http.server 8765
```
Open `http://127.0.0.1:8765/`. In-app links work from the homepage. A refresh on a direct path such as `/ielts` needs the Vercel rewrite.
