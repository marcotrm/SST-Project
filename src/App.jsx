import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./Pages/HomePage";
import TravelDetails from "./Pages/TravelDetails";
import DefaultLayout from "./Layout/DefaultLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:id" element={<TravelDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
