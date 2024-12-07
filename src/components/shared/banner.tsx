import Image from "next/image";
import Container from "../ui/container";
import Link from "next/link";
import { Call, Email } from "../ui/icon";

const Banner = () => {
  return (
    <Container className="relative max-w-screen overflow-hidden p-0 bg-slate-400">
      <div className="grid sm:grid-cols-2 max-sm:gap-6">
        <div className="text-center p-6 flex flex-col justify-center items-center">
          <h3 className="font-extrabold text-5xl text-blue-600 leading-tight">
            <span className="text-gray-800">Ofertas</span> Especiales!
          </h3>
          <h6 className="text-lg text-gray-800 mt-4">
            Descubre increíbles descuentos, por tiempo limitado
          </h6>

          <button
            type="button"
            className="bg-blue-700 hover:bg-blue-500 text-white tracking-wide font-semibold text-sm py-3 px-6 rounded-xl mt-8"
          >
            Get Started
          </button>

          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <Link href={"#"} className="flex items-center text-blue-600 gap-2">
              <Call className="size-6 text-blue-600 hover:text-blue-500" />
              180-548-2588
            </Link>
            <Link href={"#"} className="flex items-center text-blue-600 gap-2">
              <Email className="size-6 text-blue-700 hover:text-blue-600" />
              info@example.com
            </Link>
          </div>
        </div>
        <div className="flex justify-end items-center p-2 bg-gradient-to-b from-blue-600 to-blue-400 rounded-bl-[230px] w-full h-full">
          <div className="h-72 w-72 rounded-full bg-gradient-to-tr from-blue-600 to-blue-400 p-5">
            <Image
              src={"/images/banner.jpg"}
              className="w-full h-full rounded-full object-none border-8 border-white"
              width={150}
              height={150}
              alt="Banner"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
