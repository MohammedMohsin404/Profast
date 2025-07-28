import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/logo.png";

const Footer = () => {
  const items = [
    {
      name: "Services",
      path: "/",
    },
    {
      name: "Covarage",
      path: "/covertage",
    },
    {
      name: "About Us",
      path: "/about-us",
    },
    {
      name: "Pricing",
      path: "/pricing",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

    const socials = [
    {
      name: "Linked In",
      path: "https://www.linkedin.com",
      src:"/socials/linkedin.png"
    },
    {
      name: "X",
      path: "https://x.com",
       src:"/socials/x.png"
    },
    {
      name: "Facebook",
      path: "https://www.facebook.com",
       src:"/socials/facebook.png"
    },
    {
      name: "YouTube",
      path: "https://www.youtube.com",
       src:"/socials/youtube.png"
    },
    
  ];
  return (
    <footer className="mt-15 bg-[#1E1E1E] p-8 md:p-16 lg:p-28 rounded-2xl flex flex-col justify-center items-center space-y-8">
      <Link
        href="/"
        className="btn btn-neutral text-white text-3xl font-extrabold"
      >
        <Image alt="Logo" src={logo} width={38} height={48} /> Profast
      </Link>

      <p className="text-base text-[#DADADA] w-5/12 text-center">
        {" "}
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
      </p>

      <ul className="menu menu-horizontal px-1">
        {items.map((i,x) => (
          <li key={x} className="text-base font-medium text-[#DADADA]">
            <Link href={i.path}>{i.name}</Link>
          </li>
        ))}
      </ul>




        <ul className="menu menu-horizontal px-1">
        {socials.map((i,x) => (
          <li key={x} className="text-base font-medium text-[#DADADA]">
            <Link href={i.path}><Image src={i.src} alt={i.name} width="36" height="36" /></Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
