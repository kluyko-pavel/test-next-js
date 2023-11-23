import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.logo}>LOGO</div>
      </div>
    </header>
  );
};
