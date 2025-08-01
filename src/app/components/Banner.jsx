import Image from "next/image";
import Link from "next/link";
function Banner() {
  return (
    <section className="mt-15 ">
      <div className="carousel w-full">
        <div id="slide3" className="carousel-item relative w-full">
          <Image
                  alt="Banner Image"
            width="677"
            height="1500"
            src="/banner/banner1.png"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <Link href="#slide3" className="btn btn-circle">
              ❮
            </Link>
            <Link href="#slide2" className="btn btn-circle">
              ❯
            </Link>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <Image
                  alt="Banner Image"
            width="677"
            height="1500"
            src="/banner/banner2.png"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <Link href="#slide1" className="btn btn-circle">
              ❮
            </Link>
            <Link href="#slide3" className="btn btn-circle">
              ❯
            </Link>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <Image
          alt="Banner Image"
            width="677"
            height="1500"
            src="/banner/banner3.png"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <Link href="#slide2" className="btn btn-circle">
              ❮
            </Link>
            <Link href="#slide1" className="btn btn-circle">
              ❯
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Banner;
