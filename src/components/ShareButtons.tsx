// import TwitterBlack from "../assets/png/twitter-black.png";
// import LinkedInBlack from "../assets/png/linkedin-black.png";
// import FacebookBlack from "../assets/png/facebook-black.png";
// import WhatsAppBlack from "../assets/png/whatsapp-black.png";
import TwitterWhite from "../assets/png/twitter.png";
import LinkedInWhite from "../assets/png/linkedin.png";
import FacebookWhite from "../assets/png/facebook.png";
import WhatsAppWhite from "../assets/png/whatsapp.png";

interface ShareButtonsProps {
  title: string;
  url: string;
}

const ShareButtons = ({ title, url }: ShareButtonsProps) => {
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  return (
    <div className="flex space-x-4">
      {/* Twitter */}
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center hover:opacity-80"
      >
        <img src={TwitterWhite} alt="Share on Twitter" className="h-6 w-6" />
      </a>

      {/* LinkedIn */}
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center hover:opacity-80"
      >
        <img src={LinkedInWhite} alt="Share on LinkedIn" className="h-6 w-6" />
      </a>

      {/* Facebook */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center hover:opacity-80"
      >
        <img src={FacebookWhite} alt="Share on Facebook" className="h-6 w-6" />
      </a>

      {/* WhatsApp */}
      <a
        href={`https://api.whatsapp.com/send?text=${encodedTitle} ${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center hover:opacity-80"
      >
        <img src={WhatsAppWhite} alt="Share on WhatsApp" className="h-6 w-6" />
      </a>
    </div>
  );
};

export default ShareButtons;
