src/
├── assets/              # Images, icons, fonts
│   ├── images/
│   ├── icons/
│   └── logo.svg
│
├── components/           # Reusable UI components
│   ├── Button.jsx
│   ├── Input.jsx
│   ├── Modal.jsx
│   └── index.js
│
├── layouts/              # Page layouts (Header, Sidebar)
│   ├── MainLayout.jsx
│   └── AuthLayout.jsx
│
├── pages/                # Pages (Route-based)
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Dashboard.jsx
│   └── NotFound.jsx
│
├── routes/               # React Router config
│   └── index.jsx
│
├── hooks/                # Custom hooks
│   └── useAuth.js
│
├── services/             # API calls
│   ├── api.js
│   └── auth.service.js
│
├── store/                # State management
│   └── auth.store.js
│
├── utils/                # Helper functions
│   ├── formatDate.js
│   └── constants.js
│
├── styles/               # Global styles
│   └── index.css
│
├── App.jsx               # App root
├── main.jsx              # Vite entry
└── index.css             # Tailwind entry
