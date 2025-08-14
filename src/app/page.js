import styles from "./page.module.css";

export default function Home() {
  return (
    
    <div className={styles.page}>
      
    
      <header>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Grid Layout</title>
      </header>

      
      <nav className={styles.nav}>
        <div className={styles.container}>
          <div>Layout</div>
          <div>About</div>
          <div>Services</div>
          <div>Contact</div>
        </div>
      </nav>

      
      <header className={styles.pageheader}>
        <div><h1>
          Page Heading <span>Secondary Text</span>
        </h1></div>
      </header>

      
      <section className={styles.projectcontainer}>
        <div className={styles.grid}>
    
              <div className={styles.card}>
                <div className={styles.placeholder}>700 x 400</div>
                <h3>Project Name</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <br />
                  Nam viverra euismod odio, gravida pellentesque urna varius
                  vitae.
                </p>
              </div>
              <div className={styles.card}>
                <div className={styles.placeholder}>700 x 400</div>
                <h3>Project Name</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <br />
                  Nam viverra euismod odio, gravida pellentesque urna varius
                  vitae.
                </p>
              </div>
              <div className={styles.card}>
                <div className={styles.placeholder}>700 x 400</div>
                <h3>Project Name</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <br />
                  Nam viverra euismod odio, gravida pellentesque urna varius
                  vitae.
                </p>
              </div>
              <div className={styles.card}>
                <div className={styles.placeholder}>700 x 400</div>
                <h3>Project Name</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <br />
                  Nam viverra euismod odio, gravida pellentesque urna varius
                  vitae.
                </p>
              </div>
              <div className={styles.card}>
                <div className={styles.placeholder}>700 x 400</div>
                <h3>Project Name</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <br />
                  Nam viverra euismod odio, gravida pellentesque urna varius
                  vitae.
                </p>
              </div>
              <div className={styles.card}>
                <div className={styles.placeholder}>700 x 400</div>
                <h3>Project Name</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <br />
                  Nam viverra euismod odio, gravida pellentesque urna varius
                  vitae.
                </p>
              </div>
              <div className={styles.card}>
                <div className={styles.placeholder}>700 x 400</div>
                <h3>Project Name</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <br />
                  Nam viverra euismod odio, gravida pellentesque urna varius
                  vitae.
                </p>
              </div>
              <div className={styles.card}>
                <div className={styles.placeholder}>700 x 400</div>
                <h3>Project Name</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <br />
                  Nam viverra euismod odio, gravida pellentesque urna varius
                  vitae.
                </p>
              </div>
              <div className={styles.card}>
                <div className={styles.placeholder}>700 x 400</div>
                <h3>Project Name</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <br />
                  Nam viverra euismod odio, gravida pellentesque urna varius
                  vitae.
                </p>
              </div>
            
        </div>
      </section>

      
      <footer className={styles.footer}>
        <p>Copyright © Your Website 2014</p>
      </footer>
    </div>
  );
}
