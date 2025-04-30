import { ConfigProvider } from "antd";
import "./App.css";
import "./index.css";
import { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AppHeader from './components/AppHeader/AppHeader'
// import Dashboard from './pages/Dashboard/Dashboard'

const AppHeader = lazy(() => import("./components/AppHeader/AppHeader"));
// const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
const BookTour = lazy(() => import("./pages/BookTour/BookTour"));
const MyTours = lazy(() => import("./pages/MyTours/MyTours"));
const AllTours = lazy(() => import("./pages/Tours/AllTours"));
const LandingPage1 = lazy(() => import("./pages/LandingPages/LandingPage1"));
const LandingPage2 = lazy(() => import("./pages/LandingPages/LandingPage2"));
const Istanbul = lazy(() => import("./pages/Cities/Istanbul"));
const Dubai = lazy(() => import("./pages/Cities/Dubai"));
const Miami = lazy(() => import("./pages/Cities/Miami"));
const Chicago = lazy(() => import("./pages/Cities/Chicago"));
const Dallas = lazy(() => import("./pages/Cities/Dallas"));
const Ankara = lazy(() => import("./pages/Cities/Ankara"));

function App() {
  return (
    <ConfigProvider theme={{
      token: {
        fontFamily: 'Poppins, sans-serif',
      },
    }}>
      <Router>
      <AppHeader />
     <Routes>
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/landingPage2" element={<LandingPage2 />} />
        <Route path="/" element={<LandingPage1 />} />
        <Route path="/allTours" element={<AllTours />} />
        <Route path="/bookTour" element={<BookTour />} />
        <Route path="/myTours" element={<MyTours />} />
        <Route path="/Istanbul" element={<Istanbul />} />
        <Route path="/Dubai" element={<Dubai />} />
        <Route path="/Miami" element={<Miami />} />
        <Route path="/Chicago" element={<Chicago />} />
        <Route path="/Dallas" element={<Dallas />} />
        <Route path="/Ankara" element={<Ankara />} />
      </Routes>
    </Router>
    </ConfigProvider>
  );
}

export default App;
