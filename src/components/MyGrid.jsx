import styles from "./MyGrid.module.css";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { Twitter } from "lucide-react";
export function MyGrid() {
  const flamengoCards = [
    {
      title: "Mengão Campeão",
      image: "https://upload.wikimedia.org/wikipedia/pt/thumb/2/2e/CRF_logo.svg/1200px-CRF_logo.svg.png",
      description: "Flamengo conquista mais um título em grande estilo no Maracanã.",
    },
    {
      title: "Torcida Rubro-Negra",
      image: "https://pbs.twimg.com/media/Esr1X41XUAA9Rdz.jpg",
      description: "A torcida do Mengão faz a diferença em todos os jogos.",
    },
    {
      title: "Gabigol em Ação",
      image: "https://conteudo.imguol.com.br/c/esporte/3e/2021/11/27/gabigol-comemora-gol-do-flamengo-contra-o-palmeiras-na-final-da-libertadores-1638033157127_v2_900x506.jpg",
      description: "Gabigol marca mais um gol decisivo na temporada.",
    },
    {
      title: "Maracanã Lotado",
      image: "https://cdn.meutimao.com.br/_upload/noticias/2022/05/18/flamengo-no-maracana.jpg",
      description: "Casa cheia para mais uma noite de festa rubro-negra.",
    },
    {
      title: "Treino Forte",
      image: "https://www.lance.com.br/files/article_main/uploads/2022/01/04/61d498cb2e55b.jpeg",
      description: "Preparação intensa da equipe para os próximos desafios.",
    },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Clube de Regatas do Flamengo</h1>
        <h2>Foco, Força e Flamengo</h2>
      </header>

      <aside className={styles.asideLeft}>Notícias</aside>
      <aside className={styles.asideRight}>Agenda</aside>

      <main className={styles.main}>
        <div className={styles.grid}>
          {flamengoCards.map((card) => (
            <div className={styles.card} key={card.title}>
              <img src={card.image} alt={card.title} loading="lazy" />
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <Facebook />
        <Instagram />
        <Twitter />
      </footer>
    </div>
  );
}














/*import styles from "./MyGrid.module.css";
import {Facebook} from "lucide-react";

export function MyGrid() {

  const flamengoCards = [
    {
      title: "Mengão Campeão",
      image: "https://upload.wikimedia.org/wikipedia/pt/thumb/2/2e/CRF_logo.svg/1200px-CRF_logo.svg.png",
      description: "Flamengo conquista mais um título em grande estilo no Maracanã."
    },
    {
      title: "Torcida Rubro-Negra",
      image: "https://pbs.twimg.com/media/Esr1X41XUAA9Rdz.jpg",
      description: "A torcida do Mengão faz a diferença em todos os jogos."
    },
    {
      title: "Gabigol em Ação",
      image: "https://conteudo.imguol.com.br/c/esporte/3e/2021/11/27/gabigol-comemora-gol-do-flamengo-contra-o-palmeiras-na-final-da-libertadores-1638033157127_v2_900x506.jpg",
      description: "Gabigol marca mais um gol decisivo na temporada."
    },
    {
      title: "Maracanã Lotado",
      image: "https://cdn.meutimao.com.br/_upload/noticias/2022/05/18/flamengo-no-maracana.jpg",
      description: "Casa cheia para mais uma noite de festa rubro-negra."
    },
    {
      title: "Treino Forte",
      image: "https://www.lance.com.br/files/article_main/uploads/2022/01/04/61d498cb2e55b.jpeg",
      description: "Preparação intensa da equipe para os próximos desafios."
    }
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header1}>Clube de Regatas do Flamengo</header>
      <header className={styles.header2}>Foco, Força e Flamengo</header>

      <aside className={styles.asideLeft}>Notícias</aside>
      <aside className={styles.asideRight}>Agenda</aside>

      <main className={styles.main}>
        <div className={styles.grid}>
          {flamengoCards.map((card, idx) => (
            <div className={styles.card} key={idx}>
              <img src={card.image} alt={card.title} />
              <h2>{card.title}</h2>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <Facebook />
        <Facebook />
        <Facebook />
      </footer>
    </div>
  );
}*/






































































































/*import styles from "./MyGrid.module.css";*/

/*export function MyGrid() {
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
      <footer className={styles.footer2}>Rodapé 2</footer>
    </div>
  );
}*/































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
