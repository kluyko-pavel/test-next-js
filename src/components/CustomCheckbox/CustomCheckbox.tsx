import { ChangeEventHandler } from "react";
import styles from "./CustomCheckbox.module.scss";
import Image from "next/image";

export const CustomCheckbox = ({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <label
      className={styles.customCheckbox}
      onClick={(e: any) => e.stopPropagation()}
    >
      <input
        className={styles.input}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <Image className={styles.customTick} src="/tick.svg" fill alt="tick" />
      <Image
        className={styles.customCheckmark}
        src="/marker.svg"
        fill
        alt="checkmark"
      />
    </label>
  );
};
