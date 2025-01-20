import Image from "next/image";
import { useRouter } from "next/router";

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/masuk-akun");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white font-sans">
      <div className="p-6  max-w-md text-center">
        <div className="flex justify-center mb-4">
          <div className="w-24 h-24 rounded-full flex items-center justify-center">
            <Image src="/logo.svg" alt="Logo" width={160} height={160} />
          </div>
        </div>
        <h1 className="text-xl font-bold text-gray-800 mb-4">
          Selamat Datang di aplikasi Absen SIAP
        </h1>
        <div className="flex justify-center items-center mb-6">
          <Image
            src="/ic_splash_screen.svg"
            alt="Calendar Illustration"
            width={300}
            height={300}
          />
        </div>

        <p className="text-gray-600 mb-6">
          Silahkan masuk untuk menggunakan aplikasi absen SIAP.
        </p>
        <button
          onClick={handleLogin}
          className="w-full bg-primary text-white py-3 rounded-3xl font-medium hover:bg-red-600 transition"
        >
          Masuk
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
