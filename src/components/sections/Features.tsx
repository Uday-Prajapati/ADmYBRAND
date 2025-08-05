import React from 'react';
import { motion } from 'framer-motion';
import { 
  SparklesIcon, 
  ChartBarIcon, 
  CogIcon, 
  ShieldCheckIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  BoltIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';
import { Card } from '../ui/Card';

export const Features = () => {
  const features = [
    {
      icon: SparklesIcon,
      title: 'AI Content Generation',
      description: 'Create compelling copy, social media posts, and marketing materials with advanced AI that understands your brand voice.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: ChartBarIcon,
      title: 'Smart Analytics',
      description: 'Get deep insights into your campaigns with AI-powered analytics that predict trends and optimize performance.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: CogIcon,
      title: 'Workflow Automation',
      description: 'Streamline your marketing processes with intelligent automation that saves time and increases efficiency.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Brand Safety',
      description: 'Ensure consistent brand messaging with AI-powered content moderation and brand guideline enforcement.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: LightBulbIcon,
      title: 'Creative Insights',
      description: 'Discover new creative opportunities with AI that analyzes market trends and competitor strategies.',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: RocketLaunchIcon,
      title: 'Campaign Optimization',
      description: 'Maximize ROI with AI-driven campaign optimization that continuously improves performance.',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: BoltIcon,
      title: 'Real-time Processing',
      description: 'Get instant results with lightning-fast AI processing that scales with your business needs.',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: GlobeAltIcon,
      title: 'Multi-platform Integration',
      description: 'Connect with all your favorite tools and platforms through our comprehensive API ecosystem.',
      gradient: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section id="features" className="py-20 bg-slate-900/30">
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
              Powerful Features
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Everything you need to supercharge your marketing efforts with cutting-edge AI technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full group hover:bg-slate-800/30" glass>
                  <div className="mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-blue-100 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Feature Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <Card className="p-8 md:p-12" glass>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  AI That Understands Your Brand
                </h3>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  Our advanced AI learns your brand voice, style, and preferences to create content that feels authentically yours. 
                  No more generic outputs – get personalized results that align with your brand identity.
                </p>
                <div className="space-y-4">
                  {[
                    'Brand voice recognition and adaptation',
                    'Style consistency across all content',
                    'Custom training on your brand materials',
                    'Continuous learning and improvement'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                      <span className="text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl flex items-center justify-center border border-slate-700/50">
                  <div className="text-center">
                    <SparklesIcon className="w-24 h-24 text-blue-400 mx-auto mb-4" />
                    <p className="text-slate-400">AI Brand Intelligence</p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-20 blur-xl animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-20 blur-xl animate-pulse delay-1000"></div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};