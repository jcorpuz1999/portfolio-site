import { motion } from 'framer-motion';
import './Education.css';

const EDUCATION = [
  {
    level: 'Tertiary Education',
    school: 'AMA Computer College',
    period: '2015 – 2018',
    icon: '🎓',
  },
  {
    level: 'Secondary Education',
    school: 'Ignacio Villamor High School',
    period: '2011 – 2015',
    icon: '📚',
  },
  {
    level: 'Primary Education',
    school: 'La Paz Elementary School',
    period: '2005 – 2011',
    icon: '✏️',
  },
];

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <div className="education__layout">
          <div className="education__intro">
            <p className="section-label">Academic Background</p>
            <h2 className="section-title">Education</h2>
            <div className="divider" />
            <p className="section-subtitle">
              A solid academic foundation paired with continuous self-learning and professional development.
            </p>
          </div>

          <div className="education__timeline">
            {EDUCATION.map((item, i) => (
              <motion.div
                key={item.school}
                className="education__item"
                custom={i}
                variants={itemVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                id={`education-${i}`}
              >
                <div className="education__icon">{item.icon}</div>
                <div className="education__content">
                  <h3 className="education__level">{item.level}</h3>
                  <p className="education__school">{item.school}</p>
                </div>
                <span className="education__period">{item.period}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
