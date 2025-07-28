import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <section className="mt-15 bg-white py-20">
      <div className="flex flex-col justify-center items-center">
        <Image src="/error.png" alt="Error" width={358} height={444} />

          <Link href="/" className="btn btn-outline rounded-xl text-xl bg-[#CAEB66] px-8 py-4 border-0 min-h-[56]"> Go Home</Link>
      </div>
    </section>
  );
};

export default NotFound;
