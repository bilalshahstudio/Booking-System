import "./App.css";
import { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AppHeader from './components/AppHeader/AppHeader'
// import Dashboard from './pages/Dashboard/Dashboard'

const AppHeader = lazy(() => import("./components/AppHeader/AppHeader"));
// const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
const BookTour = lazy(() => import("./pages/BookTour/BookTour"));
const MyTours = lazy(() => import("./pages/MyTours/MyTours"));
const AllTours = lazy(() => import("./pages/Tours/AllTours"));
const LandingPage = lazy(() => import("./pages/LandingPage/LandingPage"));

function App() {
  return (
    <Router>
      <AppHeader />
      <Routes>
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/allTours" element={<AllTours />} />
        <Route path="/bookTour" element={<BookTour />} />
        <Route path="/myTours" element={<MyTours />} />
      </Routes>
    </Router>
  );
}

export default App;
