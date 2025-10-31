import { Routes, Route } from "react-router";
//
import './style/main.scss'
//
import LoadingScreen from "./components/LoadingScreen";
import Onboarding1 from "./components/Onboardingpages/Onboarding1";
import Onboarding2 from "./components/Onboardingpages/Onboarding2";
import Onboarding3 from "./components/Onboardingpages/Onboarding3";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Archive from "./pages/Archive";
import Popular from "./pages/Popular";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <div className="page__wrapper">
      <Routes>
        <Route path="/" element={<LoadingScreen />} />
        <Route path="/Onboarding1" element={<Onboarding1 />} />
        <Route path="/Onboarding2" element={<Onboarding2 />} />
        <Route path="/Onboarding3" element={<Onboarding3 />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Archive" element={<Archive />} />
        <Route path="/Popular" element={<Popular />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="*" element={<h1>Page Not Found GG</h1>} />
      </Routes>
    </div>
  );
}
