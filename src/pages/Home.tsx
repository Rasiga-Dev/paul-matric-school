import { Users, BookOpen, Award, Lightbulb, Target, Rocket } from 'lucide-react';

export default function Home() {
  const highlights = [
    { icon: Award, label: 'Established', value: '1983' },
    { icon: Users, label: 'Students', value: '600+' },
    { icon: BookOpen, label: 'Teaching Staff', value: '25' },
    { icon: Lightbulb, label: 'Non-Teaching Staff', value: '5' },
  ];

  const mottoItems = [
    {
      icon: Lightbulb,
      title: 'Awake',
      description: 'Discover your talents and purpose',
      color: 'bg-amber-500',
    },
    {
      icon: Rocket,
      title: 'Arise',
      description: 'Build confidence, courage, and character',
      color: 'bg-green-500',
    },
    {
      icon: Target,
      title: 'Achieve',
      description: 'Strive for excellence and lifelong success',
      color: 'bg-blue-500',
    },
  ];

  return (
    <div>
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Welcome to Paul Matriculation School
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Located in the heart of Polepettai, Thoothukudi, Paul Matriculation School
              has been shaping young minds since 1983.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg">
              Explore Our Journey
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                  <item.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <p className="text-3xl font-bold text-gray-900 mb-2">{item.value}</p>
                <p className="text-sm text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our School Motto
            </h2>
            <p className="text-xl text-blue-600 font-semibold">
              Awake, Arise & Achieve
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mottoItems.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className={`${item.color} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Managed by Paul Education Trust
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            A non-profit institution dedicated to transforming students from
            Average → Good → Better → Best → Excellent
          </p>
        </div>
      </section>
    </div>
  );
}
