# TestKaro · IELTS Mind Map Academy

Site for IELTS Mind Map Academy, with the TestKaro mock-test desk. No build step.

## Pages
Routes are handled in the browser. On Vercel, every path falls back to `index.html`.

- `/` homepage bento: IELTS, PTE, TOEFL, GMAT, GRE, Spoken English
- `/ielts` `/pte` `/toefl` `/gmat` `/gre` `/spoken-english`
- `/founder` photograph frame and LinkedIn, before testimonials
- `/testimonials` reviews and score reports

The homepage also has a founder bento, an FAQ, a contact form, a Library panel, and a bottom bar. Place the founder photograph at `images/founder.jpg`. Set `FOUNDER_LINKEDIN` and `WHATSAPP` at the top of the script in `index.html`. Contact notes stay in this browser and appear under Admin → Messages.
- `/student` student desk
- `/admin` payments, packs, tests, students and messages

Spoken English levels: `/spoken-english#beginner`, `#intermediate`, `#advanced`.

Colours follow the academy logo: plum, gold, warm white.

## Deploy to Vercel
Import this repo. Framework preset: **Other**. Leave the build command and output directory empty.

## Run locally
```bash
python3 -m http.server 8765
```
Open `http://127.0.0.1:8765/`. In-app links work from the homepage. A refresh on a direct path such as `/ielts` needs the Vercel rewrite.
