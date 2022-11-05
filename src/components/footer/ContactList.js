import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./ContactList.css";

const ContactList = () => {
  return (
    <div className="contactLists">
      <div className="contact-item">
        <CallIcon className="contact-icon" />
        <div className="contact-detail">
          <p>01-48957380</p>
          <p>9843525261</p>
        </div>
      </div>
      <div className="contact-item">
        <EmailIcon className="contact-icon" />
        <div className="contact-detail">
          <p>ketugrocery01@gmail.com</p>
          <p>sales.ketugrocory@gmail.com</p>
        </div>
      </div>
      <div className="contact-item">
        <LocationOnIcon className="contact-icon" />
        <div className="contact-detail">
          <p>Lalitpur-10, Kumaripati</p>
          <p>Lalitpur, Nepal</p>
        </div>
      </div>
    </div>
  );
};

export default ContactList;
