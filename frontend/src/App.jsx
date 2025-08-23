import { useEffect, useState } from "react";
import "./App.css";
import io from "socket.io-client";
import Editor from "@monaco-editor/react";

const socket = io("http://localhost:5000");

const App = () => {
  const [joined, setJoined] = useState(false);
  const [roomId, setRoomId] = useState("");
  const [userName, setUserName] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState("// start your code here");
  const [copySuccess, setCopySuccess] = useState("");
  const [users, setUsers] = useState([]);
  const [typing, setTyping] = useState("");
<<<<<<< HEAD
  const [output, setOutput] = useState("");
  const [version, setVersion] = useState("*");
  const [loading, setLoading] = useState(false);

  // Socket listeners
  useEffect(() => {
    socket.on("userJoined", (users) => setUsers(users));
    socket.on("codeUpdate", (newCode) => setCode(newCode));
    socket.on("userTyping", (user) => {
      setTyping(`${user.slice(0, 8)}... is typing`);
      setTimeout(() => setTyping(""), 2000);
    });
    socket.on("languageUpdate", (newLanguage) => setLanguage(newLanguage));
    socket.on("codeResponse", (response) => {
      setOutput(response.run.output || "No output");
      setLoading(false);
=======

  useEffect(() => {
    socket.on("userJoined", (users) => {
      setUsers(users);
    });

    socket.on("codeUpdate", (newCode) => {
      setCode(newCode);
    });

    socket.on("userTyping", (user) => {
      setTyping(`${user.slice(0, 8)}... is Typing`);
      setTimeout(() => setTyping(""), 2000);
    });

    socket.on("languageUpdate", (newLanguage) => {
      setLanguage(newLanguage);
>>>>>>> a043745e78a381ba24eabdb9ea08ff1c7f1f7977
    });

    return () => {
      socket.off("userJoined");
      socket.off("codeUpdate");
      socket.off("userTyping");
      socket.off("languageUpdate");
<<<<<<< HEAD
      socket.off("codeResponse");
    };
  }, []);

  // Leave room on tab close
  useEffect(() => {
    const handleBeforeUnload = () => socket.emit("leaveRoom");
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
=======
    };
  }, []);

  useEffect(() => {
    const handleBeforeUnload = () => {
      socket.emit("leaveRoom");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
>>>>>>> a043745e78a381ba24eabdb9ea08ff1c7f1f7977
  }, []);

  const joinRoom = () => {
    if (roomId && userName) {
      socket.emit("join", { roomId, userName });
      setJoined(true);
    }
  };
<<<<<<< HEAD

=======
  
>>>>>>> a043745e78a381ba24eabdb9ea08ff1c7f1f7977
  const leaveRoom = () => {
    socket.emit("leaveRoom");
    setJoined(false);
    setRoomId("");
    setUserName("");
    setCode("// start your code here");
<<<<<<< HEAD
    setOutput("");
  };

=======
  };
  
>>>>>>> a043745e78a381ba24eabdb9ea08ff1c7f1f7977
  const copyRoomId = () => {
    navigator.clipboard.writeText(roomId);
    setCopySuccess("Copied!");
    setTimeout(() => setCopySuccess(""), 2000);
  };
<<<<<<< HEAD

=======
  
>>>>>>> a043745e78a381ba24eabdb9ea08ff1c7f1f7977
  const handleCodeChange = (newCode) => {
    setCode(newCode);
    socket.emit("codeChange", { roomId, code: newCode });
    socket.emit("typing", { roomId, userName });
  };
<<<<<<< HEAD

=======
  
>>>>>>> a043745e78a381ba24eabdb9ea08ff1c7f1f7977
  const handleLanguageChange = (e) => {
    const newLanguage = e.target.value;
    setLanguage(newLanguage);
    socket.emit("languageChange", { roomId, language: newLanguage });
  };
<<<<<<< HEAD

  const runCode = () => {
    setLoading(true);
    socket.emit("compileCode", { code, roomId, language, version });
  };

  // Join page
=======
  

>>>>>>> a043745e78a381ba24eabdb9ea08ff1c7f1f7977
  if (!joined) {
    return (
      <div className="join-container">
        <div className="join-form">
          <h1>🔐 Join a Code Room</h1>
          <input
            type="text"
            placeholder="Room ID"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
          />
          <input
            type="text"
            placeholder="Your Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
<<<<<<< HEAD
          <button onClick={joinRoom}>Join Room</button>
=======
          <button onClick={joinRoom}>Join Room</button> 
>>>>>>> a043745e78a381ba24eabdb9ea08ff1c7f1f7977
        </div>
      </div>
    );
  }

<<<<<<< HEAD
  // Editor page
=======
>>>>>>> a043745e78a381ba24eabdb9ea08ff1c7f1f7977
  return (
    <div className="editor-container">
      <div className="sidebar">
        <div className="room-info">
<<<<<<< HEAD
          <h2>
            Room: <span className="room-id">{roomId}</span>
          </h2>
=======
          <h2>Room: <span className="room-id">{roomId}</span></h2>
>>>>>>> a043745e78a381ba24eabdb9ea08ff1c7f1f7977
          <button onClick={copyRoomId} className="copy-button">
            📋 Copy Room ID
          </button>
          {copySuccess && <span className="copy-success">{copySuccess}</span>}
        </div>

        <div className="user-list-section">
          <h3>👥 Users:</h3>
          <ul>
            {users.map((user, index) => (
              <li key={index}>{user.slice(0, 8)}...</li>
            ))}
          </ul>
        </div>

        <p className="typing-indicator">{typing}</p>

        <select
          className="language-selector"
          value={language}
          onChange={handleLanguageChange}
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="cpp">C++</option>
        </select>

        <button className="leave-button" onClick={leaveRoom}>
          🚪 Leave Room
        </button>
      </div>

      <div className="editor-wrapper">
        <Editor
<<<<<<< HEAD
          height="60%"
=======
          height="100%"
          defaultLanguage={language}
>>>>>>> a043745e78a381ba24eabdb9ea08ff1c7f1f7977
          language={language}
          value={code}
          onChange={handleCodeChange}
          theme="vs-dark"
<<<<<<< HEAD
          options={{ minimap: { enabled: false }, fontSize: 14, padding: { top: 20 } }}
        />
        <button className="run-btn" onClick={runCode} disabled={loading}>
          {loading ? "Running..." : "Execute"}
        </button>
        <textarea
          className="output-console"
          value={output}
          readOnly
          placeholder="Output will appear here..."
=======
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            padding: { top: 20 },
          }}
>>>>>>> a043745e78a381ba24eabdb9ea08ff1c7f1f7977
        />
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> a043745e78a381ba24eabdb9ea08ff1c7f1f7977
