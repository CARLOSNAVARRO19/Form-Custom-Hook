import { useEffect, useState } from "react";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="absolute top-2 right-3">
      <select
        value={darkMode ? "moon" : "sun"}
        onChange={(e) => toggleDarkMode(e.target.value === "moon")}
        className="bg-transparent border-none cursor-pointer focus:outline-none focus:bg-white dark:focus:bg-slate-900 transition-all duration-700"
      >
        <option value="sun">Light Mode</option>
        <option value="moon">Dark Mode</option>
      </select>
    </div>
  );
};

export default DarkMode;
