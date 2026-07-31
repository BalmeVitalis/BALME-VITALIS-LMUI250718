import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { PrivateRoute } from './components/common/PrivateRoute';
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import CourseList from './components/courses/CourseList';
import CourseDetails from './components/courses/CourseDetails';
import CourseForm from './components/courses/CourseForm';
import Dashboard from './components/dashboard/Dashboard';
import Profile from './components/profile/Profile';
import ChangePassword from './components/profile/ChangePassword';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Auth Routes */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          {/* Main Routes */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<CourseList />} />
            <Route path="/courses" element={<CourseList />} />
            <Route path="/courses/:id" element={<CourseDetails />} />
            
            {/* Protected Routes */}
            <Route path="/dashboard" element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            } />
            <Route path="/profile" element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            } />
            <Route path="/change-password" element={
              <PrivateRoute>
                <ChangePassword />
              </PrivateRoute>
            } />
            <Route path="/create-course" element={
              <PrivateRoute requiredRole="instructor">
                <CourseForm />
              </PrivateRoute>
            } />
            <Route path="/edit-course/:id" element={
              <PrivateRoute requiredRole="instructor">
                <CourseForm />
              </PrivateRoute>
            } />
          </Route>

          {/* 404 */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;