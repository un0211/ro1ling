import { Link } from "react-router-dom";
import PlusIcon from "assets/icons/plus.svg";
import style from "./Card.module.scss";
import { formatDateWithDot } from "utils/rollingPaperPage";
<<<<<<< HEAD
import CardModal from "./CardModal";
import { useState } from "react";

function Card({ message }) {
  const { content, createdAt, profileImageURL, relationship, sender } = message;
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleCardClick = () => {
    setIsOpenModal(true);
  };

  const handleCloseClick = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <article className={style.card} onClick={handleCardClick}>
        <header>
          <img
            className={style.profile}
            src={profileImageURL}
            alt="프로필 이미지"
          />
          <div>
            <h2 className="font_20_regular">
              From. <span className="font_20_bold">{sender}</span>
            </h2>
            <p>{relationship}</p>
          </div>
        </header>
        <div className={style.divider}></div>
        <main className="font_18_regular">{content}</main>
        <footer className="font_12_regular">
          {formatDateWithDot(createdAt)}
        </footer>
      </article>
      {isOpenModal && (
        <CardModal
          message={message}
          isOpen={isOpenModal}
          onRequestClose={handleCloseClick}
        />
      )}
    </>
=======
import SenderInfo from "./SenderInfo";
import { FONT_CLASS_NAME } from "constants/rollingPaperPage";

function Card({ message }) {
  const { content, createdAt, profileImageURL, relationship, sender, font } =
    message;
    const [isOpenModal, setIsOpenModal] = useState(false);

  const handleCardClick = () => {
    setIsOpenModal(true);
  };

  const handleCloseClick = () => {
    setIsOpenModal(false);
  };

  return (
    <article className={style.card} onClick={handleCardClick}>
      <header>
        <SenderInfo
          profileImageURL={profileImageURL}
          relationship={relationship}
          sender={sender}
        />
      </header>
      <div className={style.divider}></div>
      <main className={`font-18 ${FONT_CLASS_NAME[font]}`}>{content}</main>
      <footer className="font-12">{formatDateWithDot(createdAt)}</footer>
    </article>
>>>>>>> develop
  );
}

export function FirstCard() {
  return (
    <div className={`${style.card} ${style["card-first"]}`}>
      <Link to="message">
        <div className={style["add-button"]}>
          <img src={PlusIcon} alt="메세지 추가" />
        </div>
      </Link>
    </div>
  );
}

export default Card;
