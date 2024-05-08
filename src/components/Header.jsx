import React from "react";
import Nav from "./Nav";
import { SlLocationPin } from "react-icons/sl";
// eslint-disable-next-line
import { RU } from "country-flag-icons/react/3x2";
// eslint-disable-next-line
import { UZ } from "country-flag-icons/react/3x2";
// eslint-disable-next-line
import { GB } from "country-flag-icons/react/3x2";

function Header() {
  const [country, setCountry] = React.useState("RU");
  const [countryName, setCountryName] = React.useState("Ташкент");

  return (
    <header className="mx-[6.25rem] my-6">
      <div className="flex justify-between">
        {/* Left */}
        <div className="flex">
          <SlLocationPin className="text-[#0129E3] mt-[0.2rem]" />
          {/* Select for change site language */}
          <>
            <select
              value={countryName}
              onChange={(e) => setCountryName(e.target.value)}
              className="bg-[#F8F8F8] pr-2 ml-3"
            >
              <option value="Ташкент">Ташкент</option>
            </select>
          </>
        </div>

        {/* Right */}
        <div className="flex justify-between">
          {/* Logic for change flags */}
          <div className="w-[2rem] mr-2 *:rounded">
            {country === "RU" && <RU title="United States" />}
            {country === `UZ` && <UZ title="United States" />}
            {country === `GB` && <GB title="United States" />}
          </div>

          {/* Logic for change info language */}
          <p className="text-[#747474] mr-1">
            {country === "RU" && "Язык:"}
            {country === `UZ` && "Til:"}
            {country === `GB` && "Language:"}
          </p>
          {/* Select for change site language */}
          <>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="bg-[#F8F8F8] w-24"
            >
              <option value="RU">Русский</option>
              <option value="UZ">O`zbekcha</option>
              <option value="GB">English</option>
            </select>
          </>
        </div>
      </div>
      <Nav />
    </header>
  );
}

export default Header;
