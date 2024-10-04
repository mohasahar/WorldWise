import styles from "./footer.module.css";
function Footer() {
  return (
    <div className={styles.footer}>
      <p className={styles.copyright}>
        &copy; Copyrights{new Date().getFullYear()} WorlWise Inc
      </p>
    </div>
  );
}

export default Footer;
