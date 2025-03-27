import { Route, Routes } from "react-router";
import RecentAds from "./components/RecentsAds";
import About from "./pages/About";
import Layout from "./pages/Layout";
import AdDetails from "./pages/AdDetails";
import NewAdForm from "./pages/NewAdForm";
import AdsByCategory from "./pages/AdsByCategory";
//import Header from "./components/Header";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<RecentAds />} />
          <Route path="about" element={<About />} />
          <Route path="ads/:id" element={<AdDetails />} />
          <Route path="ads/new" element={<NewAdForm />} />
          <Route path="ads/categories/:id" element={<AdsByCategory />} />
        </Route>
      </Routes>

      {/* <Header />
      <Routes>
        <Route path="/" element={<RecentAds />} />
        <Route path="/about" element={<About />} />
        <Route path="ad/:id" element={<AdDetails />} />
      </Routes> */}
    </>
  );
}

export default App;
