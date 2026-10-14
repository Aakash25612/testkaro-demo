# TestKaro mock test platform (frontend demo)

Static demo: no build step, no dependencies. All data is sample data; payments, emails and AI scoring are simulated.

## Deploy to Vercel
- Drag-and-drop: unzip, then on vercel.com > Add New > Project, upload the `testkaro-demo` folder.
- CLI: `cd testkaro-demo && npx vercel --prod`
- GitHub: push this folder to a repo and import it in Vercel. Framework preset: **Other**. Leave build command and output directory empty.

## Run locally
Open `index.html` in a browser, or run `npx serve .`
