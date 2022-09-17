import instagramLogo from "../images/instagram-logo.png";
import facebookLogo from "../images/facebook-logo.png";
import whatsappLogo from "../images/whatsapp-logo.png";

const SocialIcons = ({ networks }) => {
  return networks.map((network) => (
    <a
      className="social-network-icon"
      key={network.net}
      href={network.site}
      target="blank"
    >
      <img
        src={
          network.net === "instagram"
            ? instagramLogo
            : network.net === "facebook"
            ? facebookLogo
            : whatsappLogo
        }
        alt={network.net}
      />
    </a>
  ));
};

export default SocialIcons;
