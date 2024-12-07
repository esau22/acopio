import { cn } from "@/utils/utils";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <h2
        className={cn(
          "text-2xl hover:text-primary font-bold uppercase duration-300 ease-out relative group overflow-hidden"
        )}
      >
        Acopio S.R
        <span className="absolute left-0 bottom-0 w-full h-px bg-primary -translate-x-[105%] group-hover:translate-x-0 duration-300 ease-out" />
      </h2>
    </Link>
  );
};

export default Logo;
