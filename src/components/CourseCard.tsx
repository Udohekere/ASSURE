import { useState } from 'react';
import { LucideIcon } from 'lucide-react';

interface CourseCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  overview: string;
  coreAreas: string[];
  deliverables: string;
  impact: string;
  courseName: string;
  expandedCourse: string | null;
  onToggle: (courseName: string) => void;
}

export default function CourseCard({
  icon: Icon,
  title,
  description,
  overview,
  coreAreas,
  deliverables,
  impact,
  courseName,
  expandedCourse,
  onToggle
}: CourseCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 relative">
      <Icon className="mb-4" size={40} />
      <h4 className="text-2xl font-bold mb-3">{title}</h4>
      <p className="text-blue-100 leading-relaxed mb-2 text-sm">{description}</p>
      <button
        onClick={() => onToggle(courseName)}
        className="text-white hover:text-blue-200 text-sm font-medium underline"
      >
        {expandedCourse === courseName ? 'show less' : '...read more'}
      </button>
      {expandedCourse === courseName && (
        <div className="mt-4 pt-4 border-t border-white/20 space-y-3">
          <div>
            <p className="text-sm font-semibold mb-1">Overview</p>
            <p className="text-sm text-blue-100">{overview}</p>
          </div>
          <div>
            <p className="text-sm font-semibold mb-1">Core Focus Areas</p>
            <ul className="text-sm text-blue-100 space-y-1">
              {coreAreas.map((area, index) => (
                <li key={index}>• {area}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold mb-1">Deliverables</p>
            <p className="text-sm text-blue-100">{deliverables}</p>
          </div>
          <div>
            <p className="text-sm font-semibold mb-1">Impact</p>
            <p className="text-sm text-blue-100">{impact}</p>
          </div>
        </div>
      )}
    </div>
  );
}
