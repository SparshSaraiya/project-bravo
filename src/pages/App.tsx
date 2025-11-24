import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Credits } from "../pages/Credits";
import { Contact } from "../pages/Contact";
import { ExpenseLogging } from "../pages/ExpenseLogging";
import { ExpenseReport } from "../pages/ExpenseReport";
import { AdminWindow } from "../pages/AdminWindow";
import NotFound from "../pages/NotFound";
import Layout from "../components/Layout";
import ProtectedRoute from "../components/ProtectedRoute";
import { ScrollToTop } from "../components/ui/ScrollToTop";

export default function App() {
  return (
    <>
      {/* scroll to top utility to force scroll to top on move to a new page */}
      <ScrollToTop />

      <Routes>
        {/* Public Routes (No Layout or Different Layout) */}
        {/* <Route path="/login" element={<Login />} /> */}

        {/* Protected Routes wrapped in Layout */}
        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/expenses" element={<ExpenseLogging />} />
            <Route path="/reports" element={<ExpenseReport />} />
            <Route path="/admin" element={<AdminWindow />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>

        {/* pages that don't require authenticated user to visit */}
        <Route element={<Layout />}>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/credits" element={<Credits />} />
        </Route>
      </Routes>
    </>
  );
}
