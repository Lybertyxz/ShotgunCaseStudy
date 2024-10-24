import Link from "next/link";
import Image from "next/image";

interface HeaderProps {
  title: string;
  picture_url: string;
  linkpage: {
    href: string;
    label: string;
  };
  subinfo?: string;
}

export default function Header({
  title,
  picture_url,
  linkpage,
  subinfo,
}: HeaderProps) {
  return (
    <div className="relative h-72 bg-gradient-to-b from-[#22B4DC] to-black flex items-center px-6 space-x-6">
      <div className="relative w-40 h-40">
        <Image
          src={picture_url}
          alt="Cover"
          layout="fill"
          objectFit="cover"
          className="rounded-md shadow-md"
        />
      </div>
      <div className="flex-1 text-white">
        <h1 className="text-5xl font-bold mb-2">{title}</h1>
        {subinfo && <p className="text-sm mb-2">{subinfo}</p>}
        <Link href={linkpage.href}>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition duration-300">
            {linkpage.label}
          </button>
        </Link>
      </div>
    </div>
  );
}
