import {
  Beaker, Calculator, BookOpen, Leaf, Trophy, Mic, Palette,
  Lightbulb, Grid3x3, Heart, Music, Sword, Monitor, MessageCircle
} from 'lucide-react';

export default function Clubs() {
  const clubs = [
    {
      icon: Beaker,
      title: 'Science Club',
      color: 'bg-purple-600',
      benefits: [
        'Improves scientific knowledge',
        'Develops curiosity',
        'Builds practical experiment skills',
        'Encourages innovation',
        'Improves teamwork',
      ]
    },
    {
      icon: Calculator,
      title: 'Maths Club',
      color: 'bg-blue-600',
      benefits: [
        'Improves logical thinking',
        'Develops problem solving skills',
        'Strengthens analytical ability',
        'Prepares students for maths competitions',
      ],
      extra: 'Celebrates National Mathematics Day in honor of Srinivasa Ramanujan'
    },
    {
      icon: BookOpen,
      title: 'Literature Club',
      color: 'bg-amber-600',
      benefits: [
        'Improves reading and writing skills',
        'Develops vocabulary',
        'Encourages creativity',
        'Improves communication skills',
      ]
    },
    {
      icon: Leaf,
      title: 'Eco Club',
      color: 'bg-green-600',
      benefits: [
        'Environmental awareness',
        'Tree planting initiatives',
        'Recycling and waste management',
        'Cleanliness campaigns',
      ],
      extra: 'Supports national movements such as Swachh Bharat Mission'
    },
  ];

  const activities = [
    {
      icon: Grid3x3,
      title: 'Chess',
      color: 'bg-gray-700',
      description: 'Recognized by FIDE',
      benefits: ['Improves memory', 'Develops strategy', 'Enhances logical thinking']
    },
    {
      icon: Heart,
      title: 'Yoga',
      color: 'bg-orange-600',
      description: 'Mind and body wellness',
      benefits: ['Improves flexibility', 'Reduces stress', 'Improves concentration', 'Builds physical and mental balance']
    },
    {
      icon: Palette,
      title: 'Drawing & Creative Arts',
      color: 'bg-pink-600',
      description: 'Artistic expression',
      benefits: ['Enhances imagination', 'Improves observation skills', 'Encourages creative expression']
    },
    {
      icon: Music,
      title: 'Dance',
      color: 'bg-red-600',
      description: 'Including Bharatanatyam tradition',
      benefits: ['Improves fitness and flexibility', 'Boosts confidence', 'Encourages cultural appreciation']
    },
    {
      icon: Monitor,
      title: 'Computer Education',
      color: 'bg-blue-600',
      description: 'Digital literacy program',
      benefits: ['Digital literacy', 'Internet usage', 'Computer applications', 'Basic programming concepts']
    },
    {
      icon: MessageCircle,
      title: 'Communication Skills',
      color: 'bg-cyan-600',
      description: 'Public speaking & confidence',
      benefits: ['Public speaking', 'Confidence building', 'Leadership skills', 'Team communication']
    },
    {
      icon: Music,
      title: 'Keyboard Music',
      color: 'bg-indigo-600',
      description: 'Musical training',
      benefits: ['Improves memory', 'Develops rhythm and creativity', 'Enhances concentration']
    },
    {
      icon: Sword,
      title: 'Martial Arts',
      color: 'bg-red-700',
      description: 'Silambam & Karate',
      benefits: ['Discipline', 'Self-defense', 'Physical strength']
    },
  ];

  const talentActivities = [
    { icon: Mic, title: 'Elocution Competitions' },
    { icon: BookOpen, title: 'Essay Competitions' },
    { icon: Palette, title: 'Drawing and Painting' },
    { icon: Lightbulb, title: 'Arts from Waste' },
    { icon: Beaker, title: 'Science Exhibitions' },
    { icon: Trophy, title: 'Talent Exams' },
  ];

  const leadershipPrograms = [
    { name: 'JRC', description: 'Junior Red Cross' },
    { name: 'Scouts and Guides', description: 'Character building program' },
    { name: 'RRC', description: 'Road Safety Club' },
    { name: 'NSS', description: 'National Service Scheme' },
  ];

  return (
    <div>
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Clubs & Activities</h1>
          <p className="text-xl text-purple-100">
            Nurturing talents and building character beyond academics
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            School Clubs
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {clubs.map((club, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow">
                <div className={`${club.color} p-6 text-white`}>
                  <div className="flex items-center space-x-4">
                    <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                      <club.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold">{club.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {club.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  {club.extra && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-600 italic">{club.extra}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Extra-Curricular Activities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden">
                <div className={`${activity.color} p-4 text-white text-center`}>
                  <activity.icon className="h-10 w-10 mx-auto mb-2" />
                  <h3 className="font-bold text-lg">{activity.title}</h3>
                  <p className="text-xs mt-1 opacity-90">{activity.description}</p>
                </div>
                <div className="p-4">
                  <ul className="space-y-1 text-sm">
                    {activity.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-600 mr-1 text-xs">•</span>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Talent Development Activities
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {talentActivities.map((activity, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-lg">
                  <activity.icon className="h-8 w-8 text-white" />
                </div>
                <p className="text-sm font-medium text-gray-900">{activity.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Leadership Programs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadershipPrograms.map((program, index) => (
              <div key={index} className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-xl border border-white border-opacity-20">
                <h3 className="text-xl font-bold mb-2">{program.name}</h3>
                <p className="text-blue-100 text-sm">{program.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg text-blue-100">
              These programs help develop leadership, discipline, and social responsibility
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
