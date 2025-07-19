import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Product(props) {
  const { productImage } = props;

  return (
    <>
      <div className="card img-card shadow rounded-3 position-relative">
        <img
          src={productImage}
          alt="productImage"
          className="w-100 rounded-3"
        />
        <div className="wrapper position-absolute rounded-3 d-flex justify-content-center align-items-center">
          <FontAwesomeIcon icon={faPlus} className="display-1 plus-icon"/>
        </div>
      </div>
    </>
  );
}
