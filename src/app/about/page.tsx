"use client";

import { FaCode, FaGraduationCap, FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInDown,
  fadeIn,
  staggerContainer,
  cardHover,
  cardHoverSmall,
} from "@/utils/animations";

const About = () => {
  return (
    <div className="container max-w-7xl mx-auto py-20">
      <motion.h1
        {...fadeInDown}
        className="text-4xl font-bold mb-8 text-center"
      >
        About Me
      </motion.h1>

      {/* Bio Section */}
      <motion.section {...fadeInUp} className="mb-16">
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          A highly skilled and motivated Full Stack Developer, specializing in
          JavaScript. Proficient in building robust and scalable web
          applications using modern web technologies. Demonstrates strong
          problem-solving abilities and a passion for delivering high-quality
          software solutions. Committed to staying updated with the latest
          industry trends and continuously improving skills to enhance
          productivity and efficiency.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section {...fadeIn} transition={{ delay: 0.2 }} className="mb-16">
        <motion.h2 {...fadeInUp} className="section-title">
          Skills
        </motion.h2>
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            variants={fadeInUp}
            {...cardHover}
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
          >
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="text-secondary space-y-2">
              <li>React / Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>HTML5 / CSS3</li>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            {...cardHover}
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
          >
            <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <ul className="text-secondary space-y-2">
              <li>Node.js</li>
              <li>Express</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
            </ul>
          </motion.div>

          <motion.div
            {...cardHover}
            variants={fadeInUp}
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
          >
            <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tools & Others</h3>
            <ul className="text-secondary space-y-2">
              <li>Git / GitHub</li>
              <li>Docker</li>
              <li>AWS</li>
              <li>CI/CD</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      <motion.section {...fadeIn} transition={{ delay: 0.4 }} className="mb-16">
        <motion.h2 {...fadeInUp} className="section-title">
          Experiences
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-3xl mx-auto space-y-8"
        >
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-2">Web Developer</h3>
            <p className="text-primary mb-2">thriver • 2025 - Present</p>
            <ul className="text-secondary space-y-2 list-disc list-inside">
              <li>Developed and maintained RESTful APIs</li>
              <li>
                Build responsive user interfaces with modern JavaScript
                frameworks
              </li>
              <li>Optimized database queries improving performance by 40%</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section {...fadeIn} className="mb-16">
        <motion.h2 {...fadeInUp} className="section-title">
          Education
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-3xl mx-auto space-y-8"
        >
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-2">
              Bachelor's of Software Engineering
            </h3>
            <p className="text-primary mb-2">
              The Islamia University of Bahawalpur (IUB) • 2022 - 2026
            </p>
            <p className="text-secondary">
              Graduated with honors. Focused on software engineering and wev
              development.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default About;
