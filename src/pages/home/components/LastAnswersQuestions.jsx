import { HiOutlineArrowNarrowUp } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import AnswerQuestionCard from "./AnswerQuestionCard";
import AnswerQuestionFilter from "./AnswerQuestionFilter";
import AnswerQuestionPagination from "./AnswerQuestionPagination";

function LastAnswersQuestions() {
  return (
    <div className="grid grid-cols-4 gap-4 mt-[5rem] mb-[10rem]">
      {/* Left side filter by categories */}
      <AnswerQuestionFilter />

      {/* Right side answer questions */}
      <div className="col-span-3">
        <div className="flex justify-between">
          <p className="text-[3.125rem] font-medium leading-[3.3rem]">
            Список последних ответов <br /> на вопросы{" "}
            <span className="text-[#747474]">(12 493)</span>
          </p>
          <button className="flex *:flex *:mt-[2px] *:text-[#050B2B] py-[1.25rem] px-[2.5rem] bg-[white] mt-10 rounded-xl text-[#747474]">
            <>
              <HiOutlineArrowNarrowUp />
              <GiHamburgerMenu className="mr-4" />
            </>
            Сортировать по
          </button>
        </div>
        <div className="mt-8 flex">
          <input
            type="text"
            placeholder="Искать по тексту в вопросе"
            className="p-[1.875rem] rounded-2xl w-full mr-4"
          />
          <button className="w-[12.5rem] px-[3.75rem] py-[1.875rem] text-white bg-[#0129E3] flex justify-center rounded-2xl">
            <IoSearch className="mt-[2px] mr-2"/>
            Поиск
          </button>
        </div>
        <AnswerQuestionCard />
        <div className="flex justify-center">
        <AnswerQuestionPagination />
        </div>
      </div>
    </div>
  );
}

export default LastAnswersQuestions;
