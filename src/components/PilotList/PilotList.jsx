import PilotProfile from "../PilotProfile/PilotProfile.jsx";
import css from "./PilotList.module.css";

export default function PilotList({ items }) {
  return (
    <ul className={css.list}>
      {items.map((officer) => (
        <li className={css.item} key={officer.id}>
          <PilotProfile
            pilot={officer}
            // name={officer.name}
            // rank={officer.rank}
            // age={officer.age}
            // spec={officer.spec}
          />
        </li>
      ))}
    </ul>
  );
}
