import Header from "./components/Header";
import Board from "./components/Board";
import Footer from "./components/Footer";
import Settings from "./components/Settings";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SettingsProvider } from "./context/SettingsContext";

function App() {
  return (
    <SettingsProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Board />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </Router>
    </SettingsProvider>
  );
}

export default App;
