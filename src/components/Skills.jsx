import { motion } from 'framer-motion';
import './Skills.css';

const SKILLS = [
  {
    category: 'Languages & Frameworks',
    icon: '⚡',
    items: ['JavaScript (ES6)', 'Flutter', 'React Native', 'ReactJS', 'Dart', 'CSS3', 'Bootstrap', 'Laravel Blade'],
  },
  {
    category: 'State Management',
    icon: '🔄',
    items: ['Redux (React)', 'MobX (Flutter)'],
  },
  {
    category: 'Backend, APIs & Cloud',
    icon: '☁️',
    items: ['REST & GraphQL APIs', 'Webhooks', 'Firebase', 'Google Cloud Services', 'IMGIX', 'Os Class'],
  },
  {
    category: 'Payments & Logistics',
    icon: '💳',
    items: ['Stripe', 'PayPal', 'Google Pay', 'Apple Pay', 'PayNow', 'EasyParcel', 'NinjaVan'],
  },
  {
    category: 'Tools & Deployment',
    icon: '🛠',
    items: ['Git/GitHub', 'Terminal Commands', 'App Store', 'Google Play Console', 'TestFlight', 'Task Automation'],
  },
  {
    category: 'Design & Architecture',
    icon: '🎨',
    items: ['Minimalist & Material UI/UX', 'Independent Front-End Architecture', 'LottieFiles Animations', 'Icon Sets'],
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
