# SecureCode Arena

<p align="center">
  <img src="public/cover.png" alt="SecureCode Arena" width="900" />
</p>

<p align="center"><strong>Which AI models write secure code?</strong></p>

SecureCode Arena is a defensive benchmark of security in AI-generated code. It measures how often models introduce targeted HIGH or MEDIUM severity vulnerabilities when asked to implement ordinary functional requirements—with no security guidance in the prompt.

## At a glance

- 9 models: 3 locally hosted small language models (SLMs) and 6 cloud LLMs
- 16 neutral coding prompts across Python, Go, and JavaScript
- 3 independent generations per prompt, for 432 generated files
- Parse/compile gate followed by Bandit, Gosec, and Semgrep analysis
- Findings deduplicated by CWE and line, then grouped by severity

The headline result: the local SLMs averaged a 31.2% vulnerable-prompt rate, compared with 15.6% for cloud LLMs. Four cloud models reached 14 secure prompts out of 16.

## What the site includes

- An interactive leaderboard and model profiles
- Results by language, vulnerability class, and severity
- The study methodology and project prompts
- Research figures and the underlying site data

The site is static and built with [Astro](https://astro.build/).

## Run locally

```bash
npm install
npm run dev
```

To create a production build:

```bash
npm run build
```

The generated static site is written to `dist/`.

## Project structure

```text
src/pages/        Site routes and model pages
src/data/         Benchmark data and findings
src/components/   Shared UI components
public/           Images, logos, figures, and other public assets
```

## Scope and limitations

This is a defensive static-analysis benchmark, not a proof that a model's output is safe or unsafe in every context. Results are descriptive: the sample is limited to nine models, cloud sampling settings are not fully controlled, and static analyzers can produce false positives and false negatives. Generated code is not executed.

## Credits

Built by [Blessed (@plur1bu5)](https://github.com/plur1bu5) and [Maryam (@iblihimaryam306-dotcom)](https://github.com/iblihimaryam306-dotcom).
