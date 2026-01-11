import React, { useState } from "react";
import { FaCheck, FaChevronDown, FaChevronUp } from "react-icons/fa";

// Sample plan data
const plans = [
  {
    name: "Personal Plan",
    type: "For you",
    users: "Individual",
    price: "$10.00 / month",
    billing: "Billed monthly or annually. Cancel anytime.",
    buttonText: "Start subscription",
    features: [
      "Access to 26,000+ top courses",
      "Certification prep",
      "Goal-focused recommendations",
      "AI-powered coding exercises"
    ],
    color: "from-purple-600 to-purple-700"
  },
  {
    name: "Team Plan",
    type: "For your team",
    users: "2 to 50 people",
    price: "$30.00 / month per user",
    billing: "Billed annually. Cancel anytime.",
    buttonText: "Try it free",
    features: [
      "Access to 13,000+ top courses",
      "Certification prep",
      "Goal-focused recommendations",
      "AI-powered coding exercises",
      "Analytics and adoption reports"
    ],
    color: "from-indigo-600 to-indigo-700"
  },
  {
    name: "Enterprise Plan",
    type: "For your whole organization",
    users: "More than 20 people",
    price: "Contact Sales",
    billing: "",
    buttonText: "Request a demo",
    features: [
      "Access to 30,000+ top courses",
      "Certification prep",
      "Goal-focused recommendations",
      "AI-powered coding exercises",
      "Advanced analytics and insights",
      "Dedicated customer success team",
      "International course collection featuring 15 languages",
      "Customizable content",
      "Hands-on tech training with add-on",
      "Strategic implementation services with add-on"
    ],
    color: "from-slate-600 to-slate-700"
  }
];

// Sample trusted company logos (use image URLs or local images)
const logos = [
  "https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg",
  "https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg",
  "https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg",
  "https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg",
  "https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg",
];

// Sample testimonials
const reviews = [
  {
    quote: "This platform helped me land a developer job in 6 months!",
    author: "John Doe, Software Engineer"
  },
  {
    quote: "The courses are very comprehensive and practical.",
    author: "Jane Smith, UI Designer"
  },
  {
    quote: "AI coding exercises made learning fast and efficient.",
    author: "Ali Khan, Fullstack Developer"
  },
  {
    quote: "Enterprise training for our team has increased productivity.",
    author: "Sarah Lee, Team Lead"
  }
];

// FAQ data
const faqs = [
  {
    question: "How are courses selected for the plans?",
    answer: "Courses are curated to match your plan's learning objectives and career goals."
  },
  {
    question: "How is Personal Plan different from buying a course?",
    answer: "Personal Plan gives access to all included courses with additional features like AI exercises and recommendations."
  },
  {
    question: "What languages does Enterprise Plan content cover?",
    answer: "Enterprise Plan offers courses in 15 languages including English, Spanish, French, and more."
  },
  {
    question: "What is Udemy Business Pro?",
    answer: "Udemy Business Pro is an add-on offering advanced learning paths and skill assessments for tech learners."
  }
];

const PlansPage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <div className="p-6 space-y-12">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold">Choose a plan for success</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Don't want to buy courses one by one? Pick a plan to help you, your team, or your organization achieve outcomes faster.
        </p>
      </div>
      <div className="min-h-screen  from-slate-50 to-slate-100 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Plan Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`border rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-xl transition`}
              >
                <div className="mb-4">
                  <h2 className="text-xl font-semibold mb-1">{plan.name}</h2>
                  <p className="text-gray-500 mb-1">{plan.type}</p>
                  <p className="font-medium mb-1">{plan.users}</p>
                  <p className="text-2xl font-bold mb-1">{plan.price}</p>
                  {plan.billing && <p className="text-gray-500 mb-3">{plan.billing}</p>}
                  <ul className="list-disc pl-5 space-y-1">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700">
                        <FaCheck className="text-green-500" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  className={`mt-4 w-full py-2 rounded-lg text-white font-semibold bg-gradient-to-r ${plan.color} hover:opacity-90 transition`}
                >
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>

          {/* Trusted Companies */}
          <div className="space-y-4 text-center mt-8">
            <p className="text-gray-500">Trusted by over 17,000 companies and millions of learners around the world</p>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {logos.map((logo, i) => (
                <img key={i} src={logo} alt="company logo" className="h-10 object-contain" />
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="space-y-6 ">
            <h2 className="text-2xl font-bold text-center">Join others transforming their lives through learning</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {reviews.map((review, i) => (
                <div key={i} className="border rounded-lg p-4 shadow-sm">
                  <p className="text-gray-700 italic">"{review.quote}"</p>
                  <p className="mt-2 text-gray-900 font-semibold text-sm">{review.author}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="space-y-4 max-w-3xl mx-auto mt-8">
            <h2 className="text-2xl font-bold text-center">Frequently asked questions</h2>
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border rounded-lg p-4 cursor-pointer"
                onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold">{faq.question}</h3>
                  {openFAQ === i ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {openFAQ === i && <p className="mt-2 text-gray-600">{faq.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlansPage;
