<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep website section content in shared site sections, composing the home page as one scrolling document; legacy content routes reuse sections so old links remain useful.
- Feedback uses a shared Zod schema, a public server function with an RLS-scoped insert-only client, and database throttling; visitors cannot read submitted personal information.
