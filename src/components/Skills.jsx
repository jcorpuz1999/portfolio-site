import { motion } from 'framer-motion';
import './Skills.css';

const SKILLS = [
  {
    category: 'Languages & Frameworks',
    icon: '⚡',
    items: ['ReactJS (Redux)', 'React Native', 'Flutter', 'Dart', 'JavaScript (ES6)', 'HTML5', 'CSS3', 'Laravel Blade'],
  },
  {
    category: 'Backend & Integrations',
    icon: '🔗',
    items: ['Stripe Payment Gateway', 'REST APIs', 'Firebase'],
  },
  {
    category: 'Tools & Deployment',
    icon: '🛠',
    items: ['Git', 'TestFlight', 'Google Play Console', 'Vite', 'npm'],
  },
  {
    category: 'Design & Architecture',
    icon: '🎨',
    items: ['Minimalist UI/UX', 'Material Design', 'Cross-Platform Architecture', 'State Management', 'Responsive Design'],
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="skills__header">
          <p className="section-label">What I Work With</p>
          <h2 className="section-title">Technical Skills</h2>
          <div className="divider" />
        </div>

        <motion.div
          className="skills__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {SKILLS.map(group => (
            <motion.div key={group.category} className="card skills__card" variants={cardVariants}>
              <div className="skills__card-header">
                <span className="skills__icon">{group.icon}</span>
                <h3 className="skills__category">{group.category}</h3>
              </div>
              <div className="skills__chips">
                {group.items.map(skill => (
                  <span key={skill} className="chip">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
