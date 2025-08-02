import Image from "next/image";
import Link from "next/link";

const banners = [
  {
    id: "1",
    img: "/banner/banner1.png",
    id: "slide1",
    prev: "#slide3",
    next: "#slide2",
  },
  {
    id: "2",
    img: "/banner/banner2.png",
    id: "slide2",
    prev: "#slide1",
    next: "#slide3",
  },
  {
    id: "3",
    img: "/banner/banner3.png",
    id: "slide3",
    prev: "#slide2",
    next: "#slide1",
  },
];

function Banner() {
  return (
    <section className="mt-15 ">
      <div className="carousel w-full">
        {banners.map((banner) => (
          <div key={banner.id}   width="677"
              height="1500" className="carousel-item relative w-full">
            <Image
              alt="Banner Image"
              width="677"
              height="1500"
              src={banner.img}
              className="w-full"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <Link href={banner.prev} className="btn btn-circle">
                ❮
              </Link>
              <Link href={banner.next} className="btn btn-circle">
                ❯
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Banner;
