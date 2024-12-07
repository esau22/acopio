import { cn } from "@/utils/utils";
import {
  FaClock,
  FaFacebook,
  FaHeadset,
  FaInstagram,
  FaRocket,
  FaSearch,
  FaTiktok,
  FaWallet,
  FaWhatsapp,
  FaWindowClose,
  FaYoutube,
  FaShoppingCart,
} from "react-icons/fa";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoCall } from "react-icons/io5";
import { MdStar, MdSwitchAccount, MdEmail, MdLocationOn } from "react-icons/md";
import { RiShoppingCart2Fill } from "react-icons/ri";

interface IconProps {
  className?: string;
  onClick?: () => void;
}

export const Search = ({ className, onClick }: IconProps) => {
  return <FaSearch className={className} onClick={onClick} />;
};
export const Close = ({ className, onClick }: IconProps) => {
  return (
    <FaWindowClose
      className={cn(
        "text-black size-4 hover:text-gray-600 duration-300 ease-out cursor-pointer absolute right-20 top-4 mr-2 rounded-md",
        className
      )}
      onClick={onClick}
    />
  );
};
export const Facebook = ({ className, onClick }: IconProps) => {
  return (
    <FaFacebook
      className={cn(
        "text-primary size-7 rounded-full pt-1 pb-1  hover:text-blue-500 duration-300 ease-out",
        className
      )}
      onClick={onClick}
    />
  );
};
export const Shopping = ({ className, onClick }: IconProps) => {
  return (
    <FaShoppingCart
      className={cn(
        "text-primary size-7 rounded-full pt-1 pb-1  hover:text-blue-500 duration-300 ease-out inline",
        className
      )}
      onClick={onClick}
    />
  );
};
export const Youtube = ({ className, onClick }: IconProps) => {
  return (
    <FaYoutube
      className={cn(
        "text-red-800 size-7 rounded-full pt-1 pb-1  hover:text-red-500 duration-300 ease-out",
        className
      )}
      onClick={onClick}
    />
  );
};
export const TikTok = ({ className, onClick }: IconProps) => {
  return (
    <FaTiktok
      className={cn(
        "text-white size-7 rounded-full pt-1 pb-1  hover:text-gray-500 duration-300 ease-out",
        className
      )}
      onClick={onClick}
    />
  );
};
export const Instagram = ({ className, onClick }: IconProps) => {
  return (
    <FaInstagram
      className={cn(
        "instagram size-6 rounded-full pt-1 pb-1 hover:text-white duration-300 ease-out",
        className
      )}
      onClick={onClick}
    />
  );
};
export const WhatsApp = ({ className, onClick }: IconProps) => {
  return (
    <FaWhatsapp
      className={cn(
        "text-green-700 size-7 rounded-full pt-1 pb-1 hover:text-green-400 duration-300 ease-out",
        className
      )}
      onClick={onClick}
    />
  );
};
export const Call = ({ className, onClick }: IconProps) => {
  return (
    <IoCall
      className={cn("text-primary size-7 rounded-full pt-1 pb-1", className)}
      onClick={onClick}
    />
  );
};
export const Email = ({ className, onClick }: IconProps) => {
  return (
    <MdEmail
      className={cn(
        "text-primary size-7 rounded-full pt-1 pb-1 hover:text-blue-600 duration-300 ease-out",
        className
      )}
      onClick={onClick}
    />
  );
};
export const Location = ({ className, onClick }: IconProps) => {
  return (
    <MdLocationOn
      className={cn(
        "text-primary size-7 rounded-full pt-1 pb-1 hover:text-blue-600 duration-300 ease-out",
        className
      )}
      onClick={onClick}
    />
  );
};
export const MenuMobile = ({ className, onClick }: IconProps) => {
  return <HiMenuAlt2 className={className} onClick={onClick} />;
};
export const Rocket = ({ className, onClick }: IconProps) => {
  return <FaRocket className={className} onClick={onClick} />;
};
export const Wallet = ({ className, onClick }: IconProps) => {
  return <FaWallet className={className} onClick={onClick} />;
};
export const Clock = ({ className, onClick }: IconProps) => {
  return <FaClock className={className} onClick={onClick} />;
};
export const Headset = ({ className, onClick }: IconProps) => {
  return <FaHeadset className={className} onClick={onClick} />;
};
export const Star = ({ className, onClick }: IconProps) => {
  return <MdStar className={className} onClick={onClick} />;
};
export const ShoppingCart = ({ className, onClick }: IconProps) => {
  return <RiShoppingCart2Fill className={className} onClick={onClick} />;
};
export const SwitchAccount = ({ className, onClick }: IconProps) => {
  return <MdSwitchAccount className={className} onClick={onClick} />;
};
