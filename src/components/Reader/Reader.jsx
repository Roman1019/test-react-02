import styles from "./Reader.module.css";
import { useState } from "react";

export default function Reader({ items }) {
  const [selectedIdx, setselectedIdx] = useState(0);
  const handlePrev = () => {
    setselectedIdx(selectedIdx - 1);
  };
  const handleNext = () => {
    setselectedIdx(selectedIdx + 1);
  };
  const currentArticle = items[selectedIdx];
  console.log(currentArticle);

  const isFirst = selectedIdx === 0;
  const isLast = selectedIdx === items.length - 1;
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.controls}>
          <button
            className={styles.button}
            disabled={isFirst}
            onClick={handlePrev}
          >
            Prev
          </button>
          <button
            className={styles.button}
            disabled={isLast}
            onClick={handleNext}
          >
            Next
          </button>
        </div>
        <p className={styles.progress}>
          {selectedIdx + 1}/{items.length}
        </p>
      </header>

      <article className={styles.article}>
        <h2 className={styles.title}>{currentArticle.topic}</h2>
        <p className={styles.text}>{currentArticle.text}</p>
      </article>
    </div>
  );
}
