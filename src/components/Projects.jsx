import { motion } from 'framer-motion';
import './Projects.css';

import fk3 from '../assets/snapshots/fk_marketplace_3.jpg';
import fk_v2_4 from '../assets/snapshots/fk_marketplace_v2_4.jpg';
import fk_v2_6 from '../assets/snapshots/fk_marketplace_v2_6.jpg';
import fk_v2_7 from '../assets/snapshots/fk_marketplace_v2_7.jpg';
import fk_screenshot1 from '../assets/snapshots/fkMarketplace_Screenshot-1.png';
import fk_rec_v2_1 from '../assets/snapshots/fk_marketplace_record_v2_1.jpg';
import fk_rec_v2_2 from '../assets/snapshots/fk_marketplace_record_v2_2.jpg';
import fk_rec_v3_1 from '../assets/snapshots/fk_marketplace_record_v3_1.jpg';

const projects = [
  {
    id: 1,
    title: 'FishingKaki Marketplace',
    description: 'A dedicated marketplace and ecommerce platform featuring a clean, modern UI, seamless animations, and extensive payment integrations.',
    images: [fk3, fk_v2_4, fk_v2_6, fk_v2_7, fk_screenshot1, fk_rec_v2_1, fk_rec_v2_2, fk_rec_v3_1]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <p className="section-label">Showcase</p>
        <h2 className="section-title">Projects</h2>
        <div className="divider" />

        <div className="projects__grid">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              className="projects__card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h3 className="projects__card-title">{project.title}</h3>
              <p className="projects__card-desc">{project.description}</p>

              <div className="projects__gallery">
                {project.images.map((img, i) => (
                  <motion.div
                    key={i}
                    className="projects__gallery-item"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img src={img} alt={`${project.title} screenshot ${i + 1}`} loading="lazy" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
