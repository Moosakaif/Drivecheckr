import React from 'react'

const refund = () => {
  return (
    <div className="mt-20 ml-15">
        <h1 className="text-5xl mb-15 text-blue-700">Refund Policy</h1>
        <div className='text-2xl text-gray-700ray'>
            <p className='text-gray-700'><strong className='font-bold'>Last Updated</strong>: [13-Aug-2025]</p>
            <p className='mt-8'>At [<strong>Drive Checkr</strong>], we strive to provide accurate and high-quality vehicle inspection services. This Refund Policy explains the circumstances under which you may or may not receive a refund for services booked through our website, by phone, or in person.</p>
            <h1 className='mt-15 text-gray-900 font-bold text-3xl'>1. General Policy</h1>
            <ul className='list-disc ml-10 mt-4 text-gray-700'>
                <li className='mt-3 text-gray-700'>Inspection service fees are <strong>non-refundable</strong> once the inspection has been completed, regardless of the outcome of the inspection or your decision to purchase or not purchase the vehicle.</li>
                <li className='mt-3 text-gray-700'>Refunds will only be considered in specific cases outlined below.</li>
            </ul>
            <h1 className='mt-15 text-gray-900 font-bold text-3xl'>2. Eligible Refund Situations</h1>
            <p className='text-gray-700'>You may be eligible for a refund if:</p>
            <ul className='list-disc ml-10 mt-4 text-gray-700'>
                <li className='mt-3 text-gray-700'>We are unable to carry out the inspection due to reasons under our control (e.g., inspector unavailability, internal scheduling errors).</li>
                <li className='mt-3 text-gray-700'>The inspection was canceled by us without offering an alternative appointment.</li>
                <li className='mt-3 text-gray-700'>You cancel your booking <strong>at least</strong> [<strong>24 hours/days</strong>] before the scheduled inspection time.</li>
            </ul>
            <h1 className='mt-15 text-gray-900 font-bold text-3xl'>3. Non-Refundable Situations</h1>
            <p className='text-gray-700'>Refunds will not be issued if:</p>
            <ul className='list-disc ml-10 mt-4 text-gray-700'>
                <li className='mt-3 text-gray-700'>The vehicle was not available or accessible at the agreed time and location.</li>
                <li className='mt-3 text-gray-700'>The inspection could not be completed due to weather, unsafe conditions, or third-party refusal.</li>
                <li className='mt-3 text-gray-700'>You are dissatisfied with the findings of the report but the inspection was performed as agreed.</li>
                <li className='mt-3 text-gray-700'>You canceled your booking after the cut-off time.</li>
            </ul>
            <h1 className='mt-15 text-gray-900 font-bold text-3xl'>4. How to Request a Refund</h1>
            <p className='text-gray-700'>To request a refund, please follow these steps:</p>
            <ul className='list-disc ml-10 mt-4 text-gray-700'>
                <li className='mt-3 text-gray-700'>Contact us at [info@drivecheckr.com] within [24 hours] of the scheduled inspection.</li>
                <li className='mt-3 text-gray-700'>Provide your <strong>booking reference number</strong> and details of your request.</li>
                <li className='mt-3 text-gray-700'>Refund requests will be reviewed and processed within [<strong>24 hours</strong>].</li>
            </ul>
            <h1 className='mt-15 text-gray-900 font-bold text-3xl'>5. Refund Method</h1>
            <ul className='list-disc ml-10 mt-4 text-gray-700'>
                <li className='mt-3 text-gray-700'>
                    <p className='mt-3 text-gray-700'>If approved, refunds will be issued to the original payment method used at the time of booking.</p>
                </li>
                <li>
                    <p className='mt-3 text-gray-700'>Please allow [<strong>24 hours</strong>] for the refund to reflect in your account, depending on your bank or payment provider.</p>
                </li>
            </ul>
            <h1 className='mt-15 text-gray-700 font-bold text-2xl'>Contact Us</h1>
            <p className='mt-3 text-gray-700'>If you have questions about this policy or need help with a data removal request, contact us at:</p>
            <p className='mt-3 text-gray-700'>📧 Email: [info@drivecheckr.com]</p>
            <br /><br /><br />
        </div>
    </div>
  )
}

export default refund