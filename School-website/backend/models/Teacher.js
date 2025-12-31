import mongoose from 'mongoose';

const TeacherSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    employeeId: {
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
    religion: String,
    caste: String,
    nationality: {
      type: String,
      default: 'Indian'
    },
    aadharNumber: {
      type: String,
      unique: true,
      sparse: true
    },
    panNumber: String,
    qualification: [
      {
        degree: String,
        institute: String,
        year: Number,
        percentage: Number
      }
    ],
    experience: [
      {
        institution: String,
        designation: String,
        from: Date,
        to: Date,
        current: {
          type: Boolean,
          default: false
        },
        description: String
      }
    ],
    subjects: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject'
      }
    ],
    classTeacherOf: {
      class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class'
      },
      section: String
    },
    joiningDate: {
      type: Date,
      default: Date.now
    },
    salary: {
      basic: Number,
      allowances: [
        {
          name: String,
          amount: Number
        }
      ],
      bankDetails: {
        accountNumber: String,
        bankName: String,
        branch: String,
        ifscCode: String
      }
    },
    contact: {
      phone: {
        type: String,
        required: true
      },
      alternatePhone: String,
      email: {
        type: String,
        required: true
      },
      emergencyContact: {
        name: String,
        relation: String,
        phone: String
      },
      address: {
        street: String,
        city: String,
        state: String,
        pincode: String,
        country: {
          type: String,
          default: 'India'
        }
      },
      permanentAddress: {
        sameAsCurrent: {
          type: Boolean,
          default: true
        },
        street: String,
        city: String,
        state: String,
        pincode: String,
        country: String
      }
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
    resume: String,
    additionalInfo: {
      type: Map,
      of: String
    },
    lastPromotionDate: Date,
    notes: String
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// Generate employee ID
TeacherSchema.pre('save', async function(next) {
  if (!this.employeeId) {
    const year = new Date().getFullYear().toString().slice(-2);
    const count = await this.constructor.countDocuments({});
    this.employeeId = `TCH${year}${(count + 1).toString().padStart(4, '0')}`;
  }
  next();
});

// Reverse populate with virtuals
TeacherSchema.virtual('classes', {
  ref: 'Class',
  localField: '_id',
  foreignField: 'teachers',
  justOne: false
});

export default mongoose.model('Teacher', TeacherSchema);
