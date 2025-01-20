// components/Absen.tsx
import Image from "next/image";

interface AbsenProps {
  date: string;
  time: string;
  onAbsenMasuk: () => void;
  onAbsenPulang: () => void;
}

const Absen: React.FC<AbsenProps> = ({
  date,
  time,
  onAbsenMasuk,
  onAbsenPulang,
}) => {
  const [day, fullDate] = date.split(", ");

  return (
    <div className="flex items-center justify-center -mt-28 sm:mt-0">
      <div className="bg-white shadow-md rounded-xl p-4 w-full max-w-md">
        <div className="mb-6 flex justify-around items-center">
          <div className="text-md sm:text-lg font-bold">
            <p>{day},</p>
            <p>{fullDate}</p>
          </div>
          <div className="flex items-center space-x-2">
            {time.split(":").map((unit, index) => (
              <div key={index} className="flex items-center">
                <div className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg bg-gray-50">
                  <span className="text-xl sm:text-lg font-normal">{unit}</span>
                </div>
                {index < 2 && (
                  <span className="text-xl sm:text-lg font-bold mx-1">:</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Flex container for the images */}
        <div className="flex justify-around">
          <div className="flex flex-col items-center space-y-4">
            <Image
              src="/ic_absen_masuk.svg"
              alt="Absen Masuk"
              width={120}
              height={64}
            />
            <button
              className="bg-primary text-white text-xs sm:text-sm font-semibold px-8 py-4 rounded-full mt-2 transition-colors duration-300 hover:bg-red-600"
              onClick={onAbsenMasuk}
            >
              Absen Masuk
            </button>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <Image
              src="/ic_absen_keluar.svg"
              alt="Absen Keluar"
              width={120}
              height={64}
            />
            <button
              className="bg-muted text-textGray text-xs sm:text-sm font-semibold px-8 py-4 rounded-full mt-2 transition-colors duration-300 "
              onClick={onAbsenPulang}
            >
              Absen Pulang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Absen;
