import { Link } from "react-router-dom";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { HeaderLogo } from "../assets";

function Nav() {
  return (
    <nav className="mt-6 flex justify-between *:grow gap-4">
      <div className="flex justify-between align-middle bg-[] py-2 px-4 rounded-2xl bg-white">
        <Link to="/" className="mr-4 self-center">
          <img src={HeaderLogo} alt="Logotip" />
        </Link>
        <Link to="/" className="text-[#747474]">
          Консультация <br /> от врачей
        </Link>
      </div>
      <div className="flex justify-center rounded-2xl bg-[#0129E3] text-white px-[4rem] cursor-pointer">
        <HiOutlineSquares2X2 className="self-center text-[1.1rem] mr-3" />
        <Link to="/" className="self-center text-[1rem] font-medium">
          Каталог услуг
        </Link>
      </div>
      <div className="flex justify-center self-center rounded-2xl *:cursor-pointer *:px-3 bg-white text-[#747474] px-[2rem] py-5">
        <Link to="/">О проекте</Link>
        <Link to="/">Партнерство</Link>
        <Link to="/">Контакты</Link>
      </div>
      <button className="text-center text-[#0129E3] cursor-pointer bg-white rounded-2xl px-8">
        Вход / Регистрация
      </button>
    </nav>
  );
}

export default Nav;
