# 🎮 Gestion Salle PS3 — Dashboard

Une application web moderne pour gérer les cotisations des membres et suivre les recettes de caisse d'une salle de jeux PS3.

## 🚀 Fonctionnalités

- **Suivi des Cotisations** : Enregistrez les cotisations mensuelles (10 000 F/mois) pour chaque membre
- **Objectif de Financement** : Suivez la progression vers l'objectif matériel (264 000 F)
- **Encaissements Quotidiens** : Enregistrez les recettes brutes du jour
- **Historique** : Consultez l'historique complet des transactions
- **Persistance** : Les données sont sauvegardées localement dans le navigateur

## 🛠️ Installation

### Prérequis
- Node.js 16+ et npm

### Étapes

```bash
# Cloner le repo
git clone https://github.com/steevedji51-cell/ps3-room-dashboard.git
cd ps3-room-dashboard

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev

# L'app s'ouvrira automatiquement sur http://localhost:3000
```

## 📦 Build pour la Production

```bash
npm run build
```

Les fichiers optimisés seront générés dans le dossier `dist/`.

## 📁 Structure du Projet

```
ps3-room-dashboard/
├── src/
│   ├── components/
│   │   ├── Header.jsx           # En-tête de l'application
│   │   ├── GoalCard.jsx         # Suivi de l'objectif
│   │   ├── ContributionsCard.jsx # Tableau des cotisations
│   │   └── RevenueCard.jsx      # Gestion des recettes
│   ├── App.jsx                  # Composant principal
│   ├── index.css                # Styles globaux
│   └── main.jsx                 # Point d'entrée React
├── index.html                   # HTML principal
├── vite.config.js              # Configuration Vite
├── package.json                # Dépendances du projet
└── README.md                   # Ce fichier
```

## 🎨 Technologies Utilisées

- **React 18** : Framework UI
- **Vite** : Build tool ultra-rapide
- **CSS3** : Styles modernes avec variables CSS
- **LocalStorage** : Persistance des données

## 📊 Données Gérées

### Cotisations
- Membres : Steeve, Éphraïm, Pamela
- Mois : M1 à M8 (M8 = 8 000 F, autres = 10 000 F)
- État : Payé ou Non-payé (toggle en cliquant)

### Recettes
- Date d'enregistrement (format JJ/MM)
- Montant en F CFA
- Nom de la personne de garde
- Historique complet

## 💾 Stockage des Données

Toutes les données sont stockées dans `localStorage` du navigateur. Les données persistent même après fermeture de l'application.

## 📱 Responsive Design

L'application est entièrement responsive et fonctionne sur :
- Desktop (Chrome, Firefox, Safari, Edge)
- Tablette
- Mobile

## 🤝 Contribution

Les contributions sont bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## 📄 Licence

MIT

## 📞 Support

Pour toute question, ouvrez une issue sur GitHub.
