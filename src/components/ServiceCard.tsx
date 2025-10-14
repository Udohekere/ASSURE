import { useState } from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  overview: string;
  howWeWork: string;
  deliverables: string;
  impact: string;
  serviceName: string;
  expandedService: string | null;
  onToggle: (serviceName: string) => void;
  className?: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  overview,
  howWeWork,
  deliverables,
  impact,
  serviceName,
  expandedService,
  onToggle,
  className = ''
}: ServiceCardProps) {
  return (
    <div className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all ${className}`}>
      <Icon className="text-blue-600 mb-4" size={40} />
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-2 text-sm leading-relaxed">{description}</p>
      <button
        onClick={() => onToggle(serviceName)}
        className="text-blue-600 hover:text-blue-700 text-sm font-medium"
      >
        {expandedService === serviceName ? 'show less' : '...read more'}
      </button>
      {expandedService === serviceName && (
        <div className="mt-4 pt-4 border-t border-gray-200 space-y-3">
          <div>
            <p className="text-sm font-semibold text-gray-900 mb-1">Overview</p>
            <p className="text-sm text-gray-600">{overview}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900 mb-1">How We Work</p>
            <p className="text-sm text-gray-600">{howWeWork}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900 mb-1">Deliverables</p>
            <p className="text-sm text-gray-600">{deliverables}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900 mb-1">Impact</p>
            <p className="text-sm text-gray-600">{impact}</p>
          </div>
        </div>
      )}
    </div>
  );
}
