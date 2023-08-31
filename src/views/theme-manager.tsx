import { LightMode } from "../assets/components/svgToComponents/LightMode";
import { NightMode } from "../assets/components/svgToComponents/NightMode";
import { useTheme } from "../context/theme-context";

const ThemeManager = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="items-center justify-center align-middle flex">
      <button onClick={toggleTheme} className="text-red-500 lg:pl-6 pt-3 lg:pt-0">
        {theme == 'dark' ? <LightMode className="fill-white"/> : <NightMode /> }
      </button>
    </div>
  );
};

export default ThemeManager;
