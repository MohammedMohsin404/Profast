
import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/logo.png";
import upperRight from "@/../public/upperRight.png";

export default function Navbar() {
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
      name: "Be a Rider",
      path: "/be-a-rider",
    },
  ];

  return (
    <div className="navbar bg-white shadow-sm rounded-2xl py-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
              {items.map(i=>( <li key={i.path} className="text-base font-medium text-[#606060]">
            <Link href={i.path} >{i.name}</Link>
          </li>))}
           <Link href="/" className="btn btn-outline rounded-xl text-xl px-8 py-4 border-[#DADADA] min-h-[56]"> Sign In</Link>
      <div className="flex">
          <Link href="/" className="btn btn-outline rounded-xl text-xl bg-[#CAEB66] px-8 py-4 border-0 min-h-[56]"> Be a Rider</Link>
        <Image className="" src={upperRight} alt="Icon" width={56} height={56} />
      </div>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-3xl font-extrabold">
          
          <Image alt="Logo" src={logo} width={38} height={48} /> Profast
        </Link>
      
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          
            {items.map(i=>( <li key={i.path} className="text-base font-medium text-[#606060]">
            <Link href={i.path}>{i.name}</Link>
          </li>))}
         
        </ul>
      </div>
      <div className="navbar-end space-x-4 hidden md:flex">
        <Link href="/" className="btn  rounded-xl text-xl px-8 py-4 border-[#DADADA] min-h-[56] hover:bg-[#CAEB66] "> Sign In</Link>
        <div className="flex"><Link href="/" className="btn btn-outline rounded-xl text-xl bg-[#CAEB66]  px-8 py-4 border-0 min-h-[56]"> Be a Rider</Link>
        <Image className="" src={upperRight} alt="Icon" width={56} height={56} /></div>
      </div>
    </div>
  );
}
