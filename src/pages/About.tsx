import { Users, Target, Lightbulb, Heart, BookOpen, TrendingUp } from 'lucide-react';

export default function About() {
  const leadership = [
    { role: 'Correspondent', name: 'Dr. S. Arunmozhi Selvi Ravindran' },
    { role: 'Director', name: 'Dr. Samuel Jebaselvan' },
    { role: 'Trustee', name: 'Mrs. Sridevi Radhakrishnan' },
    { role: 'Trustee', name: 'Mr. S. Arun Sundar' },
    { role: 'Legal Advisor', name: 'Mr. M. Sundarapandi' },
    { role: 'Principal', name: 'J. Vinotha' },
  ];

  const lifeSkills = [
    { icon: Target, title: 'Decision Making', color: 'bg-blue-500' },
    { icon: TrendingUp, title: 'Time Management', color: 'bg-green-500' },
    { icon: Heart, title: 'Hygiene & Health', color: 'bg-red-500' },
    { icon: Lightbulb, title: 'Critical Thinking', color: 'bg-amber-500' },
    { icon: Users, title: 'Leadership', color: 'bg-purple-500' },
    { icon: BookOpen, title: 'Teamwork', color: 'bg-cyan-500' },
  ];

  const principles = [
    'Transparency',
    'Reliability',
    'Continuous Improvement',
    'Leadership Development',
  ];

  return (
    <div>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-blue-100">Excellence in Education Since 1983</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Leadership Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadership.map((person, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl border-l-4 border-blue-600">
                <p className="text-sm font-semibold text-blue-600 mb-2">{person.role}</p>
                <p className="text-lg font-bold text-gray-900">{person.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Principal's Message
            </h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <p className="text-gray-700 mb-4 leading-relaxed">
                Paul Matriculation School is a non-profit institution committed to providing
                quality education for more than four decades.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We focus on transforming students: <span className="font-semibold text-blue-600">
                Average → Good → Better → Best → Excellent</span>
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our curriculum encourages students to:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">Explore fearlessly</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">Think critically</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">Solve problems independently</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">Express themselves confidently</span>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                The school follows the Tamil Nadu Board of Secondary Education curriculum and
                provides structured learning from Pre-School to High School.
              </p>
              <div className="mt-6 pt-6 border-t">
                <p className="font-semibold text-gray-900">J. Vinotha</p>
                <p className="text-sm text-gray-600">Principal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Life Skills Development
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lifeSkills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className={`${skill.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <skill.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{skill.title}</h3>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-blue-50 p-6 rounded-xl">
            <p className="text-gray-700 text-center">
              These skills are taught through school assemblies, workshops, peer learning,
              and real-life exposure programs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Learning Philosophy
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Core Principles</h3>
              <ul className="space-y-3">
                {principles.map((principle, index) => (
                  <li key={index} className="flex items-center">
                    <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-3">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{principle}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Learning Methods</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">Collaborative learning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">Seminars and workshops</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">Interactive classroom sessions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">Activity-based learning</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">
            Parent-Teacher Partnership
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed">
            The school maintains a strong Parent-Teacher Relationship Program to ensure
            continuous communication between parents and teachers. This partnership supports
            the complete development of every child.
          </p>
        </div>
      </section>
    </div>
  );
}
