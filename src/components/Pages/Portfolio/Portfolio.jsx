import PageTitle from "../../PageTitle/PageTitle";
import Product from "../../Product/Product";
import firstImage from "../../../assets/imgi_2_port2.png";
import secondImage from "../../../assets/imgi_3_port3.png";
import ThirdImage from "../../../assets/img_4.png";

export default function Portfolio() {
  return (
    <div className="d-flex flex-column align-items-center">
      <PageTitle
        titleColor={"secondary-color"}
        bgColor={"secondary-bg"}
        pageTitleText={"Portfolio Component"}
      />
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-4 col-md-6">
            <Product productImage={firstImage} />
          </div>
          <div className="col-lg-4 col-md-6">
            <Product productImage={secondImage} />
          </div>
          <div className="col-lg-4 col-md-6">
            <Product productImage={ThirdImage} />
          </div>
          <div className="col-lg-4 col-md-6">
            <Product productImage={firstImage} />
          </div>
          <div className="col-lg-4 col-md-6">
            <Product productImage={secondImage} />
          </div>
          <div className="col-lg-4 col-md-6">
            <Product productImage={ThirdImage} />
          </div>
        </div>
      </div>
    </div>
  );
}
