import { motion } from 'framer-motion';
import './About.css';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.div
          className="about__grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.div className="about__text" variants={fadeUp}>
            <p className="section-label">Who I Am</p>
            <h2 className="section-title">Passionate about building products people love</h2>
            <div className="divider" />
            <p className="about__bio">
              Detail-oriented Frontend Software Engineer with <strong>8 years of professional
              experience</strong> specialising in mobile and web development. Passionate about building
              seamless, user-centric applications using Flutter and React Native. Highly skilled in
              bringing minimalist, material design principles to life through clean code and
              responsive interfaces.
            </p>
            <p className="about__bio">
              Dedicated to collaborative problem-solving and guiding projects from initial
              architecture to successful public launches.
            </p>
            <div className="about__contact-row">
              <a href="mailto:jeremiah.corpuz25@gmail.com" className="about__contact-chip" id="about-email">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                jeremiah.corpuz25@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/jeremiah-corpuz-9b6392195/" target="_blank" rel="noopener noreferrer" className="about__contact-chip" id="about-linkedin">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div className="about__cards" variants={fadeUp}>
            <div className="about__info-card">
              <div className="about__avatar">JC</div>
              <h3 className="about__name">Jeremiah Brillantes Corpuz</h3>
              <p className="about__position">Frontend Engineer</p>
              <div className="about__meta-list">
                <div className="about__meta-item">
                  <span className="about__meta-label">Company</span>
                  <span className="about__meta-value">iScale Solutions Inc.</span>
                </div>
                <div className="about__meta-item">
                  <span className="about__meta-label">Experience</span>
                  <span className="about__meta-value">8 Years</span>
                </div>
                <div className="about__meta-item">
                  <span className="about__meta-label">Location</span>
                  <span className="about__meta-value">Tanza, Cavite, PH</span>
                </div>
                <div className="about__meta-item">
                  <span className="about__meta-label">Phone</span>
                  <span className="about__meta-value">+63 969 5737 203</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
