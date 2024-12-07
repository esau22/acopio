import { cn } from "@/utils/utils";
import Link from "next/link";
import Logo from "../ui/logo";
import Button from "../ui/button";
import { navBarList } from "@/assets/data";

interface HeaderMobileProps {
  isOpen: boolean;
  onClose: () => void;
}

const HeaderMobile = ({ isOpen, onClose }: HeaderMobileProps) => {
  return (
    <>
      <div
        className={cn(
          "fixed top-0 left-0 w-[80%] sm:w-[40%] h-full z-50 bg-white flex flex-col p-6 shadow-md transition-transform duration-300",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex justify-between items-center mb-6">
          <Logo />
          <Button>Sign In</Button>
        </div>
        <div className="flex flex-col gap-7">
          {navBarList.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-base font-normal hover:text-primary transition-colors border-b"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        />
      )}
    </>
  );
};

export default HeaderMobile;
