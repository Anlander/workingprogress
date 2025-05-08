import Link from "next/link";

const Custom404 = () => {
  return (
    <main>
      <div className="h-[60vh] flex flex-col justify-center items-center">
        <h1 className="text-[45px]">404 - Sidan finns inte</h1>
        <Link href="/">Gå till startsidan</Link>
      </div>
    </main>
  );
};

export default Custom404;
