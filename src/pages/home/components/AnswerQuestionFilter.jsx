import { IoSearch } from "react-icons/io5";
import { MdClear } from "react-icons/md";
import { Categories } from "../../../data";
import { useState } from "react";

function AnswerQuestionFilter() {
  const [checkedList, setCheckedList] = useState(["Врач УЗИ"]);

  function handleCheck(category) {
    if (!checkedList.includes(category)) {
      setCheckedList([...checkedList, category]);
    } else {
      setCheckedList(checkedList.filter((name) => name !== category));
    }
  }

  return (
    <div className="col-span-1">
      <div className="bg-white px-4 py-6 rounded-[18px]">
        <div className="flex justify-between">
          <p className="text-xl font-medium">
            Фильтрация <br /> по направлениям
          </p>
          <button
            className="text-[#DE303A] text-sm flex self-end"
            onClick={() => setCheckedList([])}
          >
            <MdClear className="mt-[2px]" />
            Сбросить
          </button>
        </div>
        {/* Search category */}
        <div className="relative">
          <input
            type="search"
            name="filter"
            id="filter"
            placeholder="Поиск направления"
            className="mt-6 rounded-xl p-4 px-6 w-full bg-[#F8F8F8] texxt-[#747474]"
          />
          <IoSearch className="absolute top-11 right-6" />
        </div>
        {/* Checkboxs */}
        {Categories.map((category, index) => {
          return (
            <div
              className="flex justify-between *:self-center mt-4"
              key={index}
            >
              <div
                className="flex justify-start cursor-pointer"
                onClick={() => handleCheck(category.category)}
              >
                <input
                  type="checkbox"
                  id={category.category}
                  name={category.category}
                  checked={checkedList.includes(category.category)}
                  className="mr-3 w-4"
                  readOnly
                />
                <label
                  htmlFor="demoCheckbox"
                  className="text-[#050B2B] text-base"
                >
                  {" "}
                  {category.category}
                </label>
              </div>
              <p
                className={`text-base font-medium ${
                  // Change count style on checked
                  checkedList.includes(category.category)
                    ? "text-[#0129E3]"
                    : "text-[#747474]"
                } `}
              >
                ({category.count})
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AnswerQuestionFilter;
