import { Target, CheckCircle, Shield, Briefcase } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Our Story</h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              AssuranceHill Consulting is a boutique firm specializing in Governance, Risk, and Compliance (GRC) with a forward-looking approach to Artificial Intelligence, Cloud, and Cybersecurity. We help organizations navigate complex compliance frameworks while equipping teams with practical training to stay ahead. AssuranceHill Consulting is a boutique firm specializing in Governance, Risk, and Compliance (GRC) with a strong focus on AI adoption and cybersecurity frameworks.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              We help leaders convert compliance into trust and growth. Our team blends deep framework expertise (NIST, ISO, SOC, PCI, HIPAA) with pragmatic delivery so your audits, customers, and board get what they need—without slowing the business.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Mission</h2>
          <p className="text-2xl text-gray-800 leading-relaxed max-w-4xl mx-auto text-center">
            To empower businesses and professionals with the tools, strategies, and knowledge to manage risk, achieve compliance, and thrive in a regulated digital world.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <CheckCircle className="text-blue-600 mb-4" size={48} />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Practical</h3>
              <p className="text-gray-700 leading-relaxed">
                Hands-on methods with real-world frameworks.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <Target className="text-blue-600 mb-4" size={48} />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategic</h3>
              <p className="text-gray-700 leading-relaxed">
                Forward-looking GRC tailored to your business.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <Shield className="text-blue-600 mb-4" size={48} />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Trusted</h3>
              <p className="text-gray-700 leading-relaxed">
                Proven experience across multiple industries.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-12 text-center">
          <Briefcase className="mx-auto mb-6 text-blue-600" size={56} />
          <p className="text-3xl font-bold italic text-gray-900">
            If you fail to plan, you plan to fail
          </p>
        </div>
      </div>
    </section>
  );
}
