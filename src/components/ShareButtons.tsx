import TwitterIcon from "../assets/png/twitter-black.png";
import LinkedInIcon from "../assets/png/linkedin-black.png";
import FacebookIcon from "../assets/png/facebook-black.png";
import WhatsAppIcon from "../assets/png/whatsapp-black.png";

interface ShareButtonsProps {
  title: string;
  url: string;
}

const ShareButtons = ({ title, url }: ShareButtonsProps) => {
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  return (
    <div className="flex space-x-4 mt-4">
      {/* Twitter */}
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center hover:opacity-80"
      >
        <img src={TwitterIcon} alt="Share on Twitter" className="h-6 w-6" />
      </a>

      {/* LinkedIn */}
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center hover:opacity-80"
      >
        <img src={LinkedInIcon} alt="Share on LinkedIn" className="h-6 w-6" />
      </a>

      {/* Facebook */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center hover:opacity-80"
      >
        <img src={FacebookIcon} alt="Share on Facebook" className="h-6 w-6" />
      </a>

      {/* WhatsApp */}
      <a
        href={`https://api.whatsapp.com/send?text=${encodedTitle} ${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center hover:opacity-80"
      >
        <img src={WhatsAppIcon} alt="Share on WhatsApp" className="h-6 w-6" />
      </a>
    </div>
  );
};

export default ShareButtons;
