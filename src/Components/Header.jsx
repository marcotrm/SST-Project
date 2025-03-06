import { useState, useEffect, useRef } from "react";
import "../css/header.css";

export default function Header() {
  // Stato per la visibilità della sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // Stato per controllare se siamo in modalità mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);
  // Riferimento al nav per eventuali manipolazioni (ad es. inert)
  const navRef = useRef(null);

  // Aggiorna lo stato in base alle dimensioni della finestra
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
      // Chiudi la sidebar quando passiamo da mobile a desktop
      if (window.innerWidth >= 700) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    // Imposta lo stato iniziale
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Gestisci l'attributo inert sul nav solo quando è chiuso in modalità mobile
  useEffect(() => {
    if (navRef.current) {
      if (isMobile && !isSidebarOpen) {
        navRef.current.setAttribute("inert", "");
      } else {
        navRef.current.removeAttribute("inert");
      }
    }
  }, [isMobile, isSidebarOpen]);

  // Funzione per aprire la sidebar
  const openSidebar = () => {
    setIsSidebarOpen(true);
    // Blocca lo scroll del body quando la sidebar è aperta
    document.body.style.overflow = "hidden";
  };

  // Funzione per chiudere la sidebar
  const closeSidebar = () => {
    setIsSidebarOpen(false);
    // Ripristina lo scroll del body quando la sidebar è chiusa
    document.body.style.overflow = "";
  };

  return (
    <header className="header-container">
      {/* Bottone per aprire la sidebar */}
      <button
        id="open-sidebar-button"
        onClick={openSidebar}
        aria-label="open sidebar"
        aria-expanded={isSidebarOpen ? "true" : "false"}
        aria-controls="navbar"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="40px"
          viewBox="0 -960 960 960"
          width="40px"
          fill="#c9c9c9"
        >
          <path d="M165.13-254.62q-10.68 0-17.9-7.26-7.23-7.26-7.23-18t7.23-17.86q7.22-7.13 17.9-7.13h629.74q10.68 0 17.9 7.26 7.23 7.26 7.23 18t-7.23 17.87q-7.22 7.12-17.9 7.12H165.13Zm0-200.25q-10.68 0-17.9-7.27-7.23-7.26-7.23-17.99 0-10.74 7.23-17.87 7.22-7.13 17.9-7.13h629.74q10.68 0 17.9 7.27 7.23 7.26 7.23 17.99 0 10.74-7.23 17.87-7.22 7.13-17.9 7.13H165.13Zm0-200.26q-10.68 0-17.9-7.26-7.23-7.26-7.23-18t7.23-17.87q7.22-7.12 17.9-7.12h629.74q10.68 0 17.9 7.26 7.23 7.26 7.23 18t-7.23 17.86q-7.22 7.13-17.9 7.13H165.13Z" />
        </svg>
      </button>

      {/* Overlay che chiude la sidebar quando cliccato */}
      {isSidebarOpen && (
        <div
          id="overlay"
          onClick={closeSidebar}
          aria-hidden="true"
          className={isSidebarOpen ? "show" : ""}
        ></div>
      )}

      {/* Barra laterale */}
      <nav id="navbar" ref={navRef} className={isSidebarOpen ? "show" : ""}>
        <ul>
          <li>
            <button
              id="close-sidebar-button"
              onClick={closeSidebar}
              aria-label="close sidebar"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="40px"
                viewBox="0 -960 960 960"
                width="40px"
                fill="#c9c9c9"
              >
                <path d="m480-444.62-209.69 209.7q-7.23 7.23-17.5 7.42-10.27.19-17.89-7.42-7.61-7.62-7.61-17.7 0-10.07 7.61-17.69L444.62-480l-209.7-209.69q-7.23-7.23-7.42-17.5-.19-10.27 7.42-17.89 7.62-7.61 17.7-7.61 10.07 0 17.69 7.61L480-515.38l209.69-209.7q7.23-7.23 17.5-7.42 10.27-.19 17.89 7.42 7.61 7.62 7.61 17.7 0 10.07-7.61 17.69L515.38-480l209.7 209.69q7.23 7.23 7.42 17.5.19 10.27-7.42 17.89-7.62 7.61-17.7 7.61-10.07 0-17.69-7.61L480-444.62Z" />
              </svg>
            </button>
          </li>
          <li className="home-li">
            <img className="logo" src="public/logo.png" alt="" />
          </li>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="flights">Flights</a>
          </li>
          <li>
            <a className="accent-link" href="/Login">
              Login
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
