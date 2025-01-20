import Image from "next/image";
import React from "react";

interface AttendanceStatusCardProps {
  status: string;
  image?: string | null;
  entryTime?: string;
}

const AttendanceStatusCard: React.FC<AttendanceStatusCardProps> = ({
  status = "Belum Absen",
  image,
  entryTime = "00:00:00",
}) => {
  return (
    <div className="mt-6 bg-white shadow-md rounded-lg p-6 w-full max-w-md mx-auto">
      {/* Status Header */}
      <div className="flex items-center space-x-4 mb-4">
        <h2 className="text-md font-semibold text-gray-800">Status Absensi:</h2>
        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-gray-300 dark:text-gray-600">
          {status}
        </span>
      </div>

      {/* Jam Masuk Section */}
      <div className="flex space-x-4 mt-6">
        <div className="flex flex-row items-center w-48">
          {image ? (
            <Image
              src={image}
              alt="Captured"
              className="rounded-lg w-20 h-20"
            />
          ) : (
            <div className="flex items-center justify-center w-20 h-20 rounded-lg bg-gray-200 text-gray-500">
              <span className="text-[8px]">No image captured</span>
            </div>
          )}
          <div className="ml-4 flex flex-col">
            <h3 className="text-sm font-semibold text-gray-800 mb-2">
              Jam Masuk:
            </h3>
            <p className="text-gray-600">{entryTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceStatusCard;
