import { BackgroundImage } from "../../../assets";
import { FaRegStar, FaRegQuestionCircle } from "react-icons/fa";
import { TbFileStack } from "react-icons/tb";

function Welcome() {
  return (
    <div
      style={{ background: "linear-gradient(150deg, #389FF3, #022FE4)" }}
      className="relative rounded-3xl px-6 pt-12 pb-8 text-center text-white z-[1]"
    >
      <img
        src={BackgroundImage}
        alt="background image"
        className="absolute text-[#2768EB] top-0 right-0 z-[-1]"
      />
      <button className="mt-4 px-5 py-[0.625rem] border-[1px] border-solid rounded-3xl cursor-pointer">
        Консультация от врачей
      </button>
      <h1 className="text-[3.5rem] font-medium leading-none mt-4">
        Получайте бесплатную консультацию <br /> от лучших специалистов
      </h1>
      <div className="flex justify-center gap-4 mt-12">
        <button className="px-14 py-4 bg-white text-[#050B2B] rounded-xl flex font-medium cursor-pointer">
          <FaRegStar className="text-[#0129E3] mr-2 mt-1" /> Лучшие консультанты
        </button>
        <button className="px-14 py-4 bg-white text-[#050B2B] rounded-xl flex font-medium cursor-pointer">
          <FaRegQuestionCircle className="text-[#0129E3] mr-2 mt-1" /> Задать
          вопрос
        </button>
        <button className="px-14 py-4 bg-white text-[#050B2B] rounded-xl flex font-medium cursor-pointer">
          <TbFileStack className="text-[#0129E3] mr-2 mt-1" />
          Популярные вопросы
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4 mx-4 mt-16 mb-4">
        <div className="py-5 px-4 border-[1px] border-solid border-[#9DBBF6] bg-[#3B78ED] rounded-[20px]">
          <p className="text-[3rem] font-medium">+1000</p>
          <p>Врачей различных специализаций </p>
        </div>
        <div className="py-5 px-4 border-[1px] border-solid border-[#9DBBF6] bg-[#3B78ED] rounded-[20px]">
          <p className="text-[3rem] font-medium">24/7</p>
          <p>Доступ к медицинской помощи</p>
        </div>
        <div className="py-5 px-4 border-[1px] border-solid border-[#9DBBF6] bg-[#3B78ED] rounded-[20px]">
          <p className="text-[3rem] font-medium">+ 95%</p>
          <p>Положительных отзывов</p>
        </div>
        <div className="py-5 px-4 border-[1px] border-solid border-[#9DBBF6] bg-[#3B78ED] rounded-[20px]">
          <p className="text-[3rem] font-medium">+20 000</p>
          <p>Анкет пользователей</p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
