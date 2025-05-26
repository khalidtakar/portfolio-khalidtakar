import React from 'react';
import { motion } from 'framer-motion';
import { ClientProject } from './ClientProject';

const clientProjects = [
  {
    title: "Cloud Platform & Integration Expert",
    description: "Led comprehensive cloud platform management across JumpCloud, Office365, Azure, and GCP, while delivering expert support for client integration systems. Ensured seamless functionality and maintained high client satisfaction across Windows, Mac OS, and Linux environments."
  },
  {
    title: "Process Automation Specialist",
    description: "Spearheaded automation initiatives that transformed manual workflows into efficient, automated processes. Developed custom scripts and tools that significantly reduced operational costs and improved team efficiency across multiple departments."
  },
  {
    title: "Security Implementation Leader",
    description: "Successfully led security initiatives including Cyber Essentials Plus certification. Implemented comprehensive vulnerability management using Holme Security and Sophos, significantly enhancing the organization's security posture."
  }
];

export const ClientProjects = () => {
  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Key Achievements
      </h3>
      <div className="grid gap-4">
        {clientProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ClientProject {...project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};