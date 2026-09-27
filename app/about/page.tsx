import type { Metadata } from 'next'
import styles from './about.module.css'

export const metadata: Metadata = {
  title: 'about',
}

export default function AboutPage() {
  return (
    <div className={styles.wrap}>
      <p className={styles.eyebrow}>about</p>
      <h1 className={styles.name}>Deekshitha</h1>
      <p className={styles.bio}>
        13 years building full-stack products on the MERN stack, now moving
        into AI engineering — RAG systems, MCP servers, and the
        infrastructure that connects them. This site collects that work in
        one place.
      </p>
    </div>
  )
}
