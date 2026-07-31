const express = require('express');
const router = express.Router();

// Import route files
const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');
const courseRoutes = require('./courseRoutes');
const enrollmentRoutes = require('./enrollmentRoutes');

// Mount routes
router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/courses', courseRoutes);
router.use('/enrollments', enrollmentRoutes);

module.exports = router;