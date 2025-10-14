import { Mail, Phone, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-4">
              <img src="/logo copy.png" alt="AssuranceHill Consulting" className="h-10" />
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Governance, Risk, and Compliance Services for a Changing World.
            </p>
            <div className="flex space-x-3">
              <a href="https://www.linkedin.com/company/assurancehill" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/assurancehill" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => document.getElementById('advisory')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white transition-colors text-left">
                  Advisory Services
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('grc')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white transition-colors text-left">
                  GRC Services
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('training')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white transition-colors text-left">
                  Training Services
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white transition-colors text-left">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white transition-colors text-left">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white transition-colors text-left">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <Mail className="mr-2 flex-shrink-0 mt-1" size={18} />
                <a href="mailto:info@assurancehill.com" className="hover:text-white transition-colors">
                  info@assurancehill.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="mr-2 flex-shrink-0 mt-1" size={18} />
                <a href="tel:+13015326211" className="hover:text-white transition-colors">
                  301-532-6211
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="text-center text-gray-400">
            <p className="mb-2">&copy; {new Date().getFullYear()} AssuranceHill Consulting. All rights reserved.</p>
            <p className="text-sm italic text-gray-500">"If you fail to plan, you plan to fail."</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
