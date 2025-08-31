import { GraduationCap, School } from 'lucide-react';
import { Timeline } from '../ui/timeline';

export default function Education() {
  const data = [
    {
      title: 'Graduation',
      logo: <GraduationCap className="size-6 text-gray-300" />,
      location: 'Noida',
      time: '2023-2027 (present)',
      content: (
        <div className="mb-8 flex flex-col gap-2">
          <h1 className="text-2xl dark:text-gray-300 text-slate-700 font-bold">
            B-Tech in Computer Science Engineering
          </h1>
          <h2 className="text-lg text-gray-400">
            JSS ACADEMY OF TECHNICAL EDUCATION
          </h2>
          <p className="text-sm text-gray-600">
            Third-year CS student with a CGPA of 8.9. Actively building web
            projects, participating in hackathons, and contributing to GDG
            onCampus JSS.
          </p>
        </div>
      ),
    },
    {
      title: 'School',
      location: 'Lucknow',
      logo: <School className="size-6 text-gray-300" />,
      time: '2022',
      content: (
        <div className="mb-8 flex flex-col gap-2">
          <h1 className="text-2xl dark:text-gray-300 text-slate-700 font-bold">
            12th Standard (CBSE)
          </h1>
          <h2 className="text-lg text-gray-400">
            CATHEDRAL SENIOR SECONDARY SCHOOL
          </h2>
          <p className="text-sm text-gray-600">
            Completed senior secondary education with a strong foundation in
            science and mathematics.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div
      className="relative w-full overflow-clip p-4 bg-education-dots-pattern "
      id="education"
    >
      <Timeline data={data} />
    </div>
  );
}
