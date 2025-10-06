import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const skills = [
  { name: 'Family residential', percentage: 80 },
  { name: 'Vacation rentals', percentage: 75 },
  { name: 'Residential leasing', percentage: 95 },
  { name: 'New development', percentage: 95 },
];

const SkillsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold mb-8">Our Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center">
              <div className="w-32 h-32">
                <CircularProgressbar
                  value={skill.percentage}
                  text={`${skill.percentage}%`}
                  styles={buildStyles({
                    pathColor: '#f87171', // red color
                    textColor: '#333',
                    trailColor: '#f0f0f0',
                    strokeLinecap: 'round',
                    pathTransitionDuration: 1, // Animation duration in seconds
                  })}
                />
              </div>
              <p className="mt-4 text-xl font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
