import React , { useState } from 'react'
import PropTypes from 'prop-types';


import backgroundImage from "../../assets/images/miscellanious-modal-bg.png";
import { ChevronDown, ChevronUp } from "lucide-react";
const data = [
  {
    title: "Coffee/Beverages",
    faqs: [
      {
        question: "What types of coffee does Dunkin’ offer?",
        answer: "Dunkin’ offers a wide range of hot and iced coffees, lattes, macchiatos, cappuccinos, cold brews, and espresso-based drinks."
      },
      {
        question: "Are beverages customizable?",
        answer: "Yes, beverages can be customized with different flavors, milk options, sweeteners, and toppings."
      }
    ]
  },
  {
    title: "Guest Satisfaction Survey",
    faqs: [
      {
        question: "How do I take the survey?",
        answer: "You can take the survey by visiting the website listed on your receipt and entering the required code."
      },
      {
        question: "Do I get a reward for completing it?",
        answer: "Yes, you may receive a reward such as a discount or a free item on your next visit, depending on the current promotion."
      }
    ]
  },
  {
    title: "Corporate Sponsorships & Donations",
    faqs: [
      {
        question: "How do I request a donation?",
        answer: "Donation requests can be submitted through the Dunkin’ Joy in Childhood Foundation website."
      },
      {
        question: "Does Dunkin' support local events?",
        answer: "Yes, Dunkin’ may support local events depending on the nature of the event and availability of resources."
      }
    ]
  },
  {
    title: "Employment, Vendors, & Franchising",
    faqs: [
      {
        question: "How can I apply for a job?",
        answer: "You can apply online at Dunkin’s careers page or inquire in person at your local store."
      },
      {
        question: "How do I become a vendor?",
        answer: "Interested vendors can reach out through the corporate website’s vendor section with their proposal and details."
      },
      {
        question: "How can I franchise a Dunkin' store?",
        answer: "To become a franchisee, visit DunkinFranchising.com to learn about requirements and start your application."
      }
    ]
  },
  {
    title: "Catering",
    faqs: [
      {
        question: "Does Dunkin' offer catering?",
        answer: "Yes, Dunkin’ offers catering options for coffee, donuts, and breakfast items for events and large groups."
      },
      {
        question: "How do I place a large order?",
        answer: "You can place a large order by contacting your local Dunkin’ store in advance or using the mobile app if available."
      }
    ]
  },
  {
    title: "Miscellaneous",
    faqs: [
      {
        question: "Where can I find allergen info?",
        answer: "Allergen and nutritional information is available on the official Dunkin’ website under the 'Menu' section."
      },
      {
        question: "How do I contact support?",
        answer: "You can contact Dunkin’ customer support via their website contact form or by calling their customer service number."
      }
    ]
  }
];

const Accordion = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6 text-[#2d2d2d]">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">RESTAURANT/PRODUCT</h2>
        <span className="text-sm font-semibold">{data.length} Items</span>
      </div>

      {data.map((item, index) => (
        <div key={index} className="border-t py-3">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleItem(index)}
          >
            <h3 className="text-base font-medium">{item.title}</h3>
            {openIndex === index ? (
              <ChevronUp className="w-5 h-5 text-gray-600" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-600" />
            )}
          </div>

          {openIndex === index && (
            <ul className="mt-2 ml-4 list-disc text-sm text-gray-700 space-y-1">
              {item.faqs.map((faq, i) => (
                <li key={i}>
                  <span className="font-semibold">{faq.question}</span>
                  <br />
                  <span>{faq.answer}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

Accordion.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      faqs: PropTypes.arrayOf(
        PropTypes.shape({
          question: PropTypes.string,
          answer: PropTypes.string,
        })
      ).isRequired,
    })
  ).isRequired,
};

export default function Contact() {
  return (
    <div>
      <div
        className="min-h-screen flex items-center justify-center text-center px-4 bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "contain", // تعمل على جميع الشاشات وتتكيف تلقائيًا
        }}
      >
        <div className="bg-white/80 rounded-xl p-6 md:p-12 lg:p-16 max-w-xl w-full shadow-xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#3e2807] mb-4">
            Contact US
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-medium text-[#3e2807]">
            America Runs on Dunkin'®
          </p>
        </div>
      </div>
      <Accordion data={data} />
    </div>
  );
}