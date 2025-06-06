
import styles from "./MyGrid.module.css";

export function MyGrid() {
  return (
    <div className={styles.container}>
      <header className={styles.header1}>Header 1</header>
      <header className={styles.header2}>Header 2</header>

      <aside className={styles.asideLeft}>Aside Esquerdo</aside>
      <aside className={styles.asideRight}>Aside Direito</aside>

      <main className={styles.main}>
        <div className={styles.grid}>
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div className={styles.card} key={num}>
              <h2>Card {num}</h2>
              <p>Descrição do Card {num}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>Rodapé</footer>
    </div>
  );
}































/*import styles from "./MyGrid.module.css";

export function MyGrid() {
  return (
    
    <div className={styles.container}>
      <header className={styles.header1} />
      <header className={styles.header2} />
      <aside className={styles.aside} />
      <div className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Card 1</h2>
            <p>This is the first card.</p>
          </div>
          <div className={styles.card}>
            <h2>Card 2</h2>
            <p>This is the second card.</p>
          </div>
          <div className={styles.card}>
            <h2>Card 3</h2>
            <p>This is the third card.</p>
          </div>
          <div className={styles.card}>
            <h2>Card 4</h2>
            <p>This is the fourth card.</p>
          </div>
          <div className={styles.card}>
            <h2>Card 5</h2>
            <p>This is the fifth card.</p>
          </div>
        </div>
      </div>
      <footer className={styles.footer} />
    </div>
  
  );
}*/
