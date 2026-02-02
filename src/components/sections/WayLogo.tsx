import wayLogoImg from "@/assets/way-logo.png"
import Image from "next/image";

const WayLogo = ({ className = "", size = "default" }: { className?: string; size?: "small" | "default" | "large" }) => {
  const sizeClasses = {
    small: "h-8",
    default: "h-12",
    large: "h-16",
  };

  return (
    <Image 
      src={wayLogoImg} 
      alt="Way Escapamentos" 
      className={`${sizeClasses[size]} ${className} w-auto`}
    />
  );
};

export default WayLogo;
