import Logo from "../Logo.jsx";
import UserMenu from "../UserMenu/UserMenu.jsx";
import css from "./AppBar.module.css";

export default function AppBar() {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <Logo />
        <UserMenu />
      </div>
    </header>
  );
}
