import React from "react";
import PageTitle from "../../PageTitle/PageTitle";

export default function About() {
  return (
    <div className="d-flex flex-column align-items-center primary-bg vh-100 justify-content-center">
      <PageTitle
        titleColor={"text-white"}
        pageTitleText={"About Component"}
        bgColor={"bg-white"}
      />
      <div className="container my-5">
        <div className="row g-2 text-white">
          <div className="col-md-6">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
          <div className="col-md-6">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
