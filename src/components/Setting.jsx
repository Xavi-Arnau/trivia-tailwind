import { useContext } from "react";
import SettingsContext from "../context/SettingsContext";

const Setting = ({ property, text, first, second, options }) => {
  const { settings, updateSetting } = useContext(SettingsContext);

  return (
    <div>
      <p className="mt-8 mb-2">{text}</p>

      {options.map((option) => (
        <button
          key={option}
          onClick={(e) => updateSetting(property, e.target.textContent)}
          className={
            settings[property] === option
              ? "text-lg capitalize bg-darkBlue text-veryLightGray font-bold w-40 h-10"
              : "text-lg capitalize text-darkBlue bg-veryLightGray font-bold w-40 h-10"
          }
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Setting;
