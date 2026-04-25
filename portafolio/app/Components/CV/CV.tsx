import React from 'react';
import styles from './CV.module.css';
import Link from 'next/link';

export default function CV() {
    return (
        <section className={`${styles.cv} section`} id="cv">
            <div className="container">
                <div className={styles.cv__content}>
                    
                    {/* INFO */}
                    <div className={styles.cv__info}>
                        <span className="section__subtitle">Conoce mi trayectoria</span>
                        <h2 className="section__title">Mi Currículum</h2>

                        <p className={styles.cv__description}>
                            Descarga mi CV para conocer mi formación académica, habilidades 
                            técnicas y experiencia. También puedes conectar conmigo en mis 
                            redes profesionales.
                        </p>

                        <div className={styles.cv__buttons}>
                            <Link 
                                href="https://www.overleaf.com/gallery/tagged/cv"
                                className="btn btn--primary btn--large"
                            >
                                <i className="fas fa-download"></i> Descargar CV
                            </Link>

                            <Link 
                                href="https://emiliano1502.github.io/Lab05EmilianoRuizGarcia/"
                                className="btn btn--secondary btn--large"
                            >
                                <i className="fas fa-eye"></i> Ver CV Digital
                            </Link>
                        </div>
                    </div>

                    {/* SOCIAL */}
                    <div className={styles.cv__social}>
                        <h3 className={styles['cv__social-title']}>Conectemos</h3>
                        <div className={styles['cv__social-links']}>

                            {/* LINKEDIN */}
                            <Link 
                                href="https://www.linkedin.com/in/emiliano-ruiz-40907a275/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.social__card}
                            >
                                <div className={`${styles.social__icon} ${styles['social__icon--linkedin']}`}>
                                    <i className="fab fa-linkedin-in"></i>
                                </div>

                                <div className={styles.social__info}>
                                    <span className={styles.social__name}>LinkedIn</span>
                                    <span className={styles.social__user}>@emiliano-ruiz-40907a275</span>
                                </div>

                                <i className={`fas fa-arrow-right ${styles.social__arrow}`}></i>
                            </Link>

                            {/* GITHUB */}
                            <Link 
                                href="https://github.com/Emiliano1502"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.social__card}
                            >
                                <div className={`${styles.social__icon} ${styles['social__icon--github']}`}>
                                    <i className="fab fa-github"></i>
                                </div>

                                <div className={styles.social__info}>
                                    <span className={styles.social__name}>GitHub</span>
                                    <span className={styles.social__user}>@Emiliano1502</span>
                                </div>

                                <i className={`fas fa-arrow-right ${styles.social__arrow}`}></i>
                            </Link>

                            {/* EMAIL */}
                            <Link 
                                href="mailto:emii.programaton@gmail.com"
                                className={styles.social__card}
                            >
                                <div className={`${styles.social__icon} ${styles['social__icon--email']}`}>
                                    <i className="fas fa-envelope"></i>
                                </div>

                                <div className={styles.social__info}>
                                    <span className={styles.social__name}>Email</span>
                                    <span className={styles.social__user}>emii.programaton@gmail.com</span>
                                </div>

                                <i className={`fas fa-arrow-right ${styles.social__arrow}`}></i>
                            </Link>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}