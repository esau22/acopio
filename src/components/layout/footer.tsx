import Link from "next/link";
import Container from "../ui/container";
import { footerData } from "@/assets/data";

const Footer = () => {
  return (
    <div className="bg-gray-800 py-5 tracking-wide">
      <Container className="max-w-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-10 py-8">
        {footerData?.map((item) => (
          <div key={item?._id}>
            <h3 className="text-white text-lg font-semibold mb-3">
              {item?.title}
            </h3>
            <div className="flex flex-col gap-2">
              {item?.listItemContact?.map((social) => (
                <Link
                  href={social?.href}
                  key={social?.name}
                  target="_blank"
                  className="flex items-center py-1 text-gray-400 font-medium hover:text-primary  duration-300 ease-out "
                >
                  <span className="mr-2">{social?.icon}</span>
                  {social?.description}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-0.5">
              {item?.listItem?.map((list) =>
                list?.listData?.map((data) => (
                  <Link
                    href={"/"}
                    key={data}
                    className="py-1 text-gray-400 font-medium hover:text-primary duration-300 ease-out"
                  >
                    {data}
                  </Link>
                ))
              )}
            </div>
            <div className="flex space-x-4 mb-4">
              {item?.listItemSocial?.map((social) => (
                <Link href={social.href} key={social.name} target="_blank">
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </Container>
      <div className="bg-gray-900 p-5 mt-12">
        <p className="text-gray-400 text-base text-center">
          © ReadymadeUI. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
