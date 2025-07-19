import React from "react";

export default function Error() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center secondary-bg min-vh-100">
      <h1 className="text-white display-1 fw-semibold">404</h1>
      <h3 className="fw-light text-white-50">Can't find this URL please make sure you entered a valid url</h3>
    </div>
  );
}
