import styles from "./Reader.module.css";
import { useState, useEffect } from "react";

export default function Reader({ items }) {
  const [selectedIdx, setselectedIdx] = useState(() => {
    const savedIdx = localStorage.getItem("reader-idx");
    if (savedIdx !== null) {
      return JSON.parse(savedIdx);
    }
    console.log(savedIdx);

    return 0;
  });
  const handlePrev = () => {
    setselectedIdx(selectedIdx - 1);
  };
  const handleNext = () => {
    setselectedIdx(selectedIdx + 1);
  };
  useEffect(() => {
    console.log(selectedIdx);

    localStorage.setItem("reader-idx", JSON.stringify(selectedIdx));
  }, [selectedIdx]);
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
