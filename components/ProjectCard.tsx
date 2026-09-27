import type { Project } from '@/lib/projects'
import styles from './ProjectCard.module.css'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.pitch}>{project.pitch}</p>
      <ul className={styles.tags}>
        {project.stack.map((tech) => (
          <li key={tech} className={styles.tag}>
            {tech}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        <a href={project.githubUrl} className={styles.link}>
          view code
        </a>
        {project.demoUrl && (
          <a href={project.demoUrl} className={styles.linkAccent}>
            try demo
          </a>
        )}
      </div>
    </article>
  )
}
