# Dezen Homepage

Standalone landing page for the Dezen ecosystem. It links out to the three products:

| Product           | Env var                | Default                        |
| ----------------- | ---------------------- | ------------------------------ |
| DezenMart         | `VITE_MARKETPLACE_URL` | https://dezenmart.com          |
| DezenFoods        | `VITE_FOOD_URL`        | https://foods.dezenmart.com    |
| DezenExpress      | `VITE_EXPRESS_URL`     | https://express-dezen.netlify.app |

Copy `.env.example` to `.env` and set the URLs for your environment.

## Scripts

```bash
pnpm install
pnpm dev       # http://localhost:5173
pnpm build     # outputs to dist/
pnpm preview
```
