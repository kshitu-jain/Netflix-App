import Home from "./components/Home";
import Search from "./components/browse";
import ShowDetails from "./components/showDetails";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/search" element={<Search />} />;
        <Route path="/shows-details/:id" element={<ShowDetails />} />;
      </Routes>
    </>
  );
}

export default App;
