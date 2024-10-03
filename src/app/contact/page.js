"use client";

import React, { useState } from 'react';
import { sendEmail } from './action';

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormStatus('loading');

    const formData = new FormData(event.currentTarget);
    const result = await sendEmail(formData);

    if (result.success) {
      setFormStatus('success');
    } else {
      setFormStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="p-8 w-full">
            <div className="uppercase tracking-wide text-xl text-green-700 font-bold mb-1">Contact Us</div>
            <p className="text-xl leading-tight mb-4 mt-4">
              Need to get in touch with us?<br/>Fill the form below
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50"
                >
                  {formStatus === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
            {formStatus === 'success' && (
              <div className="mt-4 text-sm text-green-600">
                Your message has been sent successfully!
              </div>
            )}
            {formStatus === 'error' && (
              <div className="mt-4 text-sm text-red-600">
                There was an error sending your message. Please try again.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}