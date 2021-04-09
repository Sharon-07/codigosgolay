import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Códigos de <a href="https://hammingolay.vercel.app/">Golay</a>
        </h1>

        <div className={styles.grid}>
        <div className={styles.container}>
          <ul class="nav nav-tabs" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" data-toggle="tab" href="#home">DEFINICIONES IMPORTANTES</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#menu1">CÓDIGOS DE GOLAY BINARIOS Y TERNARIOS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#menu2"> CÓDIGOS DE GOLAY Q-ARIOS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#menu3"> CODIFICACIÓN</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#menu4">DECODIFICACIÓN</a>
          </li>
        </ul>

        <div class="tab-content">
          <div id="home" class="container tab-pane active">
            <h3>Definición Matemática</h3>
            <p> 
            
            </p>
            <h3>Contrucciones</h3>
            
          </div>

          <div id="menu1" class="container tab-pane fade">
            <h3>Definición</h3>
            

          </div>

          <div id="menu2" class="container tab-pane fade">
          <h3>Definición</h3>

          </div>

          <div id="menu3" class="container tab-pane fade">
          <h3>Definición</h3>

          </div>


        </div>
        </div>
        </div>
      </main>

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>


      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
