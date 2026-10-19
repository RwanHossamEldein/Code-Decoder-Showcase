# CodeDecoder — Product Website

The official bilingual website for **CodeDecoder**: an AI-powered companion that explains code, visualizes algorithms, helps you debug, and teaches you to read code with confidence — in **English or Arabic**, on **mobile and web**.

🌐 **[Visit the website](https://codedecoder-landing-page.lovable.app)**

> This repository contains the **product website**, not the mobile application or its AI analysis engine. The Play Store destination has not been supplied yet; its button is intentionally disabled and marked “Coming soon.”

---

## ✨ What CodeDecoder does

| Capability | Description |
| --- | --- |
| AI code explanations | Line-by-line walkthroughs or a general summary of any snippet |
| Algorithm visualization | Step-by-step animations that make logic visible |
| Debugging assistance | Error detection, explanations, and suggested corrected code |
| Output prediction | What the code will print or return before you run it |
| Complexity analysis | Time and space complexity explained in plain language |
| Flexible input | Paste code, upload a file, or snap a photo of code |
| Bilingual | Full English and Arabic support with RTL layout |
| Personalization | Light/dark themes, profiles, and saved session history |
| Algorithms library | Searchable classic algorithms with complexity at a glance |

These are capabilities of the CodeDecoder product, not tools executed by this website.

## 🖥️ Website experience

- **One scrolling document** — branded cover, introduction, grouped features, four-step workflow, screenshot showcase (phone + web), about section, and feedback form.
- **Bilingual EN/AR** with right-to-left layout and a remembered language preference.
- **Brand-true design** — charcoal surfaces, the app's lime-green branding, subtle entrance animations, floating logo, scroll reveals, and reduced-motion support.
- **Real screenshots** from the mobile app and the web app, with full-size viewing dialogs.
- **Accessible** — mobile navigation, keyboard focus indicators, and page-specific sharing metadata.
- **Working feedback form** — validation, loading/error/success states, and secure message storage in Lovable Cloud.

## 🛠️ Technology

| Area | Stack |
| --- | --- |
| Application | TanStack Start, TanStack Router, React 19, TypeScript |
| Styling | Tailwind CSS v4, semantic CSS tokens |
| Interface | Radix UI / shadcn-style controls, Lucide icons |
| Data and validation | TanStack Query, Zod |
| Feedback storage | Lovable Cloud with row-level access restrictions |
| Tests | Vitest, Testing Library |
| Development | Vite, Bun |

## 🚀 Local development

Install a current Node.js LTS release and Bun, clone your repository, and open its root directory:

```sh
bun install
bun run dev
```

Use the address printed by the development server. The managed Lovable preview runs at port 8080.

### Configuration

Lovable manages the connected backend configuration. For an independently configured environment, the browser client expects `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY`, and `VITE_SUPABASE_PROJECT_ID`; feedback server functions expect `SUPABASE_URL` and `SUPABASE_PUBLISHABLE_KEY` at runtime.

Do not commit credentials or copy server-only secrets into browser variables. Do not edit generated integration files to change hosted settings. A disconnected local environment can render the website, but feedback submission needs a reachable backend with the existing table, grants, policies, and throttle trigger.

## 📜 Useful commands

```sh
bun run test          # Run the test suite
bun run test:watch    # Watch tests while developing
bun run lint          # Check lint rules
bun run format        # Format the project
bun run build         # Create a production build outside the managed preview
```

## 🗂️ Project map

```text
src/
  assets/                    Managed image pointers (app + web screenshots, branding)
  components/site/           Header, footer, scrolling sections, feedback
  components/ui/             Shared interface controls
  integrations/supabase/     Generated Cloud clients and types
  lib/                       Translations, asset URLs, feedback schema/function
  routes/                    Root layout, home, legacy section redirects
  test/                      Validation and routing tests
  styles.css                 Theme tokens, animations, shared styles
AGENTS.md                    Project architecture conventions
roadmap.md                   Current task checklist
```

## 💬 Feedback flow and privacy

Visitors provide **name, email, message type, and message**; no subject is requested. The same Zod schema validates entries before sending and on the server. A hidden honeypot and minimum completion time discourage automated spam; the database additionally throttles submissions by email.

The public server function inserts into `website_feedback` using an insert-only, row-level-security-scoped client. It derives the legacy stored subject from the validated message type for compatibility. Visitors cannot list or read submitted personal information. Failed submissions keep the visitor's entries available for retry.

**Messages are stored in Lovable Cloud; email delivery is not configured.** Authorized project members can review submissions through Lovable's backend tools. Avoid including real visitor information in screenshots, tests, or public exports.

## 🧰 Maintaining the website

- Update English and Arabic copy together in `src/lib/i18n.tsx`.
- Keep section content in `WebsiteSections.tsx`; home composes the sections in order.
- Preserve redirects from `/features`, `/showcase`, `/about`, and `/contact` to home anchors.
- Define palette and animation styles in `src/styles.css`; respect reduced-motion preferences.
- Use managed asset pointers from `src/lib/shots.ts` rather than hotlinked images.
- Replace the current website destination if a separate product web app is provided. Enable the Play Store button only when its actual listing URL is available.
- Run validation and routing tests after changing the form or navigation. Check feedback end-to-end against the connected backend before release.

## 📦 Publishing

Publish through the Lovable editor to update the hosted website. Editing the preview does not automatically update the published version. GitHub integration can keep source changes synchronized with your connected repository.

## 📄 License and assets

No open-source license is declared in this repository. The supplied CodeDecoder branding and screenshots should not be redistributed without the owner's permission.
