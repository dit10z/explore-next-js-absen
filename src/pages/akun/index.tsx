import BottomNavigation from "@/components/fragments/BottomNavigation";
import Image from "next/image";

const AkunPage = () => {
  return (
    <div className="font-sans">
      {/* Header Section */}
      <div className="bg-primary text-white rounded-b-2xl shadow-md p-6 mb-6 h-64 flex flex-col items-center justify-center lg:h-64">
        <div className="flex flex-col items-center space-y-2">
          <p className="text-lg font-semibold">Informasi Akun</p>
          <Image
            src="/ic_akun_avatar.svg"
            alt="Profile Avatar"
            width={100}
            height={100}
            className="rounded-full"
          />
          <p className="text-lg font-medium">Dadang Supardi</p>
        </div>
      </div>

      {/* Settings Section */}
      <div className="absolute bg-gray-100 w-full h-[50%] p-6 rounded-2xl -mt-12">
        <p className="text-lg font-semibold text-gray-700 mb-4">Pengaturan</p>
        <div className="space-y-3">
          <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow">
            <div className="flex items-center space-x-3">
              <Image
                src="/ic_create-outline.svg"
                alt="Edit Icon"
                width={24}
                height={24}
              />
              <p className="text-sm font-medium text-gray-800">Ubah Password</p>
            </div>
          </div>
          <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow">
            <div className="flex items-center space-x-3">
              <Image
                src="/ic_help-circle-outline.svg"
                alt="About Icon"
                width={24}
                height={24}
              />
              <p className="text-sm font-medium text-gray-800">Tentang</p>
            </div>
          </div>
        </div>
        {/* Logout Button */}
        <div className="flex justify-center mt-24">
          <button className="w-11/12 bg-primary text-white py-3 rounded-3xl font-medium hover:bg-red-600 transition">
            Keluar Akun
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};

export default AkunPage;
