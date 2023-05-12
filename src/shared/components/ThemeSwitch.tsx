import { faSun } from "@fortawesome/free-regular-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tooltip from "@mui/material/Tooltip";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export function ThemeSwitch() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <Tooltip
        title={`Switch to ${theme === "dark" ? "Light Mode" : "Dark Mode"}`}
        placement="bottom"
        arrow
      >
        <button
          onClick={toggleTheme}
          className="text-black dark:text-white hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors"
        >
          {theme === "light" && (
            <>
              <svg
                className="fill-current"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.9999 0.399902C10.6626 0.399902 11.1999 0.937161 11.1999 1.5999V2.7999C11.1999 3.46264 10.6626 3.9999 9.9999 3.9999C9.33716 3.9999 8.7999 3.46264 8.7999 2.7999V1.5999C8.7999 0.937161 9.33716 0.399902 9.9999 0.399902Z" />
                <path d="M14.7999 9.9999C14.7999 12.6509 12.6509 14.7999 9.9999 14.7999C7.34894 14.7999 5.1999 12.6509 5.1999 9.9999C5.1999 7.34894 7.34894 5.1999 9.9999 5.1999C12.6509 5.1999 14.7999 7.34894 14.7999 9.9999Z" />
                <path d="M14.2426 15.9395L15.0911 16.7881C15.5598 17.2567 16.3196 17.2567 16.7882 16.7881C17.2568 16.3194 17.2568 15.5597 16.7882 15.091L15.9397 14.2425C15.471 13.7739 14.7112 13.7739 14.2426 14.2425C13.774 14.7111 13.774 15.4709 14.2426 15.9395Z" />
                <path d="M16.7881 3.21161C17.2567 3.68024 17.2567 4.44004 16.7881 4.90867L15.9395 5.7572C15.4709 6.22583 14.7111 6.22583 14.2425 5.7572C13.7739 5.28857 13.7739 4.52877 14.2425 4.06014L15.091 3.21161C15.5597 2.74298 16.3194 2.74298 16.7881 3.21161Z" />
                <path d="M18.3999 11.1999C19.0626 11.1999 19.5999 10.6626 19.5999 9.9999C19.5999 9.33716 19.0626 8.7999 18.3999 8.7999H17.1999C16.5372 8.7999 15.9999 9.33716 15.9999 9.9999C15.9999 10.6626 16.5372 11.1999 17.1999 11.1999H18.3999Z" />
                <path d="M9.9999 15.9999C10.6626 15.9999 11.1999 16.5372 11.1999 17.1999V18.3999C11.1999 19.0626 10.6626 19.5999 9.9999 19.5999C9.33716 19.5999 8.7999 19.0626 8.7999 18.3999V17.1999C8.7999 16.5372 9.33716 15.9999 9.9999 15.9999Z" />
                <path d="M4.06027 5.75722C4.5289 6.22585 5.2887 6.22585 5.75733 5.75722C6.22596 5.28859 6.22596 4.52879 5.75733 4.06016L4.9088 3.21163C4.44017 2.74301 3.68038 2.74301 3.21175 3.21163C2.74312 3.68026 2.74312 4.44006 3.21175 4.90869L4.06027 5.75722Z" />
                <path d="M5.75722 15.9395L4.90869 16.7881C4.44006 17.2567 3.68026 17.2567 3.21163 16.7881C2.74301 16.3194 2.74301 15.5596 3.21163 15.091L4.06016 14.2425C4.52879 13.7738 5.28859 13.7738 5.75722 14.2425C6.22585 14.7111 6.22585 15.4709 5.75722 15.9395Z" />
                <path d="M2.7999 11.1999C3.46264 11.1999 3.9999 10.6626 3.9999 9.9999C3.9999 9.33716 3.46264 8.7999 2.7999 8.7999H1.5999C0.937161 8.7999 0.399902 9.33716 0.399902 9.9999C0.399902 10.6626 0.937161 11.1999 1.5999 11.1999H2.7999Z" />
              </svg>
            </>
          )}
          {theme === "dark" && (
            <>
              <FontAwesomeIcon icon={faMoon} />
            </>
          )}
        </button>
      </Tooltip>
    </>
  );
}
