import { motion } from 'framer-motion';
import './Certifications.css';

const CERTS = [
  { title: 'Github | Basics Guide', provider: 'Udemy', date: 'April 2023', icon: '🐙' },
  { title: 'React & Redux for Absolute Beginners', provider: 'Udemy', date: 'December 2021', icon: '⚛️' },
  { title: 'React Native and Redux Course using hooks', provider: 'Udemy', date: 'September 2020', icon: '📱' },
  { title: 'React Beginners Bootcamp', provider: 'Udemy', date: 'May 2020', icon: '🚀' },
  { title: 'Learn to Build Chatbots with Dialogflow', provider: 'Udemy', date: 'May 2020', icon: '🤖' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Certifications() {
  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <p className="section-label">Continuous Learning</p>
        <h2 className="section-title">Certifications</h2>
        <div className="divider" />

        <div className="certifications__grid">
          {CERTS.map((cert, i) => (
            <motion.div
              key={cert.title}
              className="card cert-card"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              id={`cert-${i}`}
            >
              <div className="cert-card__icon">{cert.icon}</div>
              <div className="cert-card__body">
                <h3 className="cert-card__title">{cert.title}</h3>
                <div className="cert-card__meta">
                  <span className="cert-card__provider">{cert.provider}</span>
                  <span className="cert-card__date">{cert.date}</span>
                </div>
              </div>
              <div className="cert-card__badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Certified
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
