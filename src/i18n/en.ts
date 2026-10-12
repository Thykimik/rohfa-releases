import type { Dict } from './index'

export const en: Dict = {
  lang: 'en',
  siteDesc: 'Rohfa: a simplified kanban project manager for Windows whose data is plain Markdown files, and which relies on an AI agent.',
  nav: { features: 'Features', docs: 'Docs', faq: 'FAQ', roadmap: 'Roadmap', changelog: 'Changelog', download: 'Download', switchTo: 'Français', switchLabel: 'Lire cette page en français' },
  hero: {
    eyebrow: 'Desktop app for Windows',
    title: 'The project manager your AI agent can read.',
    lead: 'Rohfa is a lightweight Notion/Jira: tasks, epics, notes and releases. Everything is stored as Markdown files in your repo, and an AI agent can implement a task and open the PR.',
    version: 'Version',
    size: 'Windows, installer',
    all: 'All versions',
    needs: 'Requires a command-line AI agent, git and the GitHub CLI.',
  },
  features: {
    title: 'What Rohfa does',
    items: [
      { title: 'Task board', text: 'Five columns (To do, In progress, To validate, Validated, Done), a stable number per task (#069), a Conventional Commits type, and an optional link to an epic and a release.' },
      { title: 'Notes', text: 'A rich editor with autosave, stored as Markdown. A note can be converted into an epic split into tasks.' },
      { title: 'Chat with the AI agent', text: 'Conversations with the agent inside the project folder: mode, tools, model, effort, pasted images. The chat proposes an epic, then splits it into tasks.' },
      { title: 'Agents', text: 'The Run button starts an agent that implements the task and opens a PR. The task moves to “To validate” as soon as a PR is detected. The agent can ask you a question in the console, and an epic can chain its tasks one after another.' },
      { title: 'Releases', text: 'The Release console triggers the GitHub Actions workflow, follows its steps, publishes the release and moves the tasks it contains to Done.' },
      { title: 'Many projects, visible costs', text: 'Several projects open at once, restored on startup. Token usage and cost are shown per chat turn and per job.' },
    ],
  },
  files: {
    title: 'Files, not a database',
    lead: 'A project is a folder on disk. Everything Rohfa manages lives in `.rohfa/`, as Markdown with YAML frontmatter or as JSON. Your AI agent, your editor or any script can read and edit tasks directly, and Git keeps the history.',
  },
  steps: {
    title: 'The life of a task',
    lead: 'Five columns, from the first chat message to the published version.',
    items: [
      ['To do', 'You describe what you want in the chat. The agent proposes an epic and splits it into tasks.'],
      ['In progress', 'Run starts one agent per task. It implements and opens a PR.'],
      ['To validate', 'A PR is detected: the task waits for your review.'],
      ['Validated', 'You reviewed the PR and validated the task.'],
      ['Done', 'The Release console publishes the version and closes the tasks it contains.'],
    ],
  },
  requirements: {
    title: 'Requirements',
    items: [
      ['Windows', 'Only Windows is packaged for now.'],
      ['An AI agent', 'A command-line coding agent available on your PATH, for chat and agents. Rohfa works with Claude Code today.'],
      ['git and gh', 'Git and the (authenticated) GitHub CLI are used to detect PRs, validate tasks and publish releases.'],
    ],
  },
  cta: { title: 'Try Rohfa', text: 'Install it, open a project folder, and create your first task.' },
  docs: {
    title: 'Documentation',
    lead: 'The essentials to install Rohfa and understand how it stores your data.',
    toc: 'On this page',
    sections: [
      {
        id: 'installation',
        title: 'Installation',
        html: `<p>Download the <code>rohfa-x.y.z-setup.exe</code> installer from the <a href="{HOME}">home page</a>, then run it. It installs for the current user and you can pick the folder.</p>
<p>Before the first launch, check that <code>claude</code>, <code>git</code> and <code>gh</code> are available in a terminal, and that <code>gh auth status</code> shows you are logged in.</p>
<p>Windows may show a warning on first launch: see the <a href="{FAQ}#smartscreen">FAQ</a>.</p>`,
      },
      {
        id: 'mises-a-jour',
        title: 'Updates',
        html: `<p>The installed app checks by itself whether a new version is available and downloads it. No account is needed.</p>`,
      },
      {
        id: 'premier-projet',
        title: 'Opening a project',
        html: `<p>Pick a folder: it can be an existing code repository. Rohfa creates a <code>.rohfa/</code> subfolder and writes nothing else into the project. You can open several projects at once, and they are restored on startup.</p>`,
      },
      {
        id: 'donnees',
        title: 'Data format',
        html: `<pre><code>&lt;project&gt;/
  .rohfa/board.json            columns + task number counter
  .rohfa/project.json          project options (editor, release script, agent permissions…)
  .rohfa/tasks/&lt;uuid&gt;.md       a task: frontmatter + Markdown description
  .rohfa/epics/&lt;uuid&gt;.md       an epic
  .rohfa/releases/&lt;uuid&gt;.md    a release (a manual milestone, not a semver version)
  .rohfa/notes/&lt;uuid&gt;.md       a note
  .rohfa/chats/&lt;uuid&gt;.json     a conversation with the agent</code></pre>
<p>There is no index: Rohfa rereads the folders on every load. A task file created outside the app is written <strong>without</strong> a <code>number</code>: Rohfa numbers it on the next load.</p>`,
      },
      {
        id: 'cycle-tache',
        title: 'Task lifecycle',
        html: `<p>A task goes through <strong>To do</strong>, <strong>In progress</strong> (an agent is working), <strong>To validate</strong> (a PR is detected), <strong>Validated</strong> (you reviewed and validated it), then <strong>Done</strong> once the release containing its commit is published. In progress, Validated and Done tasks are locked in the UI: read-only editor, cards that can’t be dragged, delete hidden.</p>
<p>If a task stays In progress with no active agent, you can restart it or put it back to To do.</p>`,
      },
      {
        id: 'release',
        title: 'Publishing a version',
        html: `<p>Rohfa’s Release console triggers your project’s GitHub Actions workflow (“New release”), follows its steps, and “Publish” makes the release public. The contract between Rohfa and your project’s release script is described in the application repository.</p>`,
      },
    ],
  },
  faq: {
    title: 'Frequently asked questions',
    items: [
      { id: 'smartscreen', q: 'Windows says “Windows protected your PC”. What do I do?', a: '<p>The Rohfa installer is not signed with a code-signing certificate yet, so Windows SmartScreen treats it as coming from an unknown publisher. Click <strong>More info</strong>, then <strong>Run anyway</strong>.</p>' },
      { id: 'plateformes', q: 'Is Rohfa available on macOS and Linux?', a: '<p>Not yet. Only Windows is packaged and published for now.</p>' },
      { id: 'agent-ia', q: 'Do I need an AI agent?', a: '<p>Yes for chat and agents: you need a command-line coding agent. Rohfa works with Claude Code today (the <code>claude</code> command on your PATH). The board, notes and releases work without it. Calls go through your own installation and account; Rohfa shows the tokens and cost of every turn and job.</p>' },
      { id: 'donnees', q: 'Where is my data stored?', a: '<p>In your project folder, under <code>.rohfa/</code>, as Markdown and JSON files. Rohfa has no database and no online account. You can commit that folder with your code, or add it to your <code>.gitignore</code>.</p>' },
      { id: 'edition', q: 'Can I edit tasks without going through Rohfa?', a: '<p>Yes, by design. An editor, a script or an AI agent can read and write the files. Rohfa rereads the folders on every load.</p>' },
      { id: 'git', q: 'Why git and the GitHub CLI?', a: '<p>To detect the PRs opened by agents, validate tasks and run releases. A task’s workflow relies on one worktree and one PR per task.</p>' },
      { id: 'sources', q: 'Where is the source code?', a: '<p>Rohfa’s source code is not public: the app is distributed as a Windows installer.</p>' },
    ],
  },
  changelog: {
    title: 'Changelog',
    lead: 'The version history of Rohfa, generated from the application’s commits. Release notes are written in French and translated here.',
    empty: 'The version list could not be loaded while building the site.',
    download: 'Download',
  },
  roadmap: {
    title: 'Roadmap',
    lead: 'What Rohfa is working on, taken from Rohfa’s own task board. There are no dates: the order can change.',
    groups: [
      {
        name: 'In progress',
        text: 'Work that has already started and will land in an upcoming version.',
        tone: 'doing',
        items: [
          { title: 'The chat creates and edits your tasks', text: 'Today, the agent writes task files itself. Rohfa will give it a dedicated tool: tasks created or changed from the chat show up on the board right away, without reloading the project.' },
          { title: 'An isolated workspace per task', text: 'Run creates one git worktree per task and starts the agent inside it. Two agents in parallel, or an agent and a release, no longer step on each other.' },
          { title: 'Lighter, tunable agents', text: 'A lighter startup for autonomous sessions, model and effort for agents settable per project, and the task type inferred from the PR title.' },
        ],
      },
      {
        name: 'Under consideration',
        text: 'Ideas with no commitment: they depend on how much they matter in real use.',
        tone: 'todo',
        items: [
          { title: 'Other AI agents', text: 'Rohfa relies on Claude Code today. The call to the agent is already isolated behind an interface (the agentProvider setting). That opens the door to other command-line coding tools.' },
          { title: 'macOS and Linux', text: 'Only Windows is published today. Other platforms need a dedicated build setup, for example a Mac for the macOS installer.' },
          { title: 'Signed installer', text: 'Signing the Windows installer with a code-signing certificate would remove the SmartScreen warning on first launch.' },
        ],
      },
    ],
  },
}
