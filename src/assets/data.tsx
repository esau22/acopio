import {
  Call,
  Email,
  Facebook,
  Instagram,
  Location,
  TikTok,
  WhatsApp,
  Youtube,
} from "@/components/ui/icon";

export const navBarList = [
  {
    title: "Inicio",
    href: "/",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Contactos",
    href: "/contact",
  },
  {
    title: "Productos",
    href: "/product",
  },
];

export const footerData = [
  {
    _id: 2221,
    title: "Contáctenos",
    listItemContact: [
      {
        name: "Email",
        icon: <Email />,
        href: "https://www.linkedin.com/in/esau-e-espiritu-meza-497600275/",
        description: "emr.emr.espiritu@gmail.com",
      },
      {
        name: "Call",
        icon: <Call />,
        href: "https://www.facebook.com",
        description: "+5178954621",
      },
      {
        name: "Call",
        icon: <Location />,
        href: "https://www.facebook.com",
        description: "123 Main Street City, Country ",
      },
    ],
  },
  {
    _id: 2222,
    title: "Servicios",
    listItem: [
      {
        _id: "002",
        listData: [
          "careers",
          "Blog",
          "About Amazon",
          "Investor Relations",
          "Shoppers Devices",
          "Shoppers Science",
        ],
      },
    ],
  },
  {
    _id: 2223,
    title: "Contáctenos",
    listItem: [
      {
        _id: "003",
        listData: [
          "careers",
          "Blog",
          "About Amazon",
          "Investor Relations",
          "Shoppers Devices",
          "Shoppers Science",
        ],
      },
    ],
  },
  {
    _id: 2224,
    title: "Social Links",
    listItemSocial: [
      {
        name: "Facebook",
        icon: <Facebook />,
        href: "https://www.linkedin.com/in/esau-e-espiritu-meza-497600275/",
      },
      {
        name: "Youtube",
        icon: <Youtube />,
        href: "https://www.facebook.com",
      },
      {
        name: "TikTok",
        icon: <TikTok />,
        href: "https://www.facebook.com",
      },
      {
        name: "Instagram",
        icon: <Instagram />,
        href: "https://www.facebook.com",
      },
      {
        name: "WhatsApp",
        icon: <WhatsApp />,
        href: "https://www.facebook.com",
      },
    ],
  },
];
