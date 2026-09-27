import ProjectCard from '@/components/ProjectCard'
import ContactSection from '@/components/ContactSection'
import { projects } from '@/lib/projects'
import styles from './page.module.css'

export default function HomePage() {
  return (
    <div className={styles.wrap}>
      <section className={styles.hero}>
        <h1 className={styles.heading}>
          Senior full-stack developer building AI-powered systems.
        </h1>
        <p className={styles.sub}>
          RAG pipelines, MCP servers, and the infrastructure that connects
          them.
        </p>
      </section>

      <section className={styles.projectsSection}>
        <p className={styles.eyebrow}>projects</p>
        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <ContactSection />
    </div>
  )
}
