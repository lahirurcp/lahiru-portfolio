import { motion } from 'framer-motion';

export default function Portfolio() {
  return (
    <div className="bg-[#0A192F] text-white min-h-screen p-6">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mt-20"
      >
        <h1 className="text-5xl font-bold mb-4">Lahiru Pathirage</h1>
        <p className="text-xl mb-6 text-[#64FFDA]">Driving Business Growth Through Technology and Leadership</p>
        <a href="https://linkedin.com/in/lahiru-perera" target="_blank" rel="noopener noreferrer">
          <button className="bg-[#64FFDA] text-[#0A192F] font-bold py-2 px-6 rounded-lg hover:bg-[#52e0c0] transition">Connect on LinkedIn</button>
        </a>
      </motion.div>

      {/* About Me Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto mt-20"
      >
        <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>
        <p className="text-lg text-[#8892B0] text-center">
          Technical Program & Project Leader with over 5 years of experience delivering complex, cross-functional initiatives
          at the intersection of cloud, data, and customer-centric solutions. Advocate of Agile methodologies and passionate
          about driving business growth through technology.
        </p>
      </motion.div>

      {/* Resume Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto mt-20"
      >
        <h2 className="text-3xl font-bold mb-4 text-center">Resume</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-2xl font-semibold">Core Competencies</h3>
            <p className="text-[#8892B0]">Project Management, Cloud Platforms (AWS, Azure, Snowflake), CRM Systems (Salesforce, HubSpot)</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Experience</h3>
            <ul className="list-disc list-inside text-[#8892B0]">
              <li>Project Manager, HolidayTaxis Group (HBX Group)</li>
              <li>Program Management Officer, QualitApps Europe</li>
              <li>Project Coordinator, Netmaiesta (Pvt) Ltd</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Certifications</h3>
            <p className="text-[#8892B0]">PMP, PRINCE2 Practitioner, Certified ScrumMaster (CSM)</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Education</h3>
            <p className="text-[#8892B0]">MSc Information Systems, Kingston University London</p>
            <p className="text-[#8892B0]">BSc Business Information Systems, University of Wolverhampton</p>
          </div>
        </div>
      </motion.div>

      {/* Projects Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto mt-20"
      >
        <h2 className="text-3xl font-bold mb-4 text-center">Key Projects</h2>
        <ul className="list-disc list-inside text-[#8892B0]">
          <li>Snowstorm Data Migration & Self-Service Reporting</li>
          <li>CheckPickup.com System Migration</li>
          <li>Vendfy™ Analytics Platform</li>
          <li>Carrera del Corazón Marathon Tracking App</li>
        </ul>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mt-20"
      >
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <a href="https://linkedin.com/in/lahiru-perera" target="_blank" rel="noopener noreferrer">
          <button className="bg-[#64FFDA] text-[#0A192F] font-bold py-2 px-6 rounded-lg hover:bg-[#52e0c0] transition">Connect via LinkedIn</button>
        </a>
      </motion.div>

      {/* Footer */}
      <div className="text-center mt-20 text-[#8892B0] text-sm">
        © {new Date().getFullYear()} Lahiru Pathirage. All rights reserved.
      </div>
    </div>
  );
}