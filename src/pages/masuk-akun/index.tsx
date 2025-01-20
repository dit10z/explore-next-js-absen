import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const MasukAkunPage = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/camera");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white font-sans">
      <div className="p-6 max-w-md text-center mb-4">
        <div className="flex flex-row justify-between items-center mb-4">
          <Link href="/login" passHref>
            <Image src="/ic_arrow_back.svg" alt="Logo" width={30} height={30} />
          </Link>
          <p>Masuk Akun</p>
          <Link href="/setting-url" passHref>
            <Image
              src="/ic_setting_outline.svg"
              alt="Logo"
              width={30}
              height={30}
            />
          </Link>
        </div>
        <div className="flex justify-center items-center mb-6">
          <Image src="/ic_masuk_akun.svg" alt="Logo" width={200} height={200} />
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Masuk ke Aplikasi
        </h1>
        <p className="text-gray-600 mb-2 text-sm px-2">
          Masukan informasi pengguna Anda di bawah ini untuk melanjutkan
        </p>
        <div className="px-4">
          <div className="mb-4">
            <label
              htmlFor="username"
              className="flex text-sm font-medium text-gray-700 mb-1"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Username"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-red-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="flex text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Masukan Password"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-red-500"
            />
          </div>
          <button
            onClick={handleLogin}
            className="w-full bg-primary text-white py-3 rounded-3xl font-medium hover:bg-red-600 transition"
          >
            Masuk
          </button>
          <p className="text-sm text-gray-500 mt-4">
            <a href="#" className="text-primary hover:underline">
              Lupa Password?
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MasukAkunPage;
