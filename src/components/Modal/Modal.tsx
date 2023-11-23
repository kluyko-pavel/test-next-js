"use client";

import { useRouter } from "next/navigation";
import styles from "./Modal.module.scss";
import React from "react";

export const Modal = ({ text }: { text: string }) => {
  const router = useRouter();
  const handleCloseModal = () => {
    router.back();
  };
  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modal}>
        <h3 className={styles.modalTitle}>{text}</h3>
        <button className={styles.modalBtn} onClick={handleCloseModal}>
          Закрыть
        </button>
      </div>
    </div>
  );
};
