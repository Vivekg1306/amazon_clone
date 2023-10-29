import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";

function App() {
  return (
    <Router>
      <Header />
      <div className="app">
        <Routes>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/login" element={<Login />}></Route>
          {/* This is the default route */}
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
