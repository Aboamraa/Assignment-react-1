import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <>
      <div className="secondary-bg py-5 ">
        <div className="container ">
          <div className="row g-4 text-white">
            <div className="col-md-4 text-center">
              <h3 className="fs-2 text-uppercase">Location</h3>
              <p className="mb-3">2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
            <div className="col-md-4 text-center d-flex flex-column align-items-center">
              <h3 className="fs-2 text-uppercase">AROUND THE WEB</h3>
              <div className="d-flex gap-2">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="social-icon border border-1 rounded-circle border-white p-2"
                />
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="social-icon border border-1 rounded-circle border-white p-2"
                />
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="social-icon border border-1 rounded-circle border-white p-2"
                />
                <FontAwesomeIcon
                  icon={faGlobe}
                  className="social-icon border border-1 rounded-circle border-white p-2"
                />
              </div>
            </div>
            <div className="col-md-4 text-center">
              <h3 className="fs-2">ABOUT FREELANCER</h3>
              <p className="mb-3">
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" text-white text-center text-capitalize secondary-darker-bg py-3">
        <p>Copyright © Your Website 2021</p>
      </div>
    </>
  );
}
