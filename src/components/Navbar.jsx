import React from "react";
import { jsPDF } from "jspdf";

const Navbar = () => {
  const generatePDF = () => {
    var doc = new jsPDF();
    // doc.html(
    //   document.querySelector(".navbar", {
    //     callback: function (pdf) {
    //       pdf.save("prescription.pdf");
    //     },
    //   })
    // );
    var a = "Hello World";
    doc.text(a, 10, 10);
    doc.save("a4.pdf");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
              <a className="nav-link" href="/">
                Features
              </a>
              <a className="nav-link" href="/">
                Pricing
              </a>
              <button
                className="nav-link btn btn-primary text-white"
                onClick={generatePDF}
              >
                Download Prescription
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
