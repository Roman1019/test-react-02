import css from "./PilotProfile.module.css";
import { BsAirplaneFill } from "react-icons/bs";
import { BsAlarmFill } from "react-icons/bs";
import { BsChatFill } from "react-icons/bs";
export default function PilotProfile({
  pilot: { name, rank, age, spec, active },
}) {
  // console.log(props.pilot);
  // const { name, rank, age, spec } = props.pilot;

  return (
    <div>
      <p className={css.text}>Name: {name}</p>
      <p className={css.text}>
        <BsAirplaneFill className={css.icon} /> Rank: {rank}
      </p>
      <p className={css.text}>Age: {age}</p>
      <p className={css.text}>
        <BsAlarmFill className={css.icon} />
        Specialty: {spec}
      </p>
      <p className={css.text}>
        {" "}
        <BsChatFill className={css.icon} />
        Status: {active ? "Active" : "Retired"}
      </p>
    </div>
  );
}
