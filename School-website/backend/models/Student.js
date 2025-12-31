import mongoose from 'mongoose';

const StudentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    admissionNumber: {
      type: String,
      required: true,
      unique: true
    },
    firstName: {
      type: String,
      required: [true, 'Please add first name'],
      trim: true,
      maxlength: [50, 'First name cannot be more than 50 characters']
    },
    lastName: {
      type: String,
      required: [true, 'Please add last name'],
      trim: true,
      maxlength: [50, 'Last name cannot be more than 50 characters']
    },
    dateOfBirth: {
      type: Date,
      required: [true, 'Please add date of birth']
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'other'],
      required: true
    },
    bloodGroup: {
      type: String,
      enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-', '']
    },
    religion: {
      type: String,
      trim: true
    },
    caste: {
      type: String,
      trim: true
    },
    nationality: {
      type: String,
      default: 'Indian'
    },
    aadharNumber: {
      type: String,
      unique: true,
      sparse: true
    },
    currentClass: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Class',
      required: true
    },
    section: {
      type: String,
      required: true
    },
    rollNumber: {
      type: Number,
      required: true
    },
    admissionDate: {
      type: Date,
      default: Date.now
    },
    parent: {
      fatherName: {
        type: String,
        required: true,
        trim: true
      },
      fatherOccupation: String,
      fatherPhone: {
        type: String,
        required: true
      },
      fatherEmail: String,
      motherName: {
        type: String,
        required: true,
        trim: true
      },
      motherOccupation: String,
      motherPhone: String,
      motherEmail: String,
      address: {
        street: String,
        city: String,
        state: String,
        pincode: String,
        country: {
          type: String,
          default: 'India'
        }
      }
    },
    emergencyContact: {
      name: String,
      relation: String,
      phone: String
    },
    previousSchool: {
      name: String,
      address: String,
      percentage: Number,
      year: Number
    },
    documents: [
      {
        name: String,
        url: String,
        uploadedAt: {
          type: Date,
          default: Date.now
        }
      }
    ],
    isActive: {
      type: Boolean,
      default: true
    },
    photo: {
      type: String,
      default: 'default.jpg'
    },
    remarks: [
      {
        date: {
          type: Date,
          default: Date.now
        },
        remark: String,
        addedBy: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
        }
      }
    ]
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// Generate admission number
StudentSchema.pre('save', async function(next) {
  if (!this.admissionNumber) {
    const year = new Date().getFullYear().toString().slice(-2);
    const count = await this.constructor.countDocuments({});
    this.admissionNumber = `ADM${year}${(count + 1).toString().padStart(4, '0')}`;
  }
  next();
});

// Reverse populate with virtuals
StudentSchema.virtual('attendance', {
  ref: 'Attendance',
  localField: '_id',
  foreignField: 'student',
  justOne: false
});

StudentSchema.virtual('results', {
  ref: 'Result',
  localField: '_id',
  foreignField: 'student',
  justOne: false
});

export default mongoose.model('Student', StudentSchema);
