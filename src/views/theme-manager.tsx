import { useTheme } from "../context/theme-context";

const ThemeManager = () => {
  const { toggleTheme } = useTheme();
  return (
    <div>
      <button onClick={toggleTheme} className="text-red-500 pr-6">change mode</button>
    </div>
  );
};

export default ThemeManager;
