import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="space-y-6 text-gray-600">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p>By accessing and using Orion Pest Control's services, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Services</h2>
              <p>Orion Pest Control provides professional pest control services including but not limited to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Ant Control</li>
                <li>Gopher Control</li>
                <li>Bed Bug Treatment</li>
                <li>Rodent Control</li>
                <li>Cockroach Elimination</li>
                <li>Termite Protection</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Service Guarantees</h2>
              <p>We provide service guarantees as specified for each service type. These guarantees are subject to proper maintenance and following our recommended prevention measures.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Payment Terms</h2>
              <p>Payment is due upon completion of services unless otherwise arranged. We accept various payment methods including credit cards, debit cards, and cash.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Cancellation Policy</h2>
              <p>Appointments may be cancelled up to 24 hours before the scheduled service time without penalty. Late cancellations may be subject to a cancellation fee.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Liability</h2>
              <p>Orion Pest Control maintains appropriate insurance coverage for all services provided. Our liability is limited to the cost of the service provided.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Changes to Terms</h2>
              <p>We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Contact Information</h2>
              <p>For questions about these Terms of Service, please contact us at:</p>
              <p className="mt-2">Phone: +1-408-929-5221</p>
              <p>Email: info@orionpestcontrol.com</p>
            </section>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService; 