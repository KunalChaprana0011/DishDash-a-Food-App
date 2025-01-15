import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Success from "./pages/success";
import Error from "./pages/error";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<ProtectedRoute element = {<Success />} />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
