# Real-Time Code Editor
🚀 A collaborative code editor for seamless, real-time coding with teammates.

## ✨ Features

- 💻 Live Code Sync
  Real-time updates across all clients using Socket.IO, ensuring instant collaboration.

- 📜 Multi-Language Support
  Syntax highlighting for JavaScript, Python, Java, C++ with Monaco Editor (VS Code-like experience).

- 👥 Typing Indicators
  See who's typing with live user presence indicators for better teamwork.

- 🔗 Room Management
  Create, join, and share rooms via clipboard links - supports multiple concurrent sessions.

## 🛠️ Tech_Stack

Frontend: HTML5, CSS3, JavaScript, Monaco Editor
<br>
Backend: Node.js, Express
<br>
Real-Time: Socket.IO
<br>

REALITIME_CODE/
├── 📁 backend/                  # Backend server files <br>
│   └── 🟨 index.js              # Main server entry point (Express/Socket.IO) <br>
│<br>
├── 📁 frontend/                 # Frontend application <br>
│   ├── 📁 dist/                 # Production build output <br>
│   ├── 📁 public/               # Static assets <br>
│   │   └── 🟨 index.html        # Main HTML template <br>
│   │ <br>
│   ├── 📁 src/                  # Source code <br>
│   │   ├── 📁 assets/           # Images/fonts <br>
│   │   ├── 🟦 App.css           # Main styles <br>
│   │   ├── 🟦 App.jsx           # Root React component <br>
│   │   └── 🟦 main.jsx          # React entry point <br>
│   │
│   ├── 🟨 .eslint.config.js     # ESLint configuration <br>
│   ├── 🟨 vite.config.js        # Vite configuration <br>
│   ├── 🟨 package.json          # Frontend dependencies <br>
│   └── 🟨 package-lock.json
│ <br>
├── 📄 .gitignore               # Git exclusion rules <br>
├── 📄 README.md                # Project documentation <br>
├── 🟨 package.json             # Root project config <br>
└── 🟨 package-lock.json     <br>

