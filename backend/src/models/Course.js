const mongoose = require('mongoose');

const LessonSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Lesson title is required']
  },
  duration: {
    type: Number,
    default: 0,
    min: [0, 'Duration cannot be negative']
  },
  videoUrl: {
    type: String,
    default: null
  },
  content: {
    type: String,
    default: null
  }
});

const ModuleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Module title is required']
  },
  description: {
    type: String,
    default: null
  },
  order: {
    type: Number,
    default: 0
  },
  lessons: [LessonSchema]
});

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Course title is required'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Course description is required'],
    maxlength: [1000, 'Description cannot exceed 1000 characters']
  },
  price: {
    type: Number,
    required: [true, 'Course price is required'],
    min: [0, 'Price cannot be negative']
  },
  category: {
    type: String,
    required: [true, 'Course category is required'],
    enum: ['Programming', 'Design', 'Marketing', 'Business', 'Data Science', 'Other']
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  imageUrl: {
    type: String,
    default: null
  },
  modules: [ModuleSchema],
  enrolledStudents: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  averageRating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  totalReviews: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// Index for search functionality
CourseSchema.index({ 
  title: 'text', 
  description: 'text' 
});

module.exports = mongoose.model('Course', CourseSchema);