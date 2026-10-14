import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";

export const App = () => {
  return (
    <BrowserRouter>
      <section className="flex min-h-screen flex-col">
        <Navbar />
        <main className="grow dark:bg-dark dark:text-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </main>
        <Footer />
      </section>
    </BrowserRouter>
  );
};

export default App;
