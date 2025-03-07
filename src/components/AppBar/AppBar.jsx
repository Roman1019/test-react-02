// import Logo from "../Logo.jsx";
// import UserMenu from "../UserMenu/UserMenu.jsx";
// import css from "./AppBar.module.css";

// export default function AppBar() {
//   return (
//     <header className={css.header}>
//       <div className={css.container}>
//         <Logo />
//         <UserMenu />
//       </div>
//     </header>
//   );
// }
import TextInput from "../TextInput/TextInput";
import LangSwicher from "../LangSwicher/LangSwicher";

export default function AppBar({ filter, lang, onFilter, onSelectLang }) {
  return (
    <header
      style={{
        border: "1px solid orangered",
        padding: 8,
        display: "flex",
        gap: 20,
      }}
    >
      <TextInput value={filter} onFilter={onFilter} />
      <LangSwicher value={lang} onSelect={onSelectLang} />
    </header>
  );
}
