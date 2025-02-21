import AppBar from "../AppBar/AppBar.jsx";
import officers from "../../officers.json";
import PilotList from "../PilotList/PilotList.jsx";
import clsx from "clsx";
// import css from "./App.module.css";

// const activeOfficers = officers.filter((officer) => officer.active);

// const youngOfficers = officers.filter((officer) => officer.age < 40);

export default function App() {
  return (
    <>
      {/* <h1 className={css.title}>Hello world</h1> */}
      <AppBar />
      <h2>Active Officers</h2>
      <PilotList items={officers} />
      {/* <h2>Young Officers</h2>
      <PilotList items={youngOfficers} /> */}
    </>
  );
}
