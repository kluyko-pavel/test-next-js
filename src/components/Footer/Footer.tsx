import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <address className={styles.contacts}>
          <div className={styles.contactsAuthor}>
            <span className={styles.contactsTitle}>Выполнил</span>
            <a className={styles.contactsData} href="https://t.me/pasha_kluyko">
              Клюйко Павел
            </a>
          </div>
          <div className={styles.contactsPhone}>
            <span className={styles.contactsTitle}>Телефон</span>
            <a className={styles.contactsData} href="tel:+375 (29) 178-91-83">
              +375 (29) 178-91-83
            </a>
          </div>
        </address>
      </div>
    </footer>
  );
};
