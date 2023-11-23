"use client";
import { useState } from "react";
import styles from "./CallForm.module.scss";
import { CustomCheckbox } from "../CustomCheckbox/CustomCheckbox";
import { CallBackService } from "@/services/callback.service";
import { useRouter } from "next/navigation";

export const CallForm = () => {
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();

  const handleSendUserData = async (e: any) => {
    e.preventDefault();
    setUserName("");
    setUserPhone("");
    setIsChecked(!isChecked);
    const formData: URLSearchParams = new URLSearchParams();
    formData.append("userName", userName);
    formData.append("userPhone", userPhone);
    await CallBackService.sendUserData(formData, router.push);
  };

  return (
    <div className={styles.wrapper}>
      <form
        className={styles.form}
        name="call-form"
        action="#"
        onSubmit={handleSendUserData}
      >
        <h3 className={styles.title}>Обратный звонок</h3>
        <div className={styles.inputsWrapper}>
          <input
            type="text"
            className={styles.input}
            name="name-input"
            placeholder="Ваше имя"
            required={true}
            value={userName}
            onChange={(e: any) => setUserName(e.target.value)}
          />
          <input
            type="tel"
            className={styles.input}
            name="phone-input"
            placeholder="Номер телефона"
            required={true}
            value={userPhone}
            onChange={(e: any) => setUserPhone(e.target.value)}
          />
        </div>
        <div className={styles.agreement}>
          <CustomCheckbox
            onChange={() => setIsChecked(!isChecked)}
            checked={isChecked}
          />
          <span className={styles.agreeMsg}>
            Согласие на обработку персональных данных
          </span>
        </div>
        <button disabled={!isChecked} className={styles.button} type="submit">
          Отправить →
        </button>
      </form>
    </div>
  );
};
