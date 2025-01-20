import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const navItems = [
  {
    href: "/camera",
    label: "Dashboard",
    icon: "/ic_dashboard.svg",
    activeIcon: "/ic_dashboard_active.svg",
  },
  {
    href: "/",
    label: "Info Pegawai",
    icon: "/ic_info_pegawai.svg",
    activeIcon: "/ic_dashboard_active.svg",
  },
  {
    href: "/lainnya",
    label: "Lainnya",
    icon: "/ic_lainnya.svg",
    activeIcon: "/ic_dashboard_active.svg",
  },
  {
    href: "/akun",
    label: "Akun",
    icon: "/ic_akun.svg",
    activeIcon: "/ic_akun_active.svg",
  },
];

const BottomNavigation = () => {
  const router = useRouter();

  return (
    <div className="fixed bottom-0 w-full h-16 bg-white flex justify-around items-center shadow-lg text-xs">
      {navItems.map((item) => (
        <Link key={item.href} href={item.href} passHref>
          <button
            className={`flex flex-col items-center ${
              router.pathname === item.href
                ? "text-primary font-bold"
                : "text-textGray"
            }`}
          >
            <Image
              src={router.pathname === item.href ? item.activeIcon : item.icon}
              alt={`${item.label} Icon`}
              width={24}
              height={24}
            />
            <span>{item.label}</span>
          </button>
        </Link>
      ))}
    </div>
  );
};

export default BottomNavigation;
