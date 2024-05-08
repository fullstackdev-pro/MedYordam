import { Link } from "react-router-dom";
import { FooterLogo } from "../assets";

function Footer() {
  let linkStyle =
    "text-xl font-medium hover:text-[#0129E3] cursor-pointer mt-4";
  const Year = new Date().getFullYear();

  return (
    <footer className="bg-[#050B2B] text-white px-[6.25rem]">
      <div className="grid grid-cols-4 py-[5rem]">
        <div>
          <img src={FooterLogo} alt="Logo" />
          <p className="mt-5">Консультация от врачей</p>
        </div>
        <div className="*:block">
          <p className="mb-8">Каталог услуг</p>
          <Link to="/" className={linkStyle}>
            Медицинская консультация
          </Link>
          <Link to="/" className={linkStyle}>
            Справочник лекарств
          </Link>
          <Link to="/" className={linkStyle}>
            Справочник болезней
          </Link>
          <Link to="/" className={linkStyle}>
            Справочник лекарств
          </Link>
          <Link to="/" className={linkStyle}>
            Справочник Врачей и Клиник
          </Link>
        </div>
        <div className="*:block">
          <p className="mb-8">Выполнить</p>
          <Link to="/" className={linkStyle}>
            Задать вопрос
          </Link>
          <Link to="/" className={linkStyle}>
            Лучшие консультанты
          </Link>
          <Link to="/" className={linkStyle}>
            Популярные вопросы
          </Link>
          <Link to="/" className={linkStyle}>
            Регистрация
          </Link>
          <Link to="/" className={linkStyle}>
            Вход в личный кабинет
          </Link>
        </div>
        <div className="*:block">
          <p className="mb-8">Проект</p>
          <Link to="/" className={linkStyle}>
            Информация о проекте
          </Link>
          <Link to="/" className={linkStyle}>
            Сотрудничество
          </Link>
          <Link to="/" className={linkStyle}>
            Контакты для связи
          </Link>
        </div>
      </div>
      {/* <hr /> */}
      <div className="flex justify-between py-[1.875rem] border-t-[1px] border-[#FFFFFF1A]">
        <p>
          MedYordam <time>{Year}</time> - Все права защищены
        </p>
        <p className="cursor-pointer">Обработка данных</p>
        <p className="cursor-pointer">Условия использования</p>
      </div>
    </footer>
  );
}

export default Footer;
