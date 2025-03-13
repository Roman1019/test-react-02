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
import { useId, useState, useEffect, useRef } from "react";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import { fetchArticles } from "../../articleService.js";
import SearchForm from "../SearchForm/SearchForm.jsx";
import ArticleList from "../ArticleList/ArticleList.jsx";
import RefBasics from "../RefBasics/RefBasics.jsx";
import Player from "../Players/Players.jsx";
import Timer1 from "../Timer1/Timer1.jsx";

export default function App() {
  return (
    <div>
      <Timer1 />
    </div>
  );
}

// export default function App() {
//   const [clicks, setClicks] = useState(0);
//   const [articles, setArticles] = useState([]);

//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(false);

//   const [searchTerm, setSearchTerm] = useState("");
//   const [page, setPage] = useState(1);

//   const handleSearch = async (topic) => {
//     console.log(`${topic}/${Date.now()}`);

//     setSearchTerm(`${topic}/${Date.now()}`);

//     setPage(1);
//     setArticles([]);
//   };

//   useEffect(() => {
//     if (searchTerm === "") {
//       return;
//     }
//     async function getData() {
//       try {
//         setError(false);
//         setIsLoading(true);
//         console.log(searchTerm.split("/")[0]);

//         const data = await fetchArticles(searchTerm.split("/")[0], page);

//         setArticles((prevArticles) => {
//           return [...prevArticles, ...data];
//         });
//       } catch {
//         setError(true);
//       } finally {
//         setIsLoading(false);
//       }
//     }
//     getData();
//     console.log(page, searchTerm);
//   }, [page, searchTerm]);
//   // useEffect(() => {
//   //   console.log(clicks);

//   //   async function getArticles() {
//   //     try {
//   //       const data = await fetchArticles();
//   //       console.log(data);
//   //     } catch (error) {
//   //       console.log(error);
//   //     }
//   //   }
//   //   getArticles();
//   // }, [clicks]);

//   return (
//     <div>
//       <h1>HTTP</h1>
//       <SearchForm onSearch={handleSearch} />

//       {error && <b>Whops there was an error plz reload...</b>}

//       {articles.length > 0 && <ArticleList items={articles} />}
//       {isLoading && <b>Loading data, please wait...</b>}

//       {articles.length > 0 && !isLoading && (
//         <button onClick={() => setPage(page + 1)}>Load more{page}</button>
//       )}
//     </div>
//   );
// }

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

// export default function App() {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   const handleSearch = async (topic) => {
//     try {
//       setArticles([]);
//       setError(false);
//       setLoading(true);
//       const data = await fetchArticlesWithTopic(topic);
//       setArticles(data);
//     } catch (error) {
//       setError(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <SearchForm onSearch={handleSearch} />
//       {loading && <Loader />}
//       {error && <Error />}
//       {articles.length > 0 && <ArticleList items={articles} />}
//     </div>
//   );
// }

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
