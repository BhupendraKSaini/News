import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProtectedRoutes from './components/ProtectedRoutes';
import PreferenceProtectRoute from './components/PreferenceProtectRoute';
import LoadingSpinner from './components/LoadingSpinner';
import Footer from './components/Footer';
import { Toaster } from 'sonner';
import '@mantine/core/styles.css';
import ForgetPassword from './pages/forgetPassword';
const Homepage = lazy(() => import('./pages/Homepage'));
const Profile = lazy(() => import('./pages/Profile'));
const About = lazy(() => import('./pages/AboutPage'));
const Preferences = lazy(() => import('./pages/preferences'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));

function App() {
  return (
    <div>
      <Navbar />
      <Toaster />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/profile" element={<Profile />} />
            <Route element={<PreferenceProtectRoute />}>
              <Route path="/preferences" element={<Preferences />} />
            </Route>
          </Route>
          <Route path='/forgot-password' element={<ForgetPassword/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;