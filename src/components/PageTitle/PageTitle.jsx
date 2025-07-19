import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function PageTitle(props) {
  const { titleColor, pageTitleText, bgColor } = props;

  return (
    <>
      <div className="position-relative title-container">
        <h1
          className={`page-title text-center text-uppercase my-3 fw-bold fs-1 ${titleColor}`}
        >
          {pageTitleText}
        </h1>
        <div className={`left-bar position-absolute ${bgColor}`}></div>
        <FontAwesomeIcon
          icon={faStar}
          className={`position-absolute icon ${titleColor}`}
        />
        <div className={`right-bar position-absolute ${bgColor} `}></div>
      </div>
    </>
  );
}
