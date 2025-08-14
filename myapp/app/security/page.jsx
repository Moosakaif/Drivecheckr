import React from 'react'

const security = () => {
  return (
    <div className="mt-20 ml-15 ">
        <h1 className="text-5xl mb-15 text-blue-700">Security Policy</h1>
        <div className='text-2xl'>
            <p className='text-gray-700 '><strong className='text-black'>Last Updated</strong>: [13-Aug-2025]</p>
            <p className='text-gray-700 mt-5'>At [<strong>Drive Checkr</strong>], we take the security of our customers’ data and our inspection reports seriously. This Security Policy outlines the measures we take to protect your personal information, payment details, and any vehicle-related data you share with us.</p>
            <h1 className='font-bold  mt-10 text-3xl'>1. Data Protection Measures</h1>
            <ul className='list-disc ml-10 mt-4 text-gray-700'>
                <li>All personal and payment information entered on our website is transmitted using <strong>SSL (Secure Socket Layer) encryption</strong> to prevent unauthorized interception.</li>
                <li className='mt-2'>We store sensitive data only on <strong>secure, access-controlled servers</strong>.</li>
                <li className='mt-2'>Access to customer data is <strong>restricted to authorized staff members</strong> who require it to perform their duties.</li>
            </ul>
                <h1 className='text-3xl mt-10 font-bold'>2.Payment Security</h1>
                <ul className='list-disc ml-10 mt-4 text-gray-700'>
                    <li className='mt-2'>We do not store your credit or debit card details on our servers.</li>
                    <li className='mt-2'>All online payments are processed through <strong>trusted, PCI-DSS compliant payment gateways</strong> (e.g., Stripe, PayPal).</li>
                </ul>
                <h1 className='font-bold  mt-10 text-3xl'>3. Website & Network Security</h1>
                <ul className='list-disc ml-10 mt-4 text-gray-700'>
                    <li className='m-2'>Our website is regularly scanned for <strong>malware and vulnerabilities</strong>.</li>
                    <li className='m-2'>We employ <strong>firewalls, intrusion detection systems, and security monitoring tools</strong> to safeguard our online infrastructure.</li>
                    <li className='m-2'>All software and plugins are kept <strong>up to date</strong> to minimize security risks.</li>
                </ul>
                <h1 className='font-bold  mt-10 text-3xl'>4. Inspection Report Security</h1>
                <ul className='list-disc ml-10 mt-4 text-gray-700'>
                    <li className='mt-2'>Vehicle inspection reports are stored in secure digital formats and shared only with the customer who booked the service (unless the customer gives written permission to share).</li>
                    <li className='mt-2'>Reports may be password-protected or sent via secure links where necessary.</li>
                </ul>
                <h1 className='font-bold  mt-10 text-3xl'>5. Customer Responsibilities</h1>
                <ul className='list-disc ml-10 mt-4 text-gray-700'>
                    <li className='mt-2'>Keep your account login details (if applicable) secure and do not share them with others.</li>
                    <li className='mt-2'>If you suspect unauthorized access to your data or inspection report, notify us immediately at [<strong>info@drivecheckr.com</strong>].</li>
                </ul>
                <h1 className='font-bold  mt-10 text-3xl'>6. Data Breach Response</h1>
                <p className='text-2xl text-gray-700 mt-2'>In the unlikely event of a data breach:</p>
                <ul className='list-disc ml-10 mt-4 text-gray-700'>
                    <li className='mt-2'>We will <strong>immediately investigate</strong> and secure the affected systems.</li>
                    <li className='mt-2'>Affected customers will be <strong>notified promptly</strong>.</li>
                    <li className='mt-2'>We will take corrective measures to prevent similar incidents in the future.</li>
                </ul>
                <h1 className='font-bold  mt-10 text-2xl'>Contact Us</h1>
                <p className='text-gray-700 mt-2'>If you have any questions about our Security Policy, you can reach us at:</p>
                <p className='text-gray-700 mt-2'>📧 Email: [info@drivecheckr.com]</p>
                {/* <p className='text-gray-700 mt-6'>If you want, I can also <strong>combine this with a Privacy Policy</strong> so that your site has one clear, professional "<strong>Privacy & Security</strong>" page instead of two separate ones — which is common for inspection companies.</p> */}
                <br /><br /><br />
        </div>
    </div>
  )
}

export default security