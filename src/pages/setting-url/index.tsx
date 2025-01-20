import Image from "next/image";
import Link from "next/link";

const SettingUrlPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white font-sans">
      <div className="p-6 max-w-md text-center mb-4">
        <div className="relative flex items-center justify-center mb-4">
          {/* Arrow Back */}
          <Link href="/masuk-akun" passHref>
            <Image
              src="/ic_arrow_back.svg"
              alt="Back"
              width={30}
              height={30}
              className="absolute left-0 bottom-0"
            />
          </Link>

          {/* Centered Title */}
          <p className="text-center font-medium text-lg">Setting URL</p>

          {/* Hidden Setting Icon */}
          <Image
            src="/ic_setting_outline.svg"
            alt="Settings"
            width={30}
            height={30}
            className="hidden"
          />
        </div>

        <div className="flex justify-center items-center mb-6">
          <Image
            src="/ic_setting_url.svg"
            alt="Logo"
            width={200}
            height={200}
          />
        </div>
        <p className="text-gray-600 mb-2 text-xs px-2">
          Masukan informasi host untuk merubah pengaturan. Contoh :
          https://www.pdamobile.com
        </p>
        <div className="px-4">
          <div className="mb-4">
            <label
              htmlFor="host-terdaftar"
              className="flex text-sm font-medium text-gray-700 mb-1"
            >
              Host Terdaftar
            </label>
            <input
              id="host-terdaftar"
              type="text"
              placeholder="https://www.example.com"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-red-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="host-baru"
              className="flex text-sm font-medium text-gray-700 mb-1"
            >
              Host Baru
            </label>
            <input
              id="host-baru"
              type="text"
              placeholder="https://www.example.com"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-red-500"
            />
          </div>
          <div className="flex flex-col items-start mb-6">
            <p className="text-gray-600 mb-2 text-xs px-2">Catatan :</p>
            <ul className="list-disc pl-1 mb-2">
              <li className="text-gray-600 text-xs">
                Tidak mengandung akhiran / (garis miring kanan).
              </li>
              <li className="text-gray-600 text-xs">
                Perubahan server aplikasi akan otomatis restart.
              </li>
            </ul>
          </div>
          <button className="w-full bg-primary text-white py-3 rounded-3xl font-medium hover:bg-red-600 transition">
            Perbarui
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingUrlPage;
