import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SkillBadgeProps {
  name: string;
  icon: LucideIcon;
  level: number;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, icon: Icon, level }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
      <div className="flex flex-col items-center">
        <Icon className="w-12 h-12 text-cyan-400 mb-4" />
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-purple-400 to-cyan-400 h-2 rounded-full"
            style={{ width: `${level}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default SkillBadge;