export const taskExample = `---
number: 69
title: Add a readme
columnId: in-progress
type: docs
epicId: null
releaseId: null
pr: null
---
Read the rohfa folder and try to create a readme accordingly`

export const fr = {
  lang: 'fr',
  siteDesc: 'Rohfa : un gestionnaire de projet simplifié (kanban) pour Windows, dont les données sont de simples fichiers Markdown et qui s’appuie sur un agent IA.',
  nav: { features: 'Fonctionnalités', docs: 'Documentation', faq: 'FAQ', roadmap: 'Roadmap', changelog: 'Changelog', download: 'Télécharger', switchTo: 'English', switchLabel: 'Read this page in English' },
  hero: {
    eyebrow: 'Application de bureau pour Windows',
    title: 'Le gestionnaire de projet que ton agent IA sait lire.',
    lead: 'Rohfa est un Notion/Jira allégé : tâches, epics, notes et releases. Tout est stocké en fichiers Markdown dans ton dépôt, et un agent IA peut implémenter une tâche et ouvrir la PR.',
    version: 'Version',
    size: 'Windows, installeur',
    all: 'Toutes les versions',
    needs: 'Nécessite un agent IA en ligne de commande, git et la CLI GitHub.',
  },
  features: {
    title: 'Ce que fait Rohfa',
    items: [
      { title: 'Tableau de tâches', text: 'Cinq colonnes (À faire, En cours, À valider, Validée, Terminé), un numéro stable par tâche (#069), un type Conventional Commits, et un lien optionnel vers une epic et une release.' },
      { title: 'Notes', text: 'Un éditeur riche avec sauvegarde automatique, enregistré en Markdown. Une note peut être convertie en epic découpée en tâches.' },
      { title: 'Chat avec l’agent IA', text: 'Des conversations avec l’agent dans le dossier du projet : mode, outils, modèle, effort, images collées. Le chat propose une epic, puis la découpe en tâches.' },
      { title: 'Agents', text: 'Le bouton Run lance un agent qui implémente la tâche et ouvre une PR. La tâche passe en « À valider » dès qu’une PR est détectée. L’agent peut te poser une question dans la console, et une epic peut enchaîner ses tâches une par une.' },
      { title: 'Releases', text: 'La console Release lance le workflow GitHub Actions, suit ses étapes, publie la release et passe en Terminé les tâches qu’elle contient.' },
      { title: 'Plusieurs projets, coûts visibles', text: 'Plusieurs projets ouverts en même temps, restaurés au démarrage. La consommation de tokens et le coût s’affichent par tour de chat et par job.' },
    ],
  },
  files: {
    title: 'Des fichiers, pas une base de données',
    lead: 'Un projet est un dossier sur disque. Tout ce que gère Rohfa vit dans `.rohfa/`, en Markdown avec frontmatter YAML ou en JSON. Ton agent IA, ton éditeur ou n’importe quel script peut donc lire et modifier les tâches directement, et Git garde l’historique.',
  },
  steps: {
    title: 'Le parcours d’une tâche',
    lead: 'Cinq colonnes, du premier message de chat à la version publiée.',
    items: [
      ['À faire', 'Tu décris ce que tu veux dans le chat. L’agent propose une epic et la découpe en tâches.'],
      ['En cours', 'Run démarre un agent par tâche. Il implémente et ouvre une PR.'],
      ['À valider', 'Une PR est détectée : la tâche attend ta relecture.'],
      ['Validée', 'Tu as relu la PR et validé la tâche.'],
      ['Terminé', 'La console Release publie la version et clôt les tâches qu’elle contient.'],
    ],
  },
  requirements: {
    title: 'Prérequis',
    items: [
      ['Windows', 'Seul Windows est packagé pour l’instant.'],
      ['Un agent IA', 'Un agent de code en ligne de commande, disponible dans le PATH, pour le chat et les agents. Rohfa fonctionne aujourd’hui avec Claude Code.'],
      ['git et gh', 'Git et la CLI GitHub (authentifiée) servent à détecter les PR, valider les tâches et publier les releases.'],
    ],
  },
  cta: { title: 'Essaie Rohfa', text: 'Installe-le, ouvre un dossier de projet, et crée ta première tâche.' },
  docs: {
    title: 'Documentation',
    lead: 'L’essentiel pour installer Rohfa et comprendre comment il range tes données.',
    toc: 'Sur cette page',
    sections: [
      {
        id: 'installation',
        title: 'Installation',
        html: `<p>Télécharge l’installeur <code>rohfa-x.y.z-setup.exe</code> depuis la <a href="{HOME}">page d’accueil</a>, puis lance-le. L’installation se fait pour l’utilisateur courant et tu peux choisir le dossier.</p>
<p>Avant le premier lancement, vérifie que <code>claude</code>, <code>git</code> et <code>gh</code> sont disponibles dans un terminal, et que <code>gh auth status</code> indique que tu es connecté.</p>
<p>Windows peut afficher un avertissement au premier lancement : voir la <a href="{FAQ}#smartscreen">FAQ</a>.</p>`,
      },
      {
        id: 'mises-a-jour',
        title: 'Mises à jour',
        html: `<p>L’application installée vérifie elle-même si une nouvelle version est disponible et la télécharge. Aucun compte n’est nécessaire.</p>`,
      },
      {
        id: 'premier-projet',
        title: 'Ouvrir un projet',
        html: `<p>Choisis un dossier : ce peut être un dépôt de code existant. Rohfa crée un sous-dossier <code>.rohfa/</code> et n’écrit rien d’autre dans le projet. Tu peux ouvrir plusieurs projets à la fois, ils sont restaurés au démarrage.</p>`,
      },
      {
        id: 'donnees',
        title: 'Format des données',
        html: `<pre><code>&lt;projet&gt;/
  .rohfa/board.json            colonnes + compteur de numéros de tâche
  .rohfa/project.json          options du projet (éditeur, script de release, permissions des agents…)
  .rohfa/tasks/&lt;uuid&gt;.md       une tâche : frontmatter + description en Markdown
  .rohfa/epics/&lt;uuid&gt;.md       une epic
  .rohfa/releases/&lt;uuid&gt;.md    une release (jalon manuel, pas une version semver)
  .rohfa/notes/&lt;uuid&gt;.md       une note
  .rohfa/chats/&lt;uuid&gt;.json     une conversation avec l’agent</code></pre>
<p>Il n’y a pas d’index : Rohfa relit les dossiers à chaque chargement. Un fichier de tâche créé hors de l’app s’écrit <strong>sans</strong> <code>number</code> : Rohfa le numérote au prochain chargement.</p>`,
      },
      {
        id: 'cycle-tache',
        title: 'Cycle de vie d’une tâche',
        html: `<p>Une tâche passe par <strong>À faire</strong>, <strong>En cours</strong> (un agent travaille), <strong>À valider</strong> (une PR est détectée), <strong>Validée</strong> (tu as relu et validé), puis <strong>Terminé</strong> quand la release qui contient son commit est publiée. Les tâches En cours, Validée et Terminé sont verrouillées dans l’interface : éditeur en lecture seule, cartes non déplaçables, suppression masquée.</p>
<p>Si une tâche reste En cours sans agent actif, tu peux la relancer ou la remettre à faire.</p>`,
      },
      {
        id: 'release',
        title: 'Publier une version',
        html: `<p>La console Release de Rohfa lance le workflow GitHub Actions de ton projet (« Nouvelle release »), en suit les étapes, puis « Publier » rend la release publique. Le contrat entre Rohfa et le script de release de ton projet est décrit dans le dépôt de l’application.</p>`,
      },
    ],
  },
  faq: {
    title: 'Questions fréquentes',
    items: [
      { id: 'smartscreen', q: 'Windows affiche « Windows a protégé votre PC ». Que faire ?', a: '<p>L’installeur de Rohfa n’est pas encore signé avec un certificat de code, donc Windows SmartScreen le traite comme un éditeur inconnu. Clique sur <strong>Informations complémentaires</strong>, puis sur <strong>Exécuter quand même</strong>.</p>' },
      { id: 'plateformes', q: 'Rohfa existe-t-il sur macOS et Linux ?', a: '<p>Pas encore. Seul Windows est packagé et publié pour l’instant.</p>' },
      { id: 'agent-ia', q: 'Ai-je besoin d’un agent IA ?', a: '<p>Oui pour le chat et les agents : il faut un agent de code en ligne de commande. Rohfa fonctionne aujourd’hui avec Claude Code (la commande <code>claude</code> dans le PATH). Le tableau, les notes et les releases fonctionnent sans. Les appels passent par ton installation et ton compte ; Rohfa affiche les tokens et le coût de chaque tour et de chaque job.</p>' },
      { id: 'donnees', q: 'Où sont stockées mes données ?', a: '<p>Dans le dossier de ton projet, sous <code>.rohfa/</code>, en fichiers Markdown et JSON. Rohfa n’a pas de base de données ni de compte en ligne. Tu peux commiter ce dossier avec ton code, ou l’ajouter à ton <code>.gitignore</code>.</p>' },
      { id: 'edition', q: 'Puis-je modifier les tâches sans passer par Rohfa ?', a: '<p>Oui, c’est voulu. Un éditeur, un script ou un agent IA peuvent lire et écrire les fichiers. Rohfa relit les dossiers à chaque chargement.</p>' },
      { id: 'git', q: 'Pourquoi git et la CLI GitHub ?', a: '<p>Pour détecter les PR ouvertes par les agents, valider les tâches et lancer les releases. Le workflow d’une tâche repose sur un worktree et une PR par tâche.</p>' },
      { id: 'sources', q: 'Où est le code source ?', a: '<p>Le code source de Rohfa n’est pas public : l’application est distribuée sous forme d’installeur Windows.</p>' },
    ],
  },
  changelog: {
    title: 'Changelog',
    lead: 'L’historique des versions de Rohfa, généré à partir des commits de l’application.',
    empty: 'La liste des versions n’a pas pu être chargée pendant la construction du site.',
    download: 'Télécharger',
  },
  roadmap: {
    title: 'Roadmap',
    lead: 'Ce sur quoi Rohfa travaille, tiré du tableau de tâches de Rohfa lui-même. Il n’y a pas de dates : l’ordre peut changer.',
    groups: [
      {
        name: 'En cours',
        text: 'Du travail déjà démarré, qui arrivera dans une prochaine version.',
        tone: 'doing',
        items: [
          { title: 'Le chat crée et modifie tes tâches', text: 'Aujourd’hui, l’agent écrit les fichiers de tâches lui-même. Rohfa va lui fournir un outil dédié : les tâches créées ou modifiées depuis le chat apparaissent tout de suite sur le tableau, sans recharger le projet.' },
          { title: 'Un espace de travail isolé par tâche', text: 'Run crée un worktree git par tâche et lance l’agent dedans. Deux agents en parallèle, ou un agent et une release, ne se marchent plus dessus.' },
          { title: 'Des agents plus légers et réglables', text: 'Démarrage allégé des sessions autonomes, modèle et effort des agents réglables par projet, et type de la tâche déduit du titre de la PR.' },
        ],
      },
      {
        name: 'À l’étude',
        text: 'Des pistes sans engagement : elles dépendront de la place qu’elles prennent dans l’usage réel.',
        tone: 'todo',
        items: [
          { title: 'D’autres agents IA', text: 'Rohfa s’appuie aujourd’hui sur Claude Code. L’appel à l’agent est déjà isolé derrière une interface (réglage agentProvider). Cela ouvre la porte à d’autres outils de code en ligne de commande.' },
          { title: 'macOS et Linux', text: 'Seul Windows est publié aujourd’hui. Les autres plateformes demandent une chaîne de build dédiée, par exemple un Mac pour l’installeur macOS.' },
          { title: 'Installeur signé', text: 'Signer l’installeur Windows avec un certificat de code supprimerait l’avertissement SmartScreen au premier lancement.' },
        ],
      },
    ],
  },
}
