import { ArrowRight, CheckCircle, TrendingUp, Shield, Lightbulb, Award, Users, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-32 pb-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Plan. Govern. Comply.
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-8">
            Grow with Confidence.
          </h2>
          <p className="text-2xl text-gray-700 mb-4 max-w-4xl mx-auto leading-relaxed">
            Governance, Risk, and Compliance Services for a Changing World.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <p className="text-xl text-gray-700 leading-relaxed max-w-5xl mx-auto mb-8">
            At AssuranceHill Consulting, we help organizations navigate compliance, strengthen governance, and manage risk with confidence. Our team combines deep GRC expertise and AI-driven insights to deliver solutions tailored to your industry.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 max-w-4xl mx-auto">
            <div className="text-center bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border border-blue-100 shadow-sm">
              <Award className="text-blue-600 mx-auto mb-3" size={40} />
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-2">10+</div>
              <div className="text-gray-700 font-semibold">Years of Experience</div>
            </div>
            <div className="text-center bg-gradient-to-br from-green-50 to-white rounded-xl p-6 border border-green-100 shadow-sm">
              <Users className="text-green-600 mx-auto mb-3" size={40} />
              <div className="text-5xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent mb-2">1000+</div>
              <div className="text-gray-700 font-semibold">Professionals Mentored</div>
            </div>
            <div className="text-center bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 border border-purple-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">NEW</div>
              <Sparkles className="text-purple-600 mx-auto mb-3" size={40} />
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">AI-GRC</div>
              <div className="text-gray-700 font-semibold">Masterclass</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={scrollToContact} className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all font-semibold flex items-center justify-center group shadow-lg hover:shadow-xl">
              Schedule a Consultation
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={scrollToServices} className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-all font-semibold">
              Explore Services
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <a href="#advisory" className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-blue-600 group cursor-pointer">
            <Lightbulb className="text-blue-600 mb-3 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="font-bold text-lg text-gray-900 mb-2">Advisory Services</h3>
            <p className="text-sm text-gray-600">Strategic guidance for GRC excellence</p>
          </a>
          <a href="#grc" className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-blue-600 group cursor-pointer">
            <Shield className="text-blue-600 mb-3 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="font-bold text-lg text-gray-900 mb-2">GRC Services</h3>
            <p className="text-sm text-gray-600">Comprehensive risk management</p>
          </a>
          <a href="#management" className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-blue-600 group cursor-pointer">
            <TrendingUp className="text-blue-600 mb-3 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="font-bold text-lg text-gray-900 mb-2">Management Consulting</h3>
            <p className="text-sm text-gray-600">Business transformation support</p>
          </a>
          <a href="#training" className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-blue-600 group cursor-pointer">
            <CheckCircle className="text-blue-600 mb-3 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="font-bold text-lg text-gray-900 mb-2">Training Services</h3>
            <p className="text-sm text-gray-600">Expert-led courses and workshops</p>
          </a>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-10 text-white">
          <h3 className="text-3xl font-bold mb-8 text-center">What We Deliver</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <CheckCircle className="mx-auto mb-4" size={40} />
              <p className="text-lg leading-relaxed">
                Accelerated certifications and audits — enabling faster revenue and market entry.
              </p>
            </div>
            <div className="text-center">
              <CheckCircle className="mx-auto mb-4" size={40} />
              <p className="text-lg leading-relaxed">
                Transformed compliance into business value — driving sales wins and customer trust.
              </p>
            </div>
            <div className="text-center">
              <CheckCircle className="mx-auto mb-4" size={40} />
              <p className="text-lg leading-relaxed">
                Delivered executive-ready insights — empowering leaders with clear, actionable reporting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
