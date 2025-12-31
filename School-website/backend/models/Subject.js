import mongoose from 'mongoose';

const SubjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a subject name'],
      trim: true,
      maxlength: [100, 'Subject name cannot be more than 100 characters']
    },
    code: {
      type: String,
      required: [true, 'Please add a subject code'],
      unique: true,
      uppercase: true,
      trim: true,
      maxlength: [20, 'Subject code cannot be more than 20 characters']
    },
    type: {
      type: String,
      enum: ['core', 'elective', 'practical', 'project', 'other'],
      default: 'core'
    },
    description: {
      type: String,
      trim: true,
      maxlength: [500, 'Description cannot be more than 500 characters']
    },
    classes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class'
      }
    ],
    teachers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher'
      }
    ],
    syllabus: [
      {
        topic: {
          type: String,
          required: true,
          trim: true
        },
        description: String,
        duration: Number, // in hours
        isCompleted: {
          type: Boolean,
          default: false
        },
        completedOn: Date
      }
    ],
    books: [
      {
        title: String,
        author: String,
        publisher: String,
        publicationYear: Number,
        isbn: String
      }
    ],
    isActive: {
      type: Boolean,
      default: true
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    notes: String
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// Create a compound index for subject name and type
SubjectSchema.index({ name: 1, type: 1 }, { unique: true });

// Virtual for getting all students enrolled in this subject
SubjectSchema.virtual('students', {
  ref: 'Student',
  localField: 'classes',
  foreignField: 'currentClass',
  justOne: false
});

export default mongoose.model('Subject', SubjectSchema);
