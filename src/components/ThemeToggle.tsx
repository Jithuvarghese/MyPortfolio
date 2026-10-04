import { FiMoon, FiSun } from "react-icons/fi";
import IconWrapper from "./IconWrapper";
import { useAppPreferences } from "../context/AppPreferencesContext";

const ThemeToggle = () => {
  const { theme, setTheme } = useAppPreferences();
  const isDark = theme === "dark";
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="icon-btn"
      aria-label={label}
      title={label}
    >
      {/* key remounts the icon so the swap animation replays on every toggle */}
      <span key={theme} className="icon-swap">
        <IconWrapper icon={isDark ? FiSun : FiMoon} className="flex" />
      </span>
    </button>
  );
};

export default ThemeToggle;
