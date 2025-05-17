import * as React from "react"
import i18n from "i18next"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select"

export function SelectDemo() {
  const [lang, setLang] = React.useState(i18n.language || "en");

  const handleLangChange = (value) => {
    setLang(value);
    i18n.changeLanguage(value);
  };

  return (
    <Select value={lang} onValueChange={handleLangChange}>
      <SelectTrigger className="w-[100px] text-white font-semibold border border-gray-700 bg-transparent shadow-none focus:outline-none focus:ring-0">
        <SelectValue placeholder="Lang" />
      </SelectTrigger>
      <SelectContent className="bg-black">
        <SelectGroup>
          <SelectLabel className="text-white font-semibold underline">Language</SelectLabel>
          <SelectItem className="text-white font-semibold" value="en">English</SelectItem>
          <SelectItem className="text-white font-semibold" value="fr">French</SelectItem>
          <SelectItem className="text-white font-semibold" value="es">German </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
