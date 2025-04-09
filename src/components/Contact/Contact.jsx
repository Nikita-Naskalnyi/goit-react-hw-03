import { IoIosContact } from "react-icons/io";
import { MdPhoneInTalk } from "react-icons/md";
import styles from "./Contact.module.css";

const Contact = ({ id, number, name, onDelete }) => {
  return (
    <li className={styles["contact-card"]}>
      <div className={styles["contact-details"]}>
        <div className={styles["contact-row"]}>
          <IoIosContact className={styles["contact-icon"]} />
          <span className={styles["contact-name"]}>{name}</span>
        </div>
        <div className={styles["contact-row"]}>
          <MdPhoneInTalk className={styles["contact-icon"]} />
          <a href={`tel:${number}`} className={styles["contact-number"]}>
            {number}
          </a>
        </div>
      </div>
      <button
        onClick={() => onDelete(id)}
        type="button"
        aria-label="delete button"
        className={styles["delete-btn"]}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
