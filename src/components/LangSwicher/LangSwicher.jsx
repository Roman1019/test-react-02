import css from "./LangSwicher.module.css";

export default function LangSwicher({ value, onSelect }) {
  const handleChange = (event) => {
    onSelect(event.target.value);
  };
  return (
    <div className={css.wrapper}>
      <span>Lang swicher</span>
      <select value={value} onChange={handleChange}>
        <option value="uk">UK</option>
        <option value="en">EN</option>
        <option value="pl">PL</option>
      </select>
    </div>
  );
}
