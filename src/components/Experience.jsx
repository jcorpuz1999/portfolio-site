import { motion } from 'framer-motion';
import './Experience.css';

const ACHIEVEMENTS = [
  'Developed cross-platform mobile applications using Flutter and React Native, utilizing MobX and Redux for state management, maintaining a native-level experience for a huge number of active iOS and Android users.',
  'Worked independently to drive front-end technical development for a classified ads platform and the FishingKaki Market, taking full ownership of UI/UX decisions by blending modern minimalist and material design principles with rich LottieFiles animations and extensive icon sets.',
  'Integrated robust backend systems, incorporating REST and GraphQL APIs, webhooks, Firebase, and IMGIX, while extensively leveraging Google services such as Google Maps, Geocoding, Map Autocomplete, and Google Auth.',
  'Implemented diverse, secure payment gateways, including Stripe, PayPal, Google Pay, Apple Pay, and PayNow, to facilitate frictionless e-commerce transactions across the platform.',
  'Integrated third-party courier service systems, including EasyParcel and NinjaVan, to automate and streamline shipping and logistics workflows.',
  'Managed advanced version control workflows using Git and GitHub via terminal commands, efficiently executing branch creation, pulling from master, stashing/applying changes, checkouts, pushing, and pull requests.',
  'Handled end-to-end app distribution and deployment cycles, successfully releasing applications to the Apple App Store, Google Play Console, and TestFlight.',
  'Created simple, everyday task automation scripts to streamline repetitive workflows and improve personal development productivity.',
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
                {['Flutter', 'React Native', 'MobX', 'Redux', 'GraphQL', 'Firebase', 'Google Cloud', 'Payments', 'Logistics'].map(t => (
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
