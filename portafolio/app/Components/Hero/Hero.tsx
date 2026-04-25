import React from 'react';
import styles from './Hero.module.css';
import Link from 'next/link';


export default function Hero() {
  return (
    <section className={`${styles.hero} section`} id="home">
      <div className={`${styles.hero__container} container`}>
        <div className={styles.hero__content}>
          <span className={styles.hero__greeting}>¡Hola! Soy</span>

          <h1 className={styles.hero__title}>Emiliano Ruiz Garcia</h1>

          <h2 className={styles.hero__subtitle}>
            <span className={styles.highlight}>
              Licenciado en Matematicas Aplicadas y Computacion
            </span>{' '}
            en Crecimiento
          </h2>

          <p className={styles.hero__description}>
            Recién egresado con enfasis en el area de Modelado Estocastico,
            especializado y enfocado en el area de pronosticos, tanto
            financieros como especializados al area de analisis de datos
          </p>

          <div className={styles.hero__buttons}>
            <a href="#projects" className="btn btn--primary">
              <i className="fas fa-envelope"></i> Ver mis proyectos
            </a>

            <a href="#contact" className="btn btn--outline">
              <i className="fas fa-envelope"></i> Contáctame
            </a>
          </div>
        </div>

        <div className={styles.hero__image}>
          <div className={styles.hero__blob}>
            <div className={styles.hero__avatar}>
              <i className="fas fa-user-astronaut"></i>
            </div>
          </div>

          <div
            className={`${styles.hero__decoration} ${styles['hero__decoration--1']}`}
          ></div>
          <div
            className={`${styles.hero__decoration} ${styles['hero__decoration--2']}`}
          ></div>
          <div
            className={`${styles.hero__decoration} ${styles['hero__decoration--3']}`}
          ></div>
        </div>
      </div>

      <div className={styles.hero__scroll}>
        <a href="#interests" className={styles['hero__scroll-link']}>
          <span>Scroll</span>
          <i className="fas fa-chevron-down"></i>
        </a>
      </div>
    </section>
  );
}