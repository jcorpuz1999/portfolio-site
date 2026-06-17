import { motion } from 'framer-motion';
import './Experience.css';

const ACHIEVEMENTS = [
  'Developed cross-platform mobile apps (Flutter/React Native), reducing development time by 50% while maintaining a native-level experience for 1,000+ iOS and Android users.',
  'Managed the full project lifecycle to successfully launch a classified ads platform in 2021, scaling to 640 active users within the first 3 months.',
  'Led technical development for the FishingKaki Market e-commerce platform, ensuring 99.9% uptime across dual buyer/seller applications.',
  'Engineered clean, state-driven front-end architectures using ReactJS (Redux) and Laravel Blade, decreasing page load times by 80%.',
  'Implemented secure Stripe payment processing, facilitating SGD 1,000 in seamless, fraud-free transactions during initial rollout.',
  'Streamlined the CI/CD deployment pipeline, reducing app release cycles by 85% across TestFlight and Google Play Console.',
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <p className="section-label">My Journey</p>
        <h2 className="section-title">Professional Experience</h2>
        <div className="divider" />

        <motion.div
          className="experience__timeline"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        >
          {/* Timeline line */}
          <div className="experience__line" aria-hidden="true" />

          <motion.div className="experience__item" variants={fadeUp}>
            <div className="experience__dot" aria-hidden="true">
              <div className="experience__dot-inner" />
            </div>

            <div className="card experience__card">
              <div className="experience__card-top">
                <div>
                  <h3 className="experience__role">Frontend Software Engineer</h3>
                  <p className="experience__company">iScale Solutions Inc.</p>
                </div>
                <span className="experience__badge">2018 – 2026</span>
              </div>

              <ul className="experience__achievements">
                {ACHIEVEMENTS.map((item, i) => (
                  <motion.li
                    key={i}
                    className="experience__achievement"
                    variants={{
                      hidden: { opacity: 0, x: -12 },
                      show: { opacity: 1, x: 0, transition: { delay: i * 0.06, duration: 0.5 } },
                    }}
                  >
                    <span className="experience__achievement-dot" aria-hidden="true" />
                    {item}
                  </motion.li>
                ))}
              </ul>

              <div className="experience__tags">
                {['Flutter', 'React Native', 'ReactJS', 'Redux', 'Stripe', 'Laravel', 'CI/CD'].map(t => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
