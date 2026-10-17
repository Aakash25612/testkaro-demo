# TestKaro · IELTS Mind Map Academy

Static site for IELTS Mind Map Academy, with the TestKaro mock-test desk built in. No build step.

## Pages
Routes are handled in the browser. On Vercel, every path falls back to `index.html`.

- `/` homepage bento: IELTS, PTE, TOEFL, GMAT, GRE, Spoken English
- `/ielts` `/pte` `/toefl` `/gmat` `/gre` `/spoken-english`
- `/testimonials` reviews and sample score-report slots
- Student desk and admin panel from the demo bar

Spoken English levels: `/spoken-english#beginner`, `#intermediate`, `#advanced`.

Colours follow the academy logo: plum, gold, warm white. Reviews on the testimonials page are sample layout copy. Replace them with real student words and screenshots before a public launch.

## Deploy to Vercel
Import this repo. Framework preset: **Other**. Leave the build command and output directory empty.

## Run locally
```bash
python3 -m http.server 8765
```
Open `http://127.0.0.1:8765/`. Direct routes such as `/ielts` need the Vercel rewrite, or open them from the homepage links after the first page load (the demo server above does not rewrite unknown paths).
