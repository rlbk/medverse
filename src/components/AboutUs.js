import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="aboutUs-block">
      <div className="about-sectionTitle">
        <h2 className="aboutSectionTitle-text">About us</h2>
      </div>
      <div className="aboutSectionContents">
        <div className="aboutsecContent-col1">
          <div className="aboutSecContent-text">
            <h3 className="aboutSecContent-title">What is MedVerse?</h3>
            <p>
              MedVerse is a smart medical ecosystem which put patient in control
              of their medical data , giving them power to share the single most
              comprehensive version of their record with every organization in
              their medical network. It builds trusted networks for the health
              data, helping everyone travel safely on their digital journey and
              reduce burden of cost on health facilities.
            </p>
            <p>
              MedVerse integrate the different forms of treatment (Allopathy,
              Homeopathy, Ayurveda).One Nation, One Health System’ has already
              been envisioned in the National Health Policy and the National
              Education Policy in many countries. With MedVerse, Nepal can also
              embark on a centralized, secure, and trustworthy health care
              system.
            </p>
          </div>
          <div className="aboutSecContent-image">
            <img src={require("./images/relationship_2.png")} alt="" />
          </div>
        </div>
        <div className="aboutsecContent-col2">
          <div className="aboutSecContent-text">
            <div className="aboutSecContent-image">
              <img src={require("./images/relationship_2.png")} alt="" />
            </div>
            <h3 className="aboutSecContent-title">Why MedVerse?</h3>
            <p>
              We at MedVerse believe that good health is dependent on physical,
              mental and spiritual well being. Having a comprehensive
              understanding of health requires tracking every aspect of an
              individual from birth to death.
            </p>
            <p>
              Blockchain technology can be a solution to keeping all patient
              data in a single, secure location. One global blockchain could be
              the foundation of a universal global electronic health record that
              provides all stakeholders with access to patient information in a
              single private digital location.
            </p>
            <p>
              It will be our mission to create a repository that stores all
              medical treatment histories related to physical, mental, and
              spiritual health.All these past health records could help doctors
              predict and treat patients' diseases when they become ill.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
