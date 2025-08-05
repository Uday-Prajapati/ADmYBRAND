import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionItem } from '../ui/Accordion';

export const FAQ = () => {
  const faqs = [
    {
      question: 'How does ADmyBRAND AI Suite learn my brand voice?',
      answer: 'Our AI analyzes your existing content, brand guidelines, and communication style to create a unique brand voice profile. The more content you provide, the better it becomes at matching your tone, style, and messaging preferences.'
    },
    {
      question: 'Can I integrate ADmyBRAND with my existing marketing tools?',
      answer: 'Yes! We offer integrations with over 50 popular marketing platforms including HubSpot, Salesforce, Mailchimp, Hootsuite, and many more. Our API also allows for custom integrations with your proprietary systems.'
    },
    {
      question: 'What kind of content can the AI generate?',
      answer: 'Our AI can create a wide variety of content including blog posts, social media captions, email campaigns, ad copy, product descriptions, press releases, and much more. It adapts to different formats and platforms automatically.'
    },
    {
      question: 'Is there a limit to how much content I can generate?',
      answer: 'Limits depend on your plan. Starter plans include 10,000 words per month, Professional plans include 50,000 words, and Enterprise plans offer unlimited generation. You can always upgrade as your needs grow.'
    },
    {
      question: 'How accurate is the AI-generated content?',
      answer: 'Our AI achieves 95%+ accuracy in brand voice matching and content relevance. However, we always recommend human review for important campaigns. The AI learns from your feedback to continuously improve.'
    },
    {
      question: 'Do you offer customer support?',
      answer: 'Yes! We provide email support for all plans, priority support for Professional plans, and dedicated account management for Enterprise customers. Our support team is available 24/7 to help you succeed.'
    },
    {
      question: 'Can I cancel my subscription at any time?',
      answer: 'Absolutely. You can cancel your subscription at any time with no cancellation fees. Your account will remain active until the end of your current billing period, and you\'ll retain access to all generated content.'
    },
    {
      question: 'Is my data secure with ADmyBRAND?',
      answer: 'Security is our top priority. We use enterprise-grade encryption, comply with GDPR and SOC 2 standards, and never use your data to train models for other customers. Your content and brand information remain completely private.'
    }
  ];

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about ADmyBRAND AI Suite
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Accordion>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} title={faq.question}>
                <p className="leading-relaxed">{faq.answer}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-8 border border-slate-800">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-slate-300 mb-6">
              Our team is here to help you get the most out of ADmyBRAND AI Suite
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                Contact Support
              </button>
              <button className="px-6 py-3 border border-slate-600 rounded-xl text-slate-300 font-semibold hover:border-slate-500 hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};