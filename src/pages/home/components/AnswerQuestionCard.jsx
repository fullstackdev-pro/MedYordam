import { BsGenderMale, BsGenderFemale } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa";
import { DoctorImage } from "../../../assets";
import { QuestionAnswers } from "../../../data";

function AnswerQuestionCard() {
  return (
    <div className="mt-8">
      {QuestionAnswers.map((data) => {
        // eslint-disable-next-line
        let {
          questionNumber,
          questionTime,
          question,
          patientName,
          patientAge,
          patientGender,
          doctorName,
          doctorSpeciality,
          answerTime,
          answer,
        } = data;
        return (
          <div key={questionNumber} className="mb-10">
            <div className="bg-gradient-to-r from-[#379FF2] to-[#022FE4] px-6 py-[15px] rounded-t-3xl flex justify-between text-white">
              <p className="font-medium">Вопрос: 21408</p>
              <p>{questionTime}</p>
            </div>
            <div className="bg-white px-[1.125rem] py-[1.5rem] rounded-b-3xl">
              {/* Question */}
              <div className="flex">
                <div className="bg-[#F8F8F8] px-4 py-[1.125rem] rounded-l-[14px] rounded-b-[14px]">
                  <div className="flex justify-between text-white border-b-[1px] border-solid border-[#7474741A] pb-2">
                    <p className="text-[#0129E3] text-sm">
                      Получено ответов (3)
                    </p>
                    <p className="text-[#747474] font-medium">
                      {patientName} ({patientAge} лет)
                    </p>
                  </div>
                  <p className="mt-3 text-sm text-[#050B2B]">
                    {question}{" "}
                    <span className="font-medium text-[#747474] underline underline-offset-1 cursor-pointer">
                      Читать полностью
                    </span>
                  </p>
                </div>
                <div
                  className={`w-[12.5rem] h-[4.375rem] rounded-full ml-4 flex justify-center ${
                    patientGender === "male" ? "bg-[#1760D7]" : "bg-[#FF3E68]"
                  }`}
                >
                  {patientGender === "male" ? (
                    <BsGenderFemale className="text-white self-center text-3xl" />
                  ) : (
                    <BsGenderMale className="text-white self-center text-3xl" />
                  )}
                </div>
              </div>

              {/* Answer */}
              <div className="flex mt-6 ">
                <div className="w-[12.5rem] h-[4.375rem]">
                  <img src={DoctorImage} alt="Doctor image" />
                </div>
                <div className="bg-[#0129E3] px-4 py-[1.125rem] rounded-r-[14px] rounded-b-[14px]">
                  <div className="flex justify-between text-[#FFFFFF] border-b-[1px] border-solid border-[#7474741A] pb-2">
                    <p className=" font-medium text-base">
                      {doctorName} ({doctorSpeciality})
                    </p>
                    <p className="text-sm">{answerTime}</p>
                  </div>
                  <p className="mt-3 text-sm text-white">
                    {answer}{" "}
                    <span className="font-medium underline underline-offset-1 cursor-pointer">
                      Читать полностью
                    </span>
                  </p>
                </div>
              </div>

              {/* Button  */}
              <button className="flex justify-center w-full mt-6 py-5 bg-[#F8F8F8] text-[#747474] rounded-xl text-sm font-medium">
                Смотреть все ответы (2){" "}
                <FaAngleDown className="mt-[3px] ml-3" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AnswerQuestionCard;
