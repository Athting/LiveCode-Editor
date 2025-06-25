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
Backend: Node.js, Express
Real-Time: Socket.IO

## File_structure

REALITIME_CODE/
├── 📁 backend/                  # Backend server files
│   └── 🟨 index.js              # Main server entry point (Express/Socket.IO)
│
├── 📁 frontend/                 # Frontend application
│   ├── 📁 dist/                 # Production build output
│   ├── 📁 public/               # Static assets
│   │   └── 🟨 index.html        # Main HTML template
│   │
│   ├── 📁 src/                  # Source code
│   │   ├── 📁 assets/           # Images/fonts
│   │   ├── 🟦 App.css           # Main styles
│   │   ├── 🟦 App.jsx           # Root React component
│   │   └── 🟦 main.jsx          # React entry point
│   │
│   ├── 🟨 .eslint.config.js     # ESLint configuration
│   ├── 🟨 vite.config.js        # Vite configuration
│   ├── 🟨 package.json          # Frontend dependencies
│   └── 🟨 package-lock.json
│
├── 📄 .gitignore               # Git exclusion rules
├── 📄 README.md                # Project documentation
├── 🟨 package.json             # Root project config
└── 🟨 package-lock.json

Key:
📁 = Folder
📄 = Config/documentation
🟨 = JavaScript/JSON file
🟦 = React component
