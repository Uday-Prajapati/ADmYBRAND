import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, StarIcon } from '@heroicons/react/24/outline';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

export const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      monthlyPrice: 29,
      annualPrice: 290,
      features: [
        '10,000 AI-generated words/month',
        '5 brand voice profiles',
        'Basic analytics dashboard',
        'Email support',
        '10 social media templates',
        'Basic workflow automation'
      ],
      popular: false,
      gradient: 'from-slate-700 to-slate-800'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing marketing teams',
      monthlyPrice: 79,
      annualPrice: 790,
      features: [
        '50,000 AI-generated words/month',
        'Unlimited brand voice profiles',
        'Advanced analytics & insights',
        'Priority support',
        '100+ content templates',
        'Advanced workflow automation',
        'A/B testing tools',
        'Custom integrations'
      ],
      popular: true,
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with custom needs',
      monthlyPrice: 199,
      annualPrice: 1990,
      features: [
        'Unlimited AI-generated content',
        'Custom AI model training',
        'White-label solutions',
        'Dedicated account manager',
        'Custom templates & workflows',
        'Advanced security features',
        'API access',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false,
      gradient: 'from-purple-600 to-pink-600'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Simple Pricing
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Choose the perfect plan for your business. All plans include a 14-day free trial.
          </p>

          {/* Pricing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-lg ${!isAnnual ? 'text-white' : 'text-slate-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                isAnnual ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-slate-700'
              }`}
            >
              <div
                className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                  isAnnual ? 'translate-x-9' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg ${isAnnual ? 'text-white' : 'text-slate-400'}`}>
              Annual
            </span>
            {isAnnual && (
              <Badge variant="success" size="sm">
                Save 17%
              </Badge>
            )}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge variant="primary" className="px-4 py-2">
                    <StarIcon className="w-4 h-4 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <Card 
                className={`p-8 h-full relative overflow-hidden ${
                  plan.popular ? 'border-blue-500/50 shadow-2xl shadow-blue-500/20' : ''
                }`}
                glass
              >
                {plan.popular && (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10" />
                )}
                
                <div className="relative z-10">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-slate-400 mb-6">{plan.description}</p>
                    
                    <div className="flex items-baseline mb-6">
                      <span className="text-5xl font-bold text-white">
                        ${isAnnual ? Math.floor(plan.annualPrice / 12) : plan.monthlyPrice}
                      </span>
                      <span className="text-slate-400 ml-2">/month</span>
                    </div>
                    
                    {isAnnual && (
                      <p className="text-sm text-slate-400 mb-6">
                        Billed annually (${plan.annualPrice}/year)
                      </p>
                    )}
                  </div>

                  <Button 
                    variant={plan.popular ? 'primary' : 'outline'} 
                    className="w-full mb-8"
                    size="lg"
                  >
                    Start Free Trial
                  </Button>

                  <div className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckIcon className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Pricing Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <Card className="p-8 text-center" glass>
            <h3 className="text-2xl font-bold text-white mb-4">
              Need a Custom Plan?
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              For enterprises with specific requirements, we offer custom pricing and features. 
              Contact our sales team to discuss your needs.
            </p>
            <Button variant="outline" size="lg">
              Contact Sales
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};