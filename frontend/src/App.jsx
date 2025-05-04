import { ConfigProvider } from "antd";
import "./App.css";
import "./index.css";
import { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import DashboardLayout from "./pages/DashboardLayout/DashboardLayout";
// import AppHeader from './components/AppHeader/AppHeader'
// import Dashboard from './pages/Dashboard/Dashboard'

// const AppHeader = lazy(() => import("./components/AppHeader/AppHeader"));
const DashboardLayout = lazy(() =>
  import("./pages/DashboardLayout/DashboardLayout")
);
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
const Museum = lazy(() => import("./pages/MiamiPlaces/Museum"));
const Park = lazy(() => import("./pages/MiamiPlaces/Park"));
const Skyviews = lazy(() => import("./pages/MiamiPlaces/Skyviews"));
const Stadium = lazy(() => import("./pages/MiamiPlaces/Stadium"));
const Tower = lazy(() => import("./pages/MiamiPlaces/Tower"));
const Wharf = lazy(() => import("./pages/MiamiPlaces/Wharf"));

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Poppins, sans-serif",
        },
      }}
    >
      <Router>
        <Routes>
          {/* <AppHeader /> */}
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<LandingPage1 />} />
            <Route path="/landingPage2" element={<LandingPage2 />} />
            <Route path="/allTours" element={<AllTours />} />
            <Route path="/bookTour" element={<BookTour />} />
            <Route path="/myTours" element={<MyTours />} />
            <Route path="/Istanbul" element={<Istanbul />} />
            <Route path="/Dubai" element={<Dubai />} />
            <Route path="/Miami" element={<Miami />} />
            <Route path="/Chicago" element={<Chicago />} />
            <Route path="/Dallas" element={<Dallas />} />
            <Route path="/Ankara" element={<Ankara />} />
            <Route path="/Museum" element={<Museum />} />
            <Route path="/Park" element={<Park />} />
            <Route path="/Skyviews" element={<Skyviews />} />
            <Route path="/Stadium" element={<Stadium />} />
            <Route path="/Tower" element={<Tower />} />
            <Route path="/Wharf" element={<Wharf />} />
          </Route>
        </Routes>
      </Router>
    </ConfigProvider>
  );
}

export default App;
