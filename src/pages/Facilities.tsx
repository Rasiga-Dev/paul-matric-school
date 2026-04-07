import {
  Shield, Camera, Bus, Droplet, HeartPulse, Trees,
  Monitor, BookOpen, Beaker, Clock, FileText
} from 'lucide-react';

export default function Facilities() {
  const campusFacilities = [
    { icon: Trees, title: 'Peaceful Environment', description: 'Calm and peaceful learning environment' },
    { icon: Shield, title: 'Safe & Clean', description: 'Clean and hygienic infrastructure' },
    { icon: Droplet, title: 'Pure Water', description: 'Purified drinking water' },
    { icon: HeartPulse, title: 'First Aid', description: 'First aid and student safety measures' },
    { icon: Camera, title: 'CCTV Surveillance', description: 'Complete campus monitoring' },
    { icon: Bus, title: 'GPS Transport', description: 'GPS-enabled school transport monitoring' },
  ];

  const academicFacilities = [
    {
      icon: Monitor,
      title: 'Smart Classrooms',
      description: 'Interactive and activity-based learning with modern technology'
    },
    {
      icon: BookOpen,
      title: 'Library',
      description: 'Well-stocked library with books and journals for all grades'
    },
    {
      icon: Beaker,
      title: 'Science Laboratory',
      description: 'Fully equipped science lab for practical experiments'
    },
    {
      icon: Monitor,
      title: 'Computer Laboratory',
      description: 'Modern computer lab with latest technology'
    },
  ];

  const workingHours = [
    { class: 'Pre-KG', timing: '9:00 AM – 12:00 PM' },
    { class: 'LKG, UKG, I & II', timing: '8:45 AM – 4:00 PM' },
    { class: 'III – V', timing: '8:45 AM – 4:15 PM' },
    { class: 'VI – IX', timing: '8:45 AM – 4:30 PM' },
    { class: 'X', timing: '8:00 AM – 6:00 PM' },
  ];

  const examSystems = [
    {
      title: 'LKG – VII',
      exams: [
        '3 Mid-Term Tests',
        '3 Term Examinations',
      ]
    },
    {
      title: 'VIII – X',
      exams: [
        'Monthly Tests',
        '3 Mid-Term Tests',
        'Quarterly Examination',
        'Half-Yearly Examination',
        'Annual Examination',
      ]
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Facilities</h1>
          <p className="text-xl text-green-100">
            World-class infrastructure for holistic development
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Campus Facilities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campusFacilities.map((facility, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-green-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-green-100">
                <div className="bg-green-600 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <facility.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{facility.title}</h3>
                <p className="text-gray-600 text-sm">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Academic Facilities
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {academicFacilities.map((facility, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <facility.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{facility.title}</h3>
                <p className="text-gray-600 leading-relaxed">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900">School Working Hours</h2>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Class</th>
                    <th className="px-6 py-4 text-left font-semibold">Timing</th>
                  </tr>
                </thead>
                <tbody>
                  {workingHours.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-blue-50'}>
                      <td className="px-6 py-4 font-medium text-gray-900">{item.class}</td>
                      <td className="px-6 py-4 text-gray-700">{item.timing}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <FileText className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900">Examination System</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {examSystems.map((system, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-blue-600">
                  {system.title}
                </h3>
                <ul className="space-y-3">
                  {system.exams.map((exam, examIndex) => (
                    <li key={examIndex} className="flex items-center">
                      <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0">
                        {examIndex + 1}
                      </span>
                      <span className="text-gray-700">{exam}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Why Parents Choose Us
          </h2>
          <p className="text-xl text-blue-100 mb-6 leading-relaxed">
            We focus on both academic excellence and character development with
            individual attention for every student.
          </p>
          <div className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg">
            "Once your child joins us, they become our child"
          </div>
        </div>
      </section>
    </div>
  );
}
