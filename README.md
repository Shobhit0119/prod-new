Prodmaster — Login UI
======================

This repo contains an Angular v19 login UI implementation with a modern gradient background and a simple reactive form.

Features
- Full-page gradient background and responsive login card
- Project name: `prodmaster` and slogan: **Manufacturing Excellence!**
- Reactive form with validation (email, password)
- Mock `AuthService` for simulated sign-in

How to add your logo
1. Copy your logo image file (PNG/SVG/JPG) into the project at `src/assets/logo.png` (exact filename). Example using terminal:

   cp /path/to/your/logo.png "src/assets/logo.png"

2. The login page will automatically attempt to load `/assets/logo.png` and hide the image if it cannot be found.

Run locally
1. npm install
2. npm start

Files changed / added
- `src/app/login/*` — simplified component using Reactive Forms and updated UI
- `src/app/services/auth.service.ts` — mock login service
- `src/app/app.routes.ts` — routes updated to use `/login`

Notes
- The UI is built to be easy to read and extend. If you'd like the form to call your real backend, tell me the authentication endpoint and I will wire it up.
