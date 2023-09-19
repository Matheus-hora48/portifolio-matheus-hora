import { useState, useEffect } from "react";
import Style from "./demoModal.module.css";
import Image from "next/image";

interface ModalProps {
  modalImages: string[];
  close: (value: any) => void;
}

const DemoModal = (props: ModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % props.modalImages.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + props.modalImages.length) % props.modalImages.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={Style.modalContainer}>
      <div className={Style.modalContent}>
        <button
          className={Style.closeButton}
          onClick={() => props.close(false)}
        >
          X
        </button>
        <div className={Style.imagesContainer}>
          <Image
            src={props.modalImages[currentIndex]}
            alt=""
            className={Style.image}
          />
        </div>
        <button className={Style.prevImage} onClick={prevImage}>
          {"<"}
        </button>
        <button className={Style.nextImage} onClick={nextImage}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default DemoModal;
