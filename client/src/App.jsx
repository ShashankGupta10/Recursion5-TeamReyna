import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import Pricing from "./pages/Pricing";
import Navbar from "./components/Navbar";
import CheckFlight from "./components/CheckFlight";
import Chooselocation from "./pages/Chooselocation";
import SuggestPlaces from "./pages/SuggestPlaces";
import Ticket from "./components/Ticket";
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
        <Route path="/search" element={<Chooselocation />} />
        <Route path="/suggest" element={<SuggestPlaces />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/flights" element={<CheckFlight />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
