import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Projects from "./Pages/Projects";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Projects />} />
      </Routes>
    </Router>
  );
}
export default App;
