import { Route, Routes } from "react-router";
import RecentAds from "./components/RecentsAds";
import About from "./pages/About";
import Layout from "./pages/Layout";
import AdDetails from "./pages/AdDetails";
import NewAdForm from "./pages/NewAdForm";
import AdsByCategory from "./pages/AdsByCategory";
import NewCategoryForm from "./pages/NewCategoryForm";
import NewTagForm from "./pages/NewTagForm";
import SearchResultsPage from "./pages/SearchResultsPage";
import UpdateAdForm from "./pages/UpdateAdForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
          <Route path="ads/:id/update" element={<UpdateAdForm />} />
          <Route path="ads/categories/new" element={<NewCategoryForm />} />
          <Route path="ads/tags/new" element={<NewTagForm />} />
          <Route path="ads/categories/:id" element={<AdsByCategory />} />
          <Route path="/search" element={<SearchResultsPage />} />
        </Route>
      </Routes>
      <ToastContainer aria-label="Notifications" />

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
