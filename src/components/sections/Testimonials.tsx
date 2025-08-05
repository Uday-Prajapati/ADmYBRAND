import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';
import { Card } from '../ui/Card';
import { Carousel } from '../ui/Carousel';

export const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechFlow Inc.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'ADmyBRAND AI Suite has completely transformed our content creation process. We\'ve increased our output by 300% while maintaining exceptional quality.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CEO',
      company: 'StartupBoost',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'The AI understands our brand voice perfectly. It\'s like having a team of expert copywriters available 24/7. Our engagement rates have never been higher.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Content Manager',
      company: 'Creative Agency Pro',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'The workflow automation features have saved us countless hours. We can now focus on strategy while the AI handles the heavy lifting of content creation.',
      rating: 5
    },
    {
      name: 'David Park',
      role: 'Growth Marketing Lead',
      company: 'ScaleUp Solutions',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'ROI improved by 250% within the first quarter. The AI-driven insights have helped us optimize campaigns like never before.',
      rating: 5
    },
    {
      name: 'Lisa Thompson',
      role: 'Brand Manager',
      company: 'Fashion Forward',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'Maintaining brand consistency across all our channels used to be a nightmare. Now it\'s effortless with ADmyBRAND\'s AI technology.',
      rating: 5
    }
  ];

  const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0], index: number }) => (
    <Card className="p-8 mx-4" glass>
      <div className="flex items-center mb-6">
        {[...Array(testimonial.rating)].map((_, i) => (
          <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
        ))}
      </div>
      
      <blockquote className="text-lg text-slate-300 mb-8 leading-relaxed">
        "{testimonial.content}"
      </blockquote>
      
      <div className="flex items-center">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <div className="font-semibold text-white">{testimonial.name}</div>
          <div className="text-slate-400 text-sm">
            {testimonial.role} at {testimonial.company}
          </div>
        </div>
      </div>
    </Card>
  );

  return (
    <section id="testimonials" className="py-20 bg-slate-900/30">
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
              What Our Customers Say
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who have transformed their marketing with ADmyBRAND AI Suite
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Carousel autoPlay interval={4000}>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} index={index} />
            ))}
          </Carousel>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '4.9/5', label: 'Average Rating' },
              { number: '10,000+', label: 'Happy Customers' },
              { number: '99.9%', label: 'Customer Satisfaction' },
              { number: '24/7', label: 'Support Available' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};