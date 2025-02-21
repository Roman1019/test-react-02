import css from "./PilotProfile.module.css";

export default function PilotProfile({
  pilot: { name, rank, age, spec, active },
}) {
  // console.log(props.pilot);
  // const { name, rank, age, spec } = props.pilot;

  return (
    <div>
      <p className={css.text}>Name: {name}</p>
      <p className={css.text}>Rank: {rank}</p>
      <p className={css.text}>Age: {age}</p>
      <p className={css.text}>Specialty: {spec}</p>
      <p className={css.text}>Status: {active ? "Active" : "Retired"}</p>
    </div>
  );
}
