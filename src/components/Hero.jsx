import { motion } from 'framer-motion';
import './Hero.css';

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__bg-grid" aria-hidden="true" />
      <div className="hero__orb hero__orb--1" aria-hidden="true" />
      <div className="hero__orb hero__orb--2" aria-hidden="true" />

      <div className="container">
        <motion.div
          className="hero__content"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div className="hero__badge" variants={itemVariants}>
            <span className="hero__badge-dot" />
            Available for opportunities
          </motion.div>

          <motion.h1 className="hero__name font-display" variants={itemVariants}>
            Jeremiah<br />
            <span className="hero__name-accent">Corpuz</span>
          </motion.h1>

          <motion.p className="hero__role" variants={itemVariants}>
            Frontend Engineer
            <span className="hero__role-separator"> · </span>
            <span className="hero__role-company">iScale Solutions</span>
          </motion.p>

          <motion.p className="hero__bio" variants={itemVariants}>
            8 years crafting cross-platform experiences with{' '}
            <strong>React Native</strong>, <strong>Flutter</strong>, and{' '}
            <strong>ReactJS</strong> — from architecture to launch.
          </motion.p>

          <motion.div className="hero__cta" variants={itemVariants}>
            <a href="#contact" className="btn btn-primary" id="hero-contact-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Get in touch
            </a>
            <a href="#about" className="btn btn-outline" id="hero-about-btn">
              Learn more
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12,5 19,12 12,19" />
              </svg>
            </a>
          </motion.div>

          <motion.div className="hero__stats" variants={itemVariants}>
            {[
              { value: '8+', label: 'Years Experience' },
              { value: '99.9%', label: 'Uptime Delivered' },
            ].map(stat => (
              <div key={stat.label} className="hero__stat">
                <span className="hero__stat-value">{stat.value}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <span>Scroll</span>
        <motion.div
          className="hero__scroll-line"
          animate={{ scaleY: [0, 1, 0], y: [0, 8, 16] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}
