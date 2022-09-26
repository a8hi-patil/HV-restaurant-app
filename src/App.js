import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogInPage from "./components/LogInPage/LogInPage";
import Restaurant from "./components/Restaurant/Restaurant";
import Navbar from "./components/Navbar/Navbar";

import Product from "./components/Products/Product";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Restaurant />

        <h1>Welcome to Omkar's Restaurant </h1>

        <Routes>
          <Route excat path="/cart" element={<Product />} />
          <Route excat path="/login" element={<LogInPage />} />
          <Route excat path="" element={<Restaurant />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
