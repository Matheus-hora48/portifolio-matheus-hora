import { useState } from "react";
import Style from "./demoModal.module.css";
import Image from "next/image";

interface ModalProps {
  modalImages: string[];
  close: (value: any) => void;
}

const DemoModal = (props: ModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    if (currentIndex < props.modalImages.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
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
          {props.modalImages.map((image) => (
            <Image src={image} alt="" className={Style.image} />
          ))}
        </div>
        <button className={Style.prevImage}>{"<"}</button>
        <button className={Style.nextImage}>{">"}</button>
      </div>
    </div>
  );
};

export default DemoModal;
