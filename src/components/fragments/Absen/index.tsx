// components/Absen.tsx
import Image from "next/image";
import styles from "../../../styles/Absen.module.css";

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
    <div className="flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <div className="mb-6 flex justify-around items-center">
          <div className="text-lg font-bold">
            <p>{day},</p>
            <p>{fullDate}</p>
          </div>
          <div className="flex items-center space-x-2">
            {time.split(":").map((unit, index) => (
              <div key={index} className="flex items-center">
                <div className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg bg-gray-50">
                  <span className="text-lg font-bold">{unit}</span>
                </div>
                {index < 2 && <span className="text-lg font-bold mx-1">:</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Flex container for the images */}
        <div className="flex justify-around mb-4">
          <div className="flex flex-col items-center">
            <Image
              src="/ic_absen_masuk.svg"
              alt="Absen Masuk"
              width={150}
              height={64}
            />
            <button
              className="bg-red-500 text-white text-sm font-semibold px-8 py-4 rounded-full mt-2 transition-colors duration-300 hover:bg-red-600"
              onClick={onAbsenMasuk}
            >
              Absen Masuk
            </button>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="/ic_absen_keluar.svg"
              alt="Absen Keluar"
              width={150}
              height={64}
            />
            <button
              className="bg-gray-400 text-white text-sm font-semibold px-8 py-4 rounded-full mt-2 transition-colors duration-300 hover:bg-gray-600"
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
