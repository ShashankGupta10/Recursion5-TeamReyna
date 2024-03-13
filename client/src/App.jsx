import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import Pricing from "./pages/Pricing";
import Navbar from "./pages/Navbar";
import CheckFlight from "./components/CheckFlight";
import Chooselocation from "./components/Chooselocation";
function App() {
  return (
    <BrowserRouter>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/selecloc" element={<Chooselocation />} />
        <Route path="/flights" element={<CheckFlight />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
