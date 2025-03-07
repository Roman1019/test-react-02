// import AppBar from "../AppBar/AppBar.jsx";
// import officers from "../../officers.json";
// import PilotList from "../PilotList/PilotList.jsx";
// import clsx from "clsx";
// import { FaBeer } from "react-icons/fa";
// import css from "./App.module.css";
// import { BsBoxArrowInDownLeft } from "react-icons/bs";
// const activeOfficers = officers.filter((officer) => officer.active);
// const youngOfficers = officers.filter((officer) => officer.age < 40);
// import { useState } from "react";
// import Counter from "../Counter/Counter";
// import CountDisplay from "../CountDisplay/CountDisplay";
// import Accordion from "../Accordion/Accordion.jsx";
// import ClickTracker from "../ClickTracker/ClickTracker.jsx";
import AppBar from "../AppBar/AppBar.jsx";
import LangSwicher from "../LangSwicher/LangSwicher.jsx";
import OrderForm from "../OrderForm/OrderForm.jsx";
// import Sidebar from "../SideBar/SideBar.jsx";
// import Reader from "../Reader/Reader.jsx";
// import Sidebar from "../SideBar/SideBar.jsx";
import TextInput from "../TextInput/TextInput.jsx";
import UserForm from "../UserForm/UserForm.jsx";
// import articles from "../article.json";
// import { useState, useEffect } from "react";
// import Timer from "../Timer/Timer.jsx";
import { useId, useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ErrorMessage } from "formik";

// export default function App() {
//   const [filter, setFilter] = useState("");
//   const [lang, setLang] = useState("en");

//   const handleFilterChange = (newValue) => {
//     setFilter(newValue);
//   };

//   const handleChangeLang = (newLang) => {
//     setLang(newLang);
//   };
//   return (
//     <>

//       {/* <AppBar
//         filter={filter}
//         lang={lang}
//         onFilter={handleFilterChange}
//         onSelectLang={handleChangeLang}
//       />
//       <h2>Lang:{lang}</h2>
//       <h2>Text:{filter}</h2>
//       <OrderForm onOrder={(newOder) => console.log(newOder)} /> */}
//       {/* <input type="text" value={inputValue} onChange={handleChange} />
//       <p>{inputValue}</p> */}
//       {/* <LangSwicher value={Lang} onSelect={handleChangeLang} />
//       <h2>lang:{Lang}</h2>
//       <TextInput value={inputValue} onFilter={handleInputChange} />
//       <p>{inputValue}</p> */}
//     </>
//   );
// }

export default function App() {
  return (
    <>
      <UserForm />
    </>
  );
}

// export default function App() {
//   useEffect(() => {
//     // Це виконається після рендерингу
//     console.log("Компонент з'явився на екрані!");

//     // Функція очищення: викликається при розмонтуванні або перед наступним запуском ефекту
//     return () => {
//       console.log("Компонент буде прибраний з екрана");
//     };
//   }, []); // [] означає, що ефект виконається лише один раз

//   return <div>Привіт, світ!</div>;
// }

// export default function App() {
//   const [isOpen, setIsOpen] = useState(false);
//   const openSideBar = () => setIsOpen(true);
//   const closeSideBar = () => setIsOpen(false);
//   return (
//     <>
//       <button onClick={openSideBar}>Open</button>
//       {isOpen && <Sidebar onClose={closeSideBar} />}
//     </>
//   );
// }
// const accordionItems = [
//   {
//     title: "How does an accordion work?",
//     content:
//       "An accordion allows users to expand and collapse sections of content, typically showing only one open section at a time.",
//   },
//   {
//     title: "What are the benefits of using an accordion?",
//     content:
//       "Accordions help organize content efficiently, reduce scrolling, and improve user experience by displaying only relevant information.",
//   },
//   {
//     title: "Can an accordion be styled to match a website's design?",
//     content:
//       "Yes, accordions can be fully customized with CSS or component libraries to fit the look and feel of any website.",
//   },
//   {
//     title: "How to create an accordion in React?",
//     content:
//       "In React, you can create an accordion using state to track the open section and conditionally render content.",
//   },
//   {
//     title: "Are there any ready-made libraries for accordions?",
//     content:
//       "Yes, libraries like Material-UI, Bootstrap, and React-Accordion provide pre-built accordion components for easy implementation.",
//   },
// ];

// export default function App() {
//   return (
//     <>
//       <h1>Hello</h1>
//       <Reader items={articles} />
//       {/* <Accordion items={accordionItems} /> */}
//     </>
//   );
// }

// export default function App() {
//   const [clicks, setClicks] = useState(0);
//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };
//   return (
//     <>
//       <div>
//         <h1>State in React</h1>
//         <CountDisplay count={clicks} />
//         <Counter text="A" onClick={handleClick} />
//         <Counter text="B" onClick={handleClick} />
//         <Counter text="C" onClick={handleClick} />

//         {/* <button onClick={handleClickA}>Click me {clicksA}</button>
//         <button onClick={handleClickB}>Click me {clicksB}</button> */}
//       </div>
//       {/* <FaBeer />

//       <AppBar />
//       <h2>Active Officers</h2>
//       <PilotList items={officers} />
//       {/* <h2>Young Officers</h2>
//       <PilotList items={youngOfficers} /> */}
//     </>
//   );
// }
