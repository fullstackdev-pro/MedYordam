import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

function AnswerQuestionPagination(onPageChange) {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    if (page >= 1) {
      setCurrentPage(page);
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    let total = currentPage + 3;

    //   total = currentPage + 3;

    for (let i = currentPage; i <= total; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={
            currentPage === i
              ? "border-[1px] border-solid border-[#0129E3]"
              : ""
          }
        >
          <button onClick={() => handlePageChange(i)}>{i}</button>
        </li>
      );
    }

    pageNumbers.push(
      <li key="...">
        <button>...</button>
      </li>
    );

    return pageNumbers;
  };

  return (
    <>
      <button
        className="px-7 py-5 text-white bg-[#0129E3] rounded-xl mr-2"
        onClick={() => handlePageChange(currentPage - 1)}
      >
        <FaChevronLeft />
      </button>
      <ul className="flex justify-between *:bg-white *:px-7 *:py-5 *:rounded-xl *:mx-2">
        {renderPageNumbers()}
      </ul>
      <button
        className="px-7 py-5 text-white bg-[#0129E3] rounded-xl ml-2"
        onClick={() => handlePageChange(currentPage + 1)}
      >
        <FaChevronRight />
      </button>
    </>
  );
}

export default AnswerQuestionPagination;
