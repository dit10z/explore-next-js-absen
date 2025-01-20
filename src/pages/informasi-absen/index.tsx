import Image from "next/image";
import Link from "next/link";

const InformasiAbsenPage = () => {
  return (
    <div className="font-sans relative h-screen bg-gray-100">
      {/* Header Section */}
      <div className="bg-primary text-white rounded-b-2xl shadow-md p-6 h-52 relative">
        {/* Back Arrow Section */}
        <div className="absolute top-4 left-4 flex items-center space-x-4">
          <Link href="/login" passHref>
            <Image
              src="/ic_arrow_back_white.svg"
              alt="Back"
              width={30}
              height={30}
            />
          </Link>
          <p className="text-lg font-semibold">Informasi Absen</p>
        </div>

        {/* Left-Aligned Content */}
        <div className="flex flex-col items-start justify-center h-32">
          <div className="flex flex-row items-center space-x-4">
            {/* Profile Avatar */}
            <Image
              src="/logo.svg"
              alt="Profile Avatar"
              width={60}
              height={60}
            />

            {/* Name and NIP in Column */}
            <div className="flex flex-col">
              <p className="text-lg font-medium">Dudung Supadung</p>
              <p className="text-sm text-gray-100">NIP : 100032659</p>
            </div>
          </div>
        </div>
      </div>

      {/* Attendance History Section */}
      <div className="absolute bg-gray-100 w-full h-[70%] p-6 rounded-t-2xl -mt-16">
        <p className="text-lg font-semibold text-gray-700 mb-4">
          Riwayat Absen
        </p>

        {/* Filter Section */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center bg-gray-100 rounded-lg p-2 shadow-sm">
            <Image
              src="/ic_calendar.svg"
              alt="Calendar Icon"
              width={20}
              height={20}
            />
            <p className="text-sm ml-2">November 2024</p>
          </div>
          <button className="bg-gray-100 p-2 rounded-lg shadow-sm">
            <Image
              src="/ic_filter-filled.svg"
              alt="Filter Icon"
              width={20}
              height={20}
            />
          </button>
        </div>

        {/* Attendance Cards */}
        <div className="space-y-4">
          {[1, 2, 3].map((item, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4">
              {/* Status Absensi */}
              <div className="space-y-2 mb-4">
                {/* Tanggal */}
                <div className="flex items-center">
                  <h2 className="text-sm font-semibold text-gray-800 w-32">
                    Tanggal
                  </h2>
                  <span className="text-sm font-semibold text-gray-800">
                    :{" "}
                  </span>
                  <span className="text-sm ml-3 font-semibold text-gray-800">
                    23 Juni 2023
                  </span>
                </div>

                {/* Status Absensi */}
                <div className="flex items-center">
                  <h2 className="text-sm font-semibold text-gray-800 w-32">
                    Status Absensi
                  </h2>
                  <span className="text-sm font-semibold text-gray-800">
                    :{" "}
                  </span>
                  <span className="bg-gray-200 text-gray-600 text-xs font-medium px-2.5 py-0.5 rounded-full ml-2">
                    Belum Absen
                  </span>
                </div>
              </div>

              {/* Attendance Details */}
              <div className="flex space-x-4">
                {/* Jam Masuk */}
                <div className="flex items-center w-48">
                  <div className="w-16 h-16 rounded-lg bg-gray-200 text-gray-600 flex items-center justify-center">
                    <span className="text-xs">No image</span>
                  </div>
                  <div className="ml-2">
                    <h3 className="text-[11px] font-semibold text-gray-800">
                      Jam Masuk:
                    </h3>
                    <p className="text-gray-600">00:00:00</p>
                  </div>
                </div>

                {/* Jam Keluar */}
                <div className="flex items-center w-48">
                  <div className="w-16 h-16 rounded-lg bg-gray-200 text-gray-600 flex items-center justify-center">
                    <span className="text-xs">No image</span>
                  </div>
                  <div className="ml-2">
                    <h3 className="text-[11px] font-semibold text-gray-800">
                      Jam Keluar:
                    </h3>
                    <p className="text-gray-600">00:00:00</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InformasiAbsenPage;
