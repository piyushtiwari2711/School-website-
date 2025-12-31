import mongoose from 'mongoose';

const ClassSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a class name'],
      unique: true,
      trim: true,
      maxlength: [50, 'Class name cannot be more than 50 characters']
    },
    numericValue: {
      type: Number,
      required: true,
      unique: true
    },
    section: {
      type: String,
      required: [true, 'Please add a section'],
      trim: true,
      maxlength: [10, 'Section cannot be more than 10 characters']
    },
    classTeacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Teacher'
    },
    subjects: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject'
      }
    ],
    academicYear: {
      type: String,
      required: true,
      default: function() {
        const currentYear = new Date().getFullYear();
        return `${currentYear}-${currentYear + 1}`;
      }
    },
    capacity: {
      type: Number,
      default: 40
    },
    roomNumber: String,
    timetable: [
      {
        day: {
          type: String,
          enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          required: true
        },
        periods: [
          {
            startTime: {
              type: String,
              required: true
            },
            endTime: {
              type: String,
              required: true
            },
            subject: {
              type: mongoose.Schema.Types.ObjectId,
              ref: 'Subject'
            },
            teacher: {
              type: mongoose.Schema.Types.ObjectId,
              ref: 'Teacher'
            },
            isBreak: {
              type: Boolean,
              default: false
            },
            breakName: String
          }
        ]
      }
    ],
    feeStructure: {
      tuitionFee: {
        type: Number,
        default: 0
      },
      admissionFee: {
        type: Number,
        default: 0
      },
      annualCharges: {
        type: Number,
        default: 0
      },
      otherCharges: [
        {
          name: String,
          amount: Number,
          frequency: {
            type: String,
            enum: ['one-time', 'monthly', 'quarterly', 'half-yearly', 'yearly'],
            default: 'monthly'
          }
        }
      ]
    },
    isActive: {
      type: Boolean,
      default: true
    },
    notes: String
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// Virtual for getting all students in the class
ClassSchema.virtual('students', {
  ref: 'Student',
  localField: '_id',
  foreignField: 'currentClass',
  justOne: false
});

// Virtual for getting all teachers associated with the class
ClassSchema.virtual('teachers', {
  ref: 'Teacher',
  localField: '_id',
  foreignField: 'subjects',
  justOne: false
});

// Create a compound index for class name and academic year
ClassSchema.index({ name: 1, academicYear: 1 }, { unique: true });

export default mongoose.model('Class', ClassSchema);
