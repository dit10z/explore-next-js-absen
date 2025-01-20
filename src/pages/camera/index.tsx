/* eslint-disable @next/next/no-img-element */
import { useRef, useState } from "react";
import Absen from "@/components/fragments/Absen";
import styles from "@/styles/CameraPage.module.css";
import BottomNavigation from "../../components/fragments/BottomNavigation";
import Head from "next/head";
import Image from "next/image";

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
    <div className="font-sans bg-gray-100 min-h-screen relative">
      <div className="bg-primary text-white rounded-b-2xl shadow-md p-6 mb-6 h-48 sm:flex sm:flex-col sm:items-center sm:justify-center lg:h-64">
        <div className="flex items-center mb-4 ">
          <div className="w-12 h-12 bg-white text-red-500 rounded-full flex items-center justify-center mr-4">
            <Image src="/logo.svg" alt="Logo" width={120} height={32} />
          </div>
          <div>
            <p className="text-xs">Halo, Selamat Pagi!</p>
            <h2 className="text-lg font-semibold">Dudung Supadung</h2>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center -mt-2">
          {/* Left Side: Icon with Text */}
          <div className="flex flex-row items-center">
            <Image
              src="/ic_jabatan_dashboard.svg"
              alt="Icon"
              width={16}
              height={16}
              className="mr-2" // Add spacing between the icon and the text
            />
            <p className="text-[13px]">Manager R&D Dept.</p>
          </div>

          {/* Divider */}
          <span className="mx-2 text-lg font-thin">|</span>

          {/* Right Side: Text */}
          <div className="flex flex-row items-center">
            <Image
              src="/ic_cabang_dashboard.svg"
              alt="Icon"
              width={16}
              height={16}
              className="mr-2" // Add spacing between the icon and the text
            />
            <p className="text-[13px]">Cab II Kota Bandung</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 sm:px-6 md:px-8 py-4">
        <Head>
          <title>Camera</title>
        </Head>

        {/* <h1 className="text-3xl font-bold underline">Kamera di Next.js</h1> */}
        <Absen
          date="Selasa, 27 Juni 2023"
          time="07:35:12"
          onAbsenMasuk={openModal}
          onAbsenPulang={openModal}
        />
        <h2 className="flex sm:justify-center text-sm sm:text-xl font-bold mt-4">
          Riwayat Absen Saat ini:
        </h2>

        <div className="mt-4 bg-white shadow-md rounded-lg p-4 w-full max-w-md mx-auto">
          <div className="flex items-center space-x-4 mb-4">
            <h2 className="text-sm sm:text-md font-semibold text-gray-800">
              Status Absensi:
            </h2>
            <span className="bg-muted text-textGray text-xs font-medium px-2.5 py-0.5 rounded-full">
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
                  className="rounded-lg w-16 h-16"
                />
              ) : (
                <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-muted text-textGray">
                  <span className="text-[8px]">No image captured</span>
                </div>
              )}
              <div className="ml-1 sm:ml-4 flex flex-col">
                <h3 className="text-[11px] sm:text-sm font-semibold text-textGray mb-1 sm:mb-2">
                  Jam Masuk:
                </h3>
                <p className="text-textGray">00:00:00</p>
              </div>
            </div>

            {/* Right side: Jam Keluar */}
            <div className="flex flex-row items-center w-48">
              {image ? (
                <img
                  src={image}
                  alt="Captured"
                  className="rounded-lg w-16 h-16"
                />
              ) : (
                <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-muted text-textGray">
                  <span className="text-[8px]">No image captured</span>
                </div>
              )}
              <div className="ml-1 sm:ml-4 flex flex-col">
                <h3 className="text-[11px] sm:text-sm font-semibold text-textGray mb-1 sm:mb-2">
                  Jam Keluar:
                </h3>
                <p className="text-textGray">00:00:00</p>
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
                <button
                  className="bg-red-500 text-white px-4 py-2"
                  onClick={takePhoto}
                >
                  Ambil Foto
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2"
                  onClick={closeModal}
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <BottomNavigation />
    </div>
  );
};

export default CameraPage;
