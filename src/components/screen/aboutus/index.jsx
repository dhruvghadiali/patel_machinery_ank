import { useEffect, useState, useRef } from "react";
import { Users, Target, Award, Heart, Lightbulb, Shield, Globe, Handshake, Phone, Mail, MapPin, Upload, X, CheckCircle } from "lucide-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const teamMembers = [
  {
    name: "Pareshkumar Pipariya",
    position: "Founder & CEO",
    experience: "25+ Years",
    specialization: "Foundation Engineering",
    image: "👨‍💼",
    description: "Visionary leader with over two decades of experience in deep foundation engineering and construction management."
  },
  {
    name: "Subrato Setua",
    position: "Chief Engineer",
    experience: "18+ Years",
    specialization: "Structural Design",
    image: "👩‍🔬",
    description: "Expert in structural analysis and innovative foundation solutions with a focus on sustainable construction practices."
  },
  {
    name: "Rafik Mansuri",
    position: "Operations Director",
    experience: "20+ Years",
    specialization: "Project Management",
    image: "👨‍🏭",
    description: "Operational excellence leader ensuring seamless project execution and maintaining our industry-leading safety standards."
  },
  {
    name: "Akhtar Raza",
    position: "Safety Manager",
    experience: "15+ Years",
    specialization: "Workplace Safety",
    image: "👩‍🦺",
    description: "Dedicated safety professional committed to maintaining zero-incident workplaces across all project sites."
  }
];

const companyValues = [
  {
    icon: Target,
    title: "Excellence",
    description: "Pursuing the highest standards in every project we undertake, from initial planning to final completion.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Prioritizing the safety of our workers, clients, and communities in every aspect of our operations.",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Embracing cutting-edge technology and methodologies to deliver superior construction solutions.",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Handshake,
    title: "Integrity",
    description: "Building trust through honest communication, transparent practices, and ethical business conduct.",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: Heart,
    title: "Community",
    description: "Contributing positively to the communities we serve through responsible construction and local engagement.",
    color: "from-red-500 to-red-600"
  },
  {
    icon: Globe,
    title: "Sustainability",
    description: "Implementing environmentally conscious practices to protect our planet for future generations.",
    color: "from-emerald-500 to-emerald-600"
  }
];

const milestones = [
  { year: "2011", event: "Company Founded", description: "Patel Construction established with a vision to revolutionize foundation engineering" },
  { year: "2014", event: "First Major Project", description: "Completed Metro Bridge Foundation project, establishing our reputation" },
  { year: "2015", event: "Safety Excellence", description: "Achieved our first 1000 days without workplace incidents" },
  { year: "2018", event: "Technology Innovation", description: "Introduced AI-driven pile testing systems" },
  { year: "2020", event: "Expansion", description: "Expanded operations to serve three major metropolitan areas" },
  { year: "2025", event: "Industry Leadership", description: "Recognized as the leading foundation engineering company in the region" }
];

const companyStats = [
  { number: "15+", label: "Years of Excellence", icon: Award },
  { number: "150+", label: "Projects Completed", icon: Target },
  { number: "50+", label: "Team Members", icon: Users },
  { number: "Zero", label: "Lost Time Incidents", icon: Shield }
];

const contactInfo = {
  phone1: "+91 80146 66660", 
  phone2: "+91 96249 66395",
  email1: "patelconstruction13@gmail.com",
  email2: "officepatelconstruction@gmail.com",
  addressLines: [
    "B-59 TO 62 Signature Galleria,", 
    "Mahavir Tarning Ankleshwar-393002",
  ],
  mapEmbedUrl:
    // Embed by name + coordinates for a clearer pin label
    "https://www.google.com/maps?q=Signature+Gallaria,21.6331157,73.0050456&z=17&hl=en&output=embed",
};

const departments = [
  "Foundation Engineering",
  "Structural Design",
  "Project Management",
  "Site Operations",
  "Safety & Quality Control",
  "Equipment Operations",
  "Business Development",
  "Administration",
  "Human Resources",
  "Finance & Accounting"
];

const preferredTimes = [
  "Morning (9:00 AM - 12:00 PM)",
  "Afternoon (12:00 PM - 3:00 PM)",
  "Evening (3:00 PM - 6:00 PM)",
  "Anytime"
];

// Yup validation schema for job application
const jobApplicationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must not exceed 50 characters')
    .matches(/^[a-zA-Z\s]+$/, 'First name can only contain letters')
    .required('First name is required'),
  lastName: Yup.string()
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name must not exceed 50 characters')
    .matches(/^[a-zA-Z\s]+$/, 'Last name can only contain letters')
    .required('Last name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits without country code')
    .test('no-country-code', 'Please enter only 10 digits without country code (+91, +1, etc.)', (value) => {
      return value && !value.includes('+');
    })
    .required('Phone number is required'),
  department: Yup.string()
    .oneOf(departments, 'Please select a valid department')
    .required('Department is required'),
  resume: Yup.mixed()
    .required('Resume is required')
    .test('fileSize', 'File size must be less than 5MB', (value) => {
      return value && value.size <= 5242880; // 5MB
    })
    .test('fileType', 'Only PDF files are allowed', (value) => {
      return value && value.type === 'application/pdf';
    })
});

// Yup validation schema for contact us
const contactUsSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must not exceed 50 characters')
    .matches(/^[a-zA-Z\s]+$/, 'First name can only contain letters')
    .required('First name is required'),
  lastName: Yup.string()
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name must not exceed 50 characters')
    .matches(/^[a-zA-Z\s]+$/, 'Last name can only contain letters')
    .required('Last name is required'),
  companyName: Yup.string()
    .min(2, 'Company name must be at least 2 characters')
    .max(100, 'Company name must not exceed 100 characters')
    .required('Company name is required'),
  companyEmail: Yup.string()
    .email('Invalid email address')
    .required('Company email is required'),
  companyContactNumber: Yup.string()
    .matches(/^[0-9]{10}$/, 'Contact number must be exactly 10 digits without country code')
    .test('no-country-code', 'Please enter only 10 digits without country code (+91, +1, etc.)', (value) => {
      return value && !value.includes('+');
    })
    .required('Company contact number is required'),
  preferredTime: Yup.string()
    .oneOf(preferredTimes, 'Please select a valid preferred time')
    .required('Preferred time is required')
});

function AboutUsIntroComponent() {
  const [visibleElements, setVisibleElements] = useState({
    stats: [],
    values: [],
    team: [],
    milestones: []
  });
  const [isJobDialogOpen, setIsJobDialogOpen] = useState(false);
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ show: false, success: false, message: '' });
  const [contactSubmitStatus, setContactSubmitStatus] = useState({ show: false, success: false, message: '' });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            // Animate stats first
            companyStats.forEach((_, index) => {
              setTimeout(() => {
                setVisibleElements(prev => ({
                  ...prev,
                  stats: [...prev.stats, index]
                }));
              }, index * 150);
            });

            // Then animate values
            setTimeout(() => {
              companyValues.forEach((_, index) => {
                setTimeout(() => {
                  setVisibleElements(prev => ({
                    ...prev,
                    values: [...prev.values, index]
                  }));
                }, index * 200);
              });
            }, 600);

            // Then team members
            setTimeout(() => {
              teamMembers.forEach((_, index) => {
                setTimeout(() => {
                  setVisibleElements(prev => ({
                    ...prev,
                    team: [...prev.team, index]
                  }));
                }, index * 200);
              });
            }, 1200);

            // Finally milestones
            setTimeout(() => {
              milestones.forEach((_, index) => {
                setTimeout(() => {
                  setVisibleElements(prev => ({
                    ...prev,
                    milestones: [...prev.milestones, index]
                  }));
                }, index * 150);
              });
            }, 1800);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const handleJobFormSubmit = async (values, { setSubmitting, resetForm }) => {
    const maxRetries = 5;
    let lastError = null;

    try {
      // Create FormData to send file along with other form fields
      const formData = new FormData();
      formData.append('firstName', values.firstName);
      formData.append('lastName', values.lastName);
      formData.append('email', values.email);
      formData.append('phone', values.phone);
      formData.append('department', values.department);
      formData.append('resume', values.resume); // This is the actual file object

      // Retry logic - try up to maxRetries times
      for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
          console.log(`Attempt ${attempt} of ${maxRetries} to submit application...`);

          // Send to backend API
          const response = await fetch('https://patel-construction-api.onrender.com/api/sendJobApplication', {
            method: 'POST',
            body: formData,
            // Don't set Content-Type header - browser will set it automatically with boundary
          });

          const result = await response.json();

          if (!response.ok || !result.success) {
            throw new Error(result.error || 'Failed to send application');
          }

          // If successful, break out of retry loop
          lastError = null;
          
          // Log successful submission
          console.log('Job Application Submitted Successfully:', {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            phone: values.phone,
            department: values.department,
            resume: values.resume.name,
            emailIds: {
              hrEmail: result.hrEmailId,
              confirmationEmail: result.confirmationEmailId
            },
            attempt: attempt
          });

          // Show success message
          setSubmitStatus({
            show: true,
            success: true,
            message: 'Thank you for your application! We will review it and get back to you soon.'
          });

          // Reset form after successful submission
          resetForm();
          if (fileInputRef.current) {
            fileInputRef.current.value = '';
          }

          // Close dialog after 2 seconds
          setTimeout(() => {
            setIsJobDialogOpen(false);
            setSubmitStatus({ show: false, success: false, message: '' });
          }, 2000);

          return; // Exit the function on success

        } catch (error) {
          lastError = error;
          console.error(`Attempt ${attempt} failed:`, error.message);

          // If this is not the last attempt, wait before retrying
          if (attempt < maxRetries) {
            console.log(`Retrying in 1 second...`);
            await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second before retry
          }
        }
      }

      // If we get here, all retries failed
      if (lastError) {
        throw lastError;
      }

      // If we get here, all retries failed
      if (lastError) {
        throw lastError;
      }

    } catch (error) {
      console.error('Error submitting application after all retries:', error);
      setSubmitStatus({
        show: true,
        success: false,
        message: `Failed to submit application after ${maxRetries} attempts. Please check your connection and try again.`
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleContactFormSubmit = async (values, { setSubmitting, resetForm }) => {
    const maxRetries = 5;
    let lastError = null;

    try {
      // Retry logic - try up to maxRetries times
      for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
          console.log(`Attempt ${attempt} of ${maxRetries} to submit contact form...`);

          // Send to backend API
          const response = await fetch('https://patel-construction-api.onrender.com/api/contactUs', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              firstName: values.firstName,
              lastName: values.lastName,
              companyName: values.companyName,
              companyEmail: values.companyEmail,
              contactNumber: values.companyContactNumber,
              preferredTime: values.preferredTime
            }),
          });

          const result = await response.json();

          if (!response.ok || !result.success) {
            throw new Error(result.error || 'Failed to send contact request');
          }

          // If successful, break out of retry loop
          lastError = null;
          
          // Log successful submission
          console.log('Contact Form Submitted Successfully:', {
            firstName: values.firstName,
            lastName: values.lastName,
            companyName: values.companyName,
            companyEmail: values.companyEmail,
            companyContactNumber: values.companyContactNumber,
            preferredTime: values.preferredTime,
            attempt: attempt
          });

          // Show success message
          setContactSubmitStatus({
            show: true,
            success: true,
            message: 'Thank you for contacting us! We will get back to you soon.'
          });

          // Reset form after successful submission
          resetForm();

          // Close dialog after 2 seconds
          setTimeout(() => {
            setIsContactDialogOpen(false);
            setContactSubmitStatus({ show: false, success: false, message: '' });
          }, 2000);

          return; // Exit the function on success

        } catch (error) {
          lastError = error;
          console.error(`Attempt ${attempt} failed:`, error.message);

          // If this is not the last attempt, wait before retrying
          if (attempt < maxRetries) {
            console.log(`Retrying in 1 second...`);
            await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second before retry
          }
        }
      }

      // If we get here, all retries failed
      if (lastError) {
        throw lastError;
      }

    } catch (error) {
      console.error('Error submitting contact form after all retries:', error);
      setContactSubmitStatus({
        show: true,
        success: false,
        message: `Failed to submit contact request after ${maxRetries} attempts. Please check your connection and try again.`
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section 
      id="about-us"
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-24 lg:py-28 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          <div className={`transition-all duration-1000 ease-out ${
            hasAnimated 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
              About <span className="text-orange-500">Us</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              For over 15 years, Patel Construction has been at the forefront of foundation engineering, 
              delivering innovative solutions that build the infrastructure of tomorrow.
            </p>
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-2xl p-8 sm:p-12 border-l-4 border-orange-500">
              <p className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200 italic">
                "Building foundations that last generations, with safety and innovation as our cornerstone principles."
              </p>
              <p className="text-lg text-orange-600 dark:text-orange-400 mt-4 font-medium">
                - Pareshkumar Pipariya, Founder & CEO
              </p>
            </div>
          </div>
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mb-16 sm:mb-20 md:mb-24">
          {companyStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className={`text-center transition-all duration-700 ease-out transform ${
                  visibleElements.stats.includes(index)
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-orange-100 dark:bg-orange-900/30 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-orange-600 dark:text-orange-400" />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Company Values */}
        <div className="mb-16 sm:mb-20 md:mb-24">
          <div className={`text-center mb-12 transition-all duration-1000 ease-out ${
            hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core <span className="text-orange-500">Values</span>
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The principles that guide every decision we make and every project we undertake.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className={`transition-all duration-700 ease-out transform ${
                    visibleElements.values.includes(index)
                      ? 'opacity-100 translate-y-0 scale-100'
                      : 'opacity-0 translate-y-12 scale-95'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 sm:p-8 h-full border border-gray-200 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <div className={`bg-gradient-to-r ${value.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Company Timeline */}
        <div className="mb-16 sm:mb-20 md:mb-24">
          <div className={`text-center mb-12 transition-all duration-1000 ease-out ${
            hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our <span className="text-orange-500">Journey</span>
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Key milestones that have shaped our growth and success over the years.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-orange-500"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative pl-12 transition-all duration-700 ease-out transform ${
                    visibleElements.milestones.includes(index)
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 -translate-x-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="absolute left-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl font-bold text-orange-600 dark:text-orange-400 mr-4">
                        {milestone.year}
                      </span>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                        {milestone.event}
                      </h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mb-16 sm:mb-20 md:mb-24">
          <div
            className={`text-center mb-12 transition-all duration-1000 ease-out ${
              hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Get in <span className="text-orange-500">Touch</span>
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We'd love to discuss your next project. Reach us via phone, email, or visit our office.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact cards */}
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">Contact Number</h4>
                    <a
                      href={`tel:${contactInfo.phone1.replace(/\s/g, "")}`}
                      className="text-orange-600 dark:text-orange-400 font-medium hover:underline"
                    >
                      {contactInfo.phone1}
                    </a>
                    <br/>
                    <a
                      href={`tel:${contactInfo.phone2.replace(/\s/g, "")}`}
                      className="text-orange-600 dark:text-orange-400 font-medium hover:underline"
                    >
                      {contactInfo.phone2}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">Email Address</h4>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-orange-600 dark:text-orange-400 font-medium hover:underline break-all"
                    >
                      {contactInfo.email1}
                    </a>
                    <br/>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-orange-600 dark:text-orange-400 font-medium hover:underline break-all"
                    >
                      {contactInfo.email2}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">Company Address</h4>
                    <address className="not-italic text-gray-700 dark:text-gray-300 leading-relaxed">
                      {contactInfo.addressLines.map((line, idx) => (
                        <div key={idx}>{line}</div>
                      ))}
                    </address>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-2 sm:p-3 border border-gray-200 dark:border-gray-700 h-full">
                <div className="relative w-full h-[280px] sm:h-[360px] md:h-[420px] lg:h-full min-h-[320px] overflow-hidden rounded-xl">
                  <iframe
                    title="Company Location"
                    src={contactInfo.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                    className="w-full h-full rounded-xl border-0"
                  ></iframe>
                  {/* Fallback link if the embed is blocked */}
                  <div className="absolute bottom-2 right-2 bg-white/80 dark:bg-gray-900/80 rounded-md px-2 py-1 text-xs">
                    <a
                      href="https://maps.google.com/?q=21.6331157,73.0050456"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 dark:text-orange-400 hover:underline"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className={`text-center transition-all duration-1000 ease-out ${
          hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-8 sm:p-10 md:p-12 text-white">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Partner with <span className="text-amber-200">Industry Leaders</span>
            </h3>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto">
              Join the growing number of clients who trust Patel Construction for their most critical 
              foundation engineering projects. Experience the difference expertise makes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Dialog open={isJobDialogOpen} onOpenChange={setIsJobDialogOpen}>
                <DialogTrigger asChild>
                  <button className="bg-white text-orange-600 hover:bg-gray-100 font-bold py-4 px-8 sm:px-12 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-lg flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    Join Our Team
                  </button>
                </DialogTrigger>
                <DialogContent className="bg-white dark:bg-gray-800 max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                      Join Our Team
                    </DialogTitle>
                    <DialogDescription className="text-gray-600 dark:text-gray-300">
                      Fill out the form below to apply for a position at Patel Construction. We're always looking for talented individuals to join our growing team.
                    </DialogDescription>
                  </DialogHeader>
                  
                  <Formik
                    initialValues={{
                      firstName: "",
                      lastName: "",
                      email: "",
                      phone: "",
                      department: "",
                      resume: null
                    }}
                    validationSchema={jobApplicationSchema}
                    onSubmit={handleJobFormSubmit}
                  >
                    {({ values, errors, touched, setFieldValue, isSubmitting }) => (
                      <Form className="space-y-6 mt-4">
                        {/* Success/Error Message */}
                        {submitStatus.show && (
                          <div className={`p-4 rounded-lg flex items-center gap-2 ${
                            submitStatus.success 
                              ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200' 
                              : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200'
                          }`}>
                            {submitStatus.success && <CheckCircle className="w-5 h-5" />}
                            <p className="text-sm font-medium">{submitStatus.message}</p>
                          </div>
                        )}

                        {/* Name Fields */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                              First Name <span className="text-red-500">*</span>
                            </label>
                            <Field
                              type="text"
                              id="firstName"
                              name="firstName"
                              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${
                                errors.firstName && touched.firstName 
                                  ? 'border-red-500 dark:border-red-500' 
                                  : 'border-gray-300 dark:border-gray-600'
                              }`}
                              placeholder="First name"
                            />
                            <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm mt-1" />
                          </div>
                          <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                              Last Name <span className="text-red-500">*</span>
                            </label>
                            <Field
                              type="text"
                              id="lastName"
                              name="lastName"
                              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${
                                errors.lastName && touched.lastName 
                                  ? 'border-red-500 dark:border-red-500' 
                                  : 'border-gray-300 dark:border-gray-600'
                              }`}
                              placeholder="Last name"
                            />
                            <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm mt-1" />
                          </div>
                        </div>

                        {/* Email */}
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <Field
                            type="email"
                            id="email"
                            name="email"
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${
                              errors.email && touched.email 
                                ? 'border-red-500 dark:border-red-500' 
                                : 'border-gray-300 dark:border-gray-600'
                            }`}
                            placeholder="email address"
                          />
                          <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        {/* Phone */}
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <Field
                            type="tel"
                            id="phone"
                            name="phone"
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${
                              errors.phone && touched.phone 
                                ? 'border-red-500 dark:border-red-500' 
                                : 'border-gray-300 dark:border-gray-600'
                            }`}
                            placeholder="phone number"
                          />
                          <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        {/* Department Dropdown */}
                        <div>
                          <label htmlFor="department" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Department <span className="text-red-500">*</span>
                          </label>
                          <Field
                            as="select"
                            id="department"
                            name="department"
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${
                              errors.department && touched.department 
                                ? 'border-red-500 dark:border-red-500' 
                                : 'border-gray-300 dark:border-gray-600'
                            }`}
                          >
                            <option value="">Select a department</option>
                            {departments.map((dept, index) => (
                              <option key={index} value={dept}>
                                {dept}
                              </option>
                            ))}
                          </Field>
                          <ErrorMessage name="department" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        {/* Resume Upload */}
                        <div>
                          <label htmlFor="resume" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Upload Resume <span className="text-red-500">*</span>
                          </label>
                          <div className="flex items-center gap-3">
                            <label className="flex-1 cursor-pointer">
                              <div className={`w-full px-4 py-2 border-2 border-dashed rounded-lg hover:border-orange-500 dark:hover:border-orange-400 transition-colors bg-gray-50 dark:bg-gray-700 ${
                                errors.resume && touched.resume 
                                  ? 'border-red-500 dark:border-red-500' 
                                  : 'border-gray-300 dark:border-gray-600'
                              }`}>
                                <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-300">
                                  <Upload className="w-5 h-5" />
                                  <span className="text-sm">
                                    {values.resume ? values.resume.name : "Choose PDF file"}
                                  </span>
                                </div>
                              </div>
                              <input
                                ref={fileInputRef}
                                type="file"
                                id="resume"
                                accept=".pdf"
                                onChange={(event) => {
                                  const file = event.currentTarget.files[0];
                                  setFieldValue("resume", file);
                                }}
                                className="hidden"
                              />
                            </label>
                            {values.resume && (
                              <button
                                type="button"
                                onClick={() => {
                                  setFieldValue("resume", null);
                                  if (fileInputRef.current) {
                                    fileInputRef.current.value = '';
                                  }
                                }}
                                className="p-2 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors"
                                title="Remove file"
                              >
                                <X className="w-5 h-5" />
                              </button>
                            )}
                          </div>
                          {values.resume && !errors.resume && (
                            <p className="mt-2 text-sm text-green-600 dark:text-green-400 flex items-center gap-1">
                              <CheckCircle className="w-4 h-4" /> File selected: {values.resume.name} ({(values.resume.size / 1024 / 1024).toFixed(2)} MB)
                            </p>
                          )}
                          <ErrorMessage name="resume" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        {/* Submit Button */}
                        <div className="flex gap-3 pt-4">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`flex-1 bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 ${
                              isSubmitting 
                                ? 'opacity-50 cursor-not-allowed' 
                                : 'hover:bg-orange-700 transform hover:scale-[1.02]'
                            }`}
                          >
                            {isSubmitting ? (
                              <span className="flex items-center justify-center gap-2">
                                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Submitting...
                              </span>
                            ) : (
                              'Submit Application'
                            )}
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setIsJobDialogOpen(false);
                              setSubmitStatus({ show: false, success: false, message: '' });
                            }}
                            disabled={isSubmitting}
                            className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            Cancel
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </DialogContent>
              </Dialog>
              <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>
                <DialogTrigger asChild>
                  <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 font-bold py-4 px-8 sm:px-12 rounded-xl transition-all duration-300 text-lg flex items-center">
                    <Handshake className="w-5 h-5 mr-2" />
                    Contact Us
                  </button>
                </DialogTrigger>
                <DialogContent className="bg-white dark:bg-gray-800 max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                      Contact Us
                    </DialogTitle>
                    <DialogDescription className="text-gray-600 dark:text-gray-300">
                      Fill out the form below and we'll get back to you at your preferred time.
                    </DialogDescription>
                  </DialogHeader>
                  
                  <Formik
                    initialValues={{
                      firstName: "",
                      lastName: "",
                      companyName: "",
                      companyEmail: "",
                      companyContactNumber: "",
                      preferredTime: ""
                    }}
                    validationSchema={contactUsSchema}
                    onSubmit={handleContactFormSubmit}
                  >
                    {({ values, errors, touched, isSubmitting }) => (
                      <Form className="space-y-6 mt-4">
                        {/* Success/Error Message */}
                        {contactSubmitStatus.show && (
                          <div className={`p-4 rounded-lg flex items-center gap-2 ${
                            contactSubmitStatus.success 
                              ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200' 
                              : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200'
                          }`}>
                            {contactSubmitStatus.success && <CheckCircle className="w-5 h-5" />}
                            <p className="text-sm font-medium">{contactSubmitStatus.message}</p>
                          </div>
                        )}

                        {/* Name Fields */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="contactFirstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                              First Name <span className="text-red-500">*</span>
                            </label>
                            <Field
                              type="text"
                              id="contactFirstName"
                              name="firstName"
                              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${
                                errors.firstName && touched.firstName 
                                  ? 'border-red-500 dark:border-red-500' 
                                  : 'border-gray-300 dark:border-gray-600'
                              }`}
                              placeholder="First name"
                            />
                            <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm mt-1" />
                          </div>
                          <div>
                            <label htmlFor="contactLastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                              Last Name <span className="text-red-500">*</span>
                            </label>
                            <Field
                              type="text"
                              id="contactLastName"
                              name="lastName"
                              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${
                                errors.lastName && touched.lastName 
                                  ? 'border-red-500 dark:border-red-500' 
                                  : 'border-gray-300 dark:border-gray-600'
                              }`}
                              placeholder="Last name"
                            />
                            <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm mt-1" />
                          </div>
                        </div>

                        {/* Company Name */}
                        <div>
                          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Company Name <span className="text-red-500">*</span>
                          </label>
                          <Field
                            type="text"
                            id="companyName"
                            name="companyName"
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${
                              errors.companyName && touched.companyName 
                                ? 'border-red-500 dark:border-red-500' 
                                : 'border-gray-300 dark:border-gray-600'
                            }`}
                            placeholder="Company name"
                          />
                          <ErrorMessage name="companyName" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        {/* Company Email */}
                        <div>
                          <label htmlFor="companyEmail" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Company Email Address <span className="text-red-500">*</span>
                          </label>
                          <Field
                            type="email"
                            id="companyEmail"
                            name="companyEmail"
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${
                              errors.companyEmail && touched.companyEmail 
                                ? 'border-red-500 dark:border-red-500' 
                                : 'border-gray-300 dark:border-gray-600'
                            }`}
                            placeholder="company@example.com"
                          />
                          <ErrorMessage name="companyEmail" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        {/* Company Contact Number */}
                        <div>
                          <label htmlFor="companyContactNumber" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Company Contact Number <span className="text-red-500">*</span>
                          </label>
                          <Field
                            type="tel"
                            id="companyContactNumber"
                            name="companyContactNumber"
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${
                              errors.companyContactNumber && touched.companyContactNumber 
                                ? 'border-red-500 dark:border-red-500' 
                                : 'border-gray-300 dark:border-gray-600'
                            }`}
                            placeholder="10 digit contact number"
                          />
                          <ErrorMessage name="companyContactNumber" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        {/* Preferred Time */}
                        <div>
                          <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Preferred Time to Contact <span className="text-red-500">*</span>
                          </label>
                          <Field
                            as="select"
                            id="preferredTime"
                            name="preferredTime"
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${
                              errors.preferredTime && touched.preferredTime 
                                ? 'border-red-500 dark:border-red-500' 
                                : 'border-gray-300 dark:border-gray-600'
                            }`}
                          >
                            <option value="">Select preferred time</option>
                            {preferredTimes.map((time, index) => (
                              <option key={index} value={time}>
                                {time}
                              </option>
                            ))}
                          </Field>
                          <ErrorMessage name="preferredTime" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        {/* Submit Button */}
                        <div className="flex gap-3 pt-4">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`flex-1 bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 ${
                              isSubmitting 
                                ? 'opacity-50 cursor-not-allowed' 
                                : 'hover:bg-orange-700 transform hover:scale-[1.02]'
                            }`}
                          >
                            {isSubmitting ? (
                              <span className="flex items-center justify-center gap-2">
                                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Submitting...
                              </span>
                            ) : (
                              'Submit Request'
                            )}
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setIsContactDialogOpen(false);
                              setContactSubmitStatus({ show: false, success: false, message: '' });
                            }}
                            disabled={isSubmitting}
                            className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            Cancel
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsIntroComponent;
