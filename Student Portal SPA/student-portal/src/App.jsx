import { Navigate, Link, Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Students from "./pages/Students";
import StudentDetails from "./pages/StudentDetails";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import "./App.css";

function StudentLayout() {
    return (
        <div>
            <h2>Student Section</h2>

            <nav>
                <Link to="/students">All Students</Link>
            </nav>

            <Outlet />
        </div>
    );
}

function ProtectedRoute({ children }) {
    const loggedIn = localStorage.getItem("loggedIn") === "true";

    return loggedIn ? children : <Navigate to="/login" />;
}

function App() {
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/students">Students</Link>
                <Link to="/login">Login</Link>
            </nav>

            <main>
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/about" element={<About />} />

                    <Route path="/students" element={<StudentLayout />}>
                        <Route index element={<Students />} />
                        <Route
                            path=":id"
                            element={<StudentDetails />}
                        />
                    </Route>

                    <Route path="/login" element={<Login />} />

                    <Route
                        path="/dashboard"
                        element={
                            <ProtectedRoute>
                                <Dashboard />
                            </ProtectedRoute>
                        }
                    />

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
        </>
    );
}

export default App;