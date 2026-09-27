import styles from './ContactSection.module.css'

export default function ContactSection() {
  return (
    <section className={styles.section}>
      <p className={styles.eyebrow}>contact</p>
      <p className={styles.name}>Deekshitha</p>
      <div className={styles.rows}>
        <a href="mailto:deeks2008@gmail.com" className={styles.row}>
          email
        </a>
        <a href="https://github.com/deeksithaa" className={styles.row}>
          github.com/deeksithaa
        </a>
      </div>
    </section>
  )
}
