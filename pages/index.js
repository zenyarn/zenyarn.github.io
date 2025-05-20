import Head from 'next/head'
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>ZenYarn - Homepage</title>
        <meta name="description" content="ZenYarn's Homepage" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title + ' ' + styles.enTitle}>
          ZenYarn's Homepage
        </h1>

        {/* <p className={styles.description}>我是一名热爱技术的开发者</p> */}

        {/* 社交信息区块 */}
        <div className={styles.socialLinks}>
          <a
            href="https://x.com/zen_yarn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
          >
            <i className="fa-brands fa-x-twitter"></i>
            <span className={styles.platformName}>X</span>
            <span className={styles.username}>@zen_yarn</span>
          </a>
          <a
            href="https://space.bilibili.com/411380357?spm_id_from=333.1007.0.0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Bilibili"
          >
            <span className={styles.platformName}>Bilibili</span>
            <span className={styles.username}>@zenyarn</span>
          </a>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  )
}
