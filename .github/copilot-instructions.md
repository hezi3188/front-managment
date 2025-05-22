- Use TypeScript for all React components.
- **Do not** leave any commented-out code in the codebase.
- **Do not** add comments unless the logic is truly complex and non-obvious.
- If a component exceeds **120 lines**, split it into a new file.
- Each component must be placed in a new file.
- Use `tss-react/mui` for all styling.
- Each component **must have its own dedicated style file** named `[componentName]Style.ts`.
- Extract all literal values outside the component body:
  - Texts, labels, and numeric constants should be defined as `const` at the top of the file or in a shared `constants.ts`.
  - Example:
  ```ts
  const TITLE_TEXT = 'מסך ראשי';
  const REFRESH_INTERVAL_MS = 1 * 30 * 1000;
  ```
- If component use props Use `React.FC<Props>` for functional components just if needed.
- Use clsx for conditional classes, and use props in 'tss-react/mui' for conditional styles.
