import React from 'react'

const removeYourData = () => {
  return (
    <div className="mt-20 ml-15">
        <h1 className="text-5xl mb-15 text-blue-700">Request to Remove Your Data</h1>
        <div className='text-2xl text-gray-700'>
            <p className='text-gray-700'><strong className='font-bold'>Last Updated</strong>: [13-Aug-2025]</p>
            <p className='mt-8'>At [<strong>Drive Checkr</strong>], we respect your privacy and give you full control over your personal information. You have the right to request that we delete any personal, contact, or vehicle-related data we have collected about you.</p>
            <h1 className='mt-15 text-gray-700 font-bold text-3xl'>1. What Data Can Be Removed</h1>
            <p className='mt-3 text-gray-700'>You can request the deletion of:</p>
            <ul className='list-disc ml-10 mt-4 text-gray-700'>
              <li className='mt-3 text-gray-700'>Your name, address, phone number, and email address</li>
              <li className='mt-3 text-gray-700'>Vehicle details you provided during booking or inspection</li>
              <li className='mt-3 text-gray-700'>Inspection reports and related documents</li>
              <li className='mt-3 text-gray-700'>Payment records (except where retention is required by law)</li>
            </ul>
            <h1 className='mt-15 text-gray-700 font-bold text-3xl'>2. How to Request Data Removal</h1>
            <p className='mt-3 text-gray-700'>To request deletion of your data:</p>
            <ol className='list-disc ml-10 mt-4 text-gray-700'>
              <li className='mt-3 text-gray-700'>Email us at [<strong>info@drivecheckr.com</strong>] with the subject line: "<strong>Data Removal Request</strong>"</li>
              <li className='mt-3 text-gray-700'>Include your <strong>full name</strong>, <strong>contact details</strong>, and any <strong>reference number</strong> related to your booking or inspection.</li>
              <li className='mt-3 text-gray-700'>We may request proof of identity to ensure the request is legitimate and secure.</li>
            </ol>
            <h1 className='mt-15 text-gray-700 font-bold text-3xl'>3. Processing Time</h1>
            <ol className='list-disc ml-10 mt-4 text-gray-700'>
              <li className='mt-3 text-gray-700'>We aim to respond to your request within <strong>[X] business days</strong>.</li>
              <li className='mt-3 text-gray-700'>Once verified, your data will be permanently deleted from our systems within <strong>[X] business days</strong>, unless we are legally required to retain it.</li>
            </ol>
            <h1 className='mt-15 text-gray-700 font-bold text-3xl'>4. Legal Exceptions</h1>
            <p className='mt-3 text-gray-700'>We may be unable to delete certain data if:</p>
            <ol className='list-disc ml-10 mt-4 text-gray-700'>
              <li className='mt-3 text-gray-700'>It is required for legal, accounting, or regulatory compliance</li>
              <li className='mt-3 text-gray-700'>It relates to an ongoing dispute, claim, or investigation</li>
            </ol>
            <h1 className='mt-15 text-gray-700 font-bold text-3xl'>5. Confirmation of Deletion</h1>
            <p className='mt-3 text-gray-700'>Once your request is processed, we will send you a confirmation email stating that your data has been removed from our active systems.</p>
            <h1 className='mt-15 text-gray-700 font-bold text-2xl'>Contact Us</h1>
            <p className='mt-3 text-gray-700'>If you have questions about this policy or need help with a data removal request, contact us at:</p>
            <p className='mt-3 text-gray-700'>📧 Email: [info@drivecheckr.com]</p>
            <p className='mt-10'>If you want, I can <strong>merge this into your Privacy & Security Policy</strong> so your site has <strong>one complete GDPR/Privacy-compliant page</strong> instead of three separate ones.</p>
        </div>
    </div>
  )
}

export default removeYourData