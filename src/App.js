import { useState } from "react";
import { English } from "./English";
import { Arabic } from "./arabic";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  const [nav, setNav] = useState("");
  return (
    <div className="App">
      <Router>
        <Link to="/"><button onClick={() => setNav("English")} className={nav === "English" ? "active" : ""}>English</button></Link>
        <Link to="/Arabic"><button onClick={() => setNav("Arabic")} className={nav === "Arabic" ? "active" : ""}>Arabic</button></Link>
        <Routes>
          <Route path="/" element={<English />} />
          <Route path="/Arabic" element={<Arabic />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
