/* eslint-disable @next/next/no-img-element */
import { useRef, useState } from "react";
import Absen from "@/components/fragments/Absen";
import styles from "@/styles/CameraPage.module.css";
import { Home, People, MoreVert, AccountCircle } from "@mui/icons-material";

const CameraPage = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    } catch (error) {
      console.error("Error accessing the camera:", error);
    }
  };

  const takePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
      if (context) {
        context.drawImage(videoRef.current, 0, 0, 640, 480);
        const dataUrl = canvasRef.current.toDataURL("image/png");
        setImage(dataUrl);
        setIsModalOpen(false); // Close the modal after capturing the photo
        stopCamera(); // Stop the camera after capturing the photo
      }
    }
  };

  const stopCamera = () => {
    if (videoRef.current?.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
    startCamera();
  };

  const closeModal = () => {
    setIsModalOpen(false);
    stopCamera();
  };

  return (
    <div className="font-sans">
      {/* <h1 className="text-3xl font-bold underline">Kamera di Next.js</h1> */}
      <Absen
        date="Selasa, 27 Juni 2023"
        time="07:35:12"
        onAbsenMasuk={openModal}
        onAbsenPulang={openModal}
      />
      <h2 className="flex justify-center text-xl font-bold my-4">
        Riwayat Absen Saat ini:
      </h2>

      <div className="mt-6 bg-white shadow-md rounded-lg p-6 w-full max-w-md mx-auto">
        <div className="flex items-center space-x-4 mb-4">
          <h2 className="text-md font-semibold text-gray-800">
            Status Absensi:
          </h2>
          <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-gray-300 dark:text-gray-600">
            Belum Absen
          </span>
        </div>
        <div className="flex space-x-4 mt-6">
          {/* Left side: Jam Masuk */}
          <div className="flex flex-row items-center w-48">
            {image ? (
              <img
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
              <p className="text-gray-600">00:00:00</p>
            </div>
          </div>

          {/* Right side: Jam Keluar */}
          <div className="flex flex-row items-center w-48">
            {image ? (
              <img
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
                Jam Keluar:
              </h3>
              <p className="text-gray-600">00:00:00</p>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <video ref={videoRef} width="640" height="480" autoPlay></video>
            <canvas
              ref={canvasRef}
              width="640"
              height="480"
              style={{ display: "none" }}
            ></canvas>
            <div className={styles.modalButtons}>
              <button onClick={takePhoto}>Ambil Foto</button>
              <button onClick={closeModal}>Tutup</button>
            </div>
          </div>
        </div>
      )}
      <div className="fixed bottom-0 w-full h-16 bg-white flex justify-around items-center shadow-lg">
        <button className="text-gray-600 font-semibold flex flex-col items-center">
          <Home className="text-gray-600" />
          Dashboard
        </button>
        <button className="text-gray-600 font-semibold flex flex-col items-center">
          <People className="text-gray-600" />
          Info Pegawai
        </button>
        <button className="text-gray-600 font-semibold flex flex-col items-center">
          <MoreVert className="text-gray-600" />
          Lainnya
        </button>
        <button className="text-gray-600 font-semibold flex flex-col items-center">
          <AccountCircle className="text-gray-600" />
          Akun
        </button>
      </div>
    </div>
  );
};

export default CameraPage;
