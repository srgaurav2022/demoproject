import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Timezone from "./components/Timezone";
import PrevPage from "./components/PrevPage";
import NextPage from "./components/NextPage";
import CurrPage from "./components/CurrPage";

function App() {
  return (
    <Router>
      <Header />
      <Timezone />
      {/* <CurrPage /> */}
      <Routes>
        <Route path="/" element={<CurrPage />} />
        <Route path="/PrevPage" element={<PrevPage />} />
        <Route path="/NextPage" element={<NextPage />} />
      </Routes>
    </Router>
  );
}

export default App;
