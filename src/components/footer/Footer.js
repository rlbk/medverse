import "./Footer.css";
import MainLogo from "../shared-components/MainLogo";
import Copyright from "./Copyright";
import ContactList from "./ContactList";
import FooterInfos from "./FooterInfos";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  const aboutUsItems = [
    "About MedVerse",
    "Blogs",
    "Carrers",
    "Digital Payments",
    "Shipping Information",
  ];

  const cusSerItems = [
    "Help Center",
    "Report Abuse",
    "User Guide",
    "Send feedbacks",
    "FAQs",
  ];

  const legalItems = [
    "Privacy Policy",
    "Terms and Conditions",
    "Return Policy",
    "Security",
  ];

  return (
    <>
      <div className="footer-container">
        <div className="frist-row">
          {" "}
          <MainLogo addClass="white-col" />
          <div className="subs-container">
            <p className="subscribe-title">Subscribe to MedVerse</p>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="email-input"
            />
            <button className="subs-btn">Subscribe Now</button>
          </div>
        </div>
        <div className="second-row"></div>
        <div className="second-row">
          <ContactList />

          <div className="footerInfosItems">
            <FooterInfos title="About Us" items={aboutUsItems} />
            <FooterInfos title="Customers Services" items={cusSerItems} />
            <FooterInfos title="Legal" items={legalItems} />
          </div>
        </div>
        <div className="third-row">
          <h4 className="socialMedia-title">Follow us on social media</h4>
          <div className="socialMedia-icons">
            <div className="socialMedia-icon">
              <FacebookIcon fontSize="large" />
            </div>
            <div className="socialMedia-icon">
              <InstagramIcon fontSize="large" />{" "}
            </div>
            <div className="socialMedia-icon">
              <TwitterIcon fontSize="large" />{" "}
            </div>
            <div className="socialMedia-icon">
              <YouTubeIcon fontSize="large" />{" "}
            </div>
          </div>
        </div>
      </div>
      <Copyright />
    </>
  );
};

export default Footer;
