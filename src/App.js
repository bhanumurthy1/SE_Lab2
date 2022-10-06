import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./My-Client/Home";
import News from "./My_New_RapidAPI/News";
import Sum from "./My-AdditionForm/Sum";
import Header from "./My-Client/Header";

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/news" element={<News />} />
      <Route path="/sum" element={<Sum />} />
    </Routes>
  </Router>
);

export default App;
