import { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Check } from 'lucide-react';

export default function Pricing() {
  const [annual, setAnnual] = useState(true);
  
  const plans = [
    {
      name: 'Starter',
      price: annual ? '$29' : '$39',
      billing: annual ? '/month, billed annually' : '/month',
      description: 'Perfect for small teams just getting started.',
      features: [
        '5 team members',
        '10 projects',
        'Basic analytics',
        'Email support',
      ],
      cta: 'Start with Starter',
      mostPopular: false,
    },
    {
      name: 'Professional',
      price: annual ? '$79' : '$99',
      billing: annual ? '/month, billed annually' : '/month',
      description: 'For growing teams needing more power and flexibility.',
      features: [
        'Unlimited team members',
        'Unlimited projects',
        'Advanced analytics',
        'Priority support',
        'Custom integrations',
      ],
      cta: 'Start with Professional',
      mostPopular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      billing: 'tailored to your needs',
      description: 'For large organizations with specific requirements.',
      features: [
        'Everything in Professional',
        'Dedicated account manager',
        'Custom SLA',
        'Advanced security',
        'Single sign-on (SSO)',
      ],
      cta: 'Contact sales',
      mostPopular: false,
    },
  ];

  return (
    <div id="pricing" className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Pricing</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Plans for teams of all sizes
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Choose the perfect plan for your needs. Always know what you'll pay.
          </p>
        </div>

        <div className="mt-8 flex justify-center items-center gap-2">
          <span className={annual ? 'text-gray-900' : 'text-gray-500'}>Monthly</span>
          <Switch
            checked={annual}
            onCheckedChange={setAnnual}
            className="data-[state=checked]:bg-primary"
          />
          <span className={!annual ? 'text-gray-900' : 'text-gray-500'}>
            Annually <span className="text-primary text-sm">(Save 25%)</span>
          </span>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`${
                plan.mostPopular
                  ? 'border-2 border-primary ring-2 ring-primary ring-opacity-20'
                  : 'border border-gray-200'
              } rounded-lg shadow-sm p-8 bg-white relative flex flex-col`}
            >
              {plan.mostPopular && (
                <span className="absolute top-0 -translate-y-1/2 bg-primary text-white px-3 py-0.5 text-sm font-semibold tracking-wide rounded-full">
                  Most popular
                </span>
              )}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
                <p className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
                  <span className="ml-1 text-xl font-semibold">{plan.billing}</span>
                </p>
                <p className="mt-2 text-gray-500">{plan.description}</p>

                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex">
                      <Check className="flex-shrink-0 h-5 w-5 text-primary" />
                      <span className="ml-3 text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button 
                className={`mt-8 ${plan.mostPopular ? '' : 'bg-primary/10 hover:bg-primary/20 text-primary'}`}
                variant={plan.mostPopular ? 'default' : 'ghost'}
                asChild
              >
                <Link href="/signup">{plan.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
