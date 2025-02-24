// import AppBar from "../AppBar/AppBar.jsx";
// import officers from "../../officers.json";
// import PilotList from "../PilotList/PilotList.jsx";
// import clsx from "clsx";
// import { FaBeer } from "react-icons/fa";
// import css from "./App.module.css";

import { BsBoxArrowInDownLeft } from "react-icons/bs";

// const activeOfficers = officers.filter((officer) => officer.active);

// const youngOfficers = officers.filter((officer) => officer.age < 40);

const Box = (props) => {
  console.log(props);

  return (
    <section>
      <h1>Hello</h1>
      {props.children}
    </section>
  );
};
export default function App() {
  return (
    <>
      <Box>
        <button> f</button>
        <a href="">12345</a>
      </Box>
      {/* <FaBeer />
      
      <AppBar />
      <h2>Active Officers</h2>
      <PilotList items={officers} />
      {/* <h2>Young Officers</h2>
      <PilotList items={youngOfficers} /> */}
    </>
  );
}
