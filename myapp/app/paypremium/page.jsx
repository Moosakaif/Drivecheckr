'use client';

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Home() {
  const formRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        'service_xd6n37r',     // ✅ Your EmailJS Service ID
        'template_cu7vlfe',    // ✅ Your EmailJS Template ID
        formRef.current,
        'k3B55Mf9wXRT4wOU2'    // Your EmailJS Public Key
      )
      .then(
        () => {
          // Redirect to PayPal after success
          window.location.href = 'https://payment-links.mollie.com/payment/5knNYkr9XQi9bnqCfwQdK';
        },
        (error) => {
          console.error('Email sending failed:', error.text);
        }
      );
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Section */}
          <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
              <h2 className="text-xl font-bold mb-4">Fill The Form To Proceed.....</h2>

              <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
                <input
                  name="from_name"
                  type="text"
                  placeholder="Full Name"
                  required
                  className="w-full p-3 border rounded"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full p-3 border rounded"
                />
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  required
                  className="w-full p-3 border rounded"
                />
                <input
                  name="vin"
                  type="text"
                  placeholder="VIN / Registration"
                  required
                  className="w-full p-3 border rounded"
                />

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                  Send Report
                </button>
              </form>
            </div>
          </div>

          {/* Right Section */}
          <div className="md:w-2/5">
            <div className="bg-white p-6 border rounded">
              <h3 className="text-lg mb-4">With Drive Checkr you may get</h3>

              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {[
                  'Mileage check',
                  'Road Tax History',
                  'Technical Specs',
                  'NCT/CRW/MOT History',
                  'Stolen Vehicle Check',
                  'Previous Usage Check',
                  'Vehical Valuation',
                  'Owner History',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <span className="text-green-600 mr-1">✔</span>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}

                <div className="border w-100 rounded-2xl">
                  <div className="mb-2 mt-4 ml-4">
                    <span className="text-2xl font-bold">$59.99</span>
                    <span className="text-1xl font-bold"> report</span>
                  </div>

                  <div className="text-sm mb-1 mt-2 ml-4">
                    You pay $59.99 <span className="line-through">$70.00</span>
                  </div>

                  <div className="bg-red-300 text-red-700 w-16 text-center py-1 mb-4 mt-2 ml-4 rounded">
                    -31.77%
                  </div>

                  <div className="border-t pt-4 flex items-center text-sm text-gray-600">
                    <div className="flex items-center">
                      <span className="text-green-600 mr-1 ml-4 mb-3">✔</span>
                      <div className="mb-3 ml-2">You'll get report</div>
                    </div>
                    <div className="ml-auto bg-gray-200 rounded-full h-5 w-5 mb-3 mr-3 flex items-center justify-center text-gray-400">
                      i
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>  
        </div>
      </div>
    </div>
  );
}
