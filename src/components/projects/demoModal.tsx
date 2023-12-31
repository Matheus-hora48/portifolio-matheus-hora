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
    let newIndex = currentIndex + 1;
    if (newIndex >= props.modalImages.length) {
      newIndex = 0;
    }
    setCurrentIndex(newIndex);
  };

  const prevImage = () => {
    let newIndex = currentIndex - 1;
    if (newIndex < 0) {
      newIndex = props.modalImages.length - 1;
    }
    setCurrentIndex(newIndex);
  };

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
            alt="Images"
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
