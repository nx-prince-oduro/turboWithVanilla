import { navbarContainer, navLinks } from "./navbar.css";

const Navbar = () => {
  return (
    <div className={navbarContainer}>
      <h1>Igus</h1>
      <div className={navLinks}>
        <a>Contact</a>
        <a>Link 2</a>
        <a>Link 3</a>
      </div>
    </div>
  );
};

export default Navbar;
