import {
  Zap,
  BarChart2,
  Puzzle,
  Shield
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      title: 'Automated Workflows',
      description: 'Automate repetitive tasks and processes to save time and reduce errors.',
      icon: Zap,
    },
    {
      title: 'Real-time Analytics',
      description: 'Get actionable insights with real-time analytics and customizable dashboards.',
      icon: BarChart2,
    },
    {
      title: 'Seamless Integration',
      description: 'Easily integrate with your existing tools and software ecosystem.',
      icon: Puzzle,
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance certifications.',
      icon: Shield,
    },
  ];

  return (
    <div id="features" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to succeed
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our comprehensive suite of tools helps businesses of all sizes streamline operations and drive growth.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.title} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-foreground text-primary">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.title}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
