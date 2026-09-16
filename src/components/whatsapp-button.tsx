import styles from "./whatsapp-button.module.css";

export function WhatsAppButton() {
  return (
    <a
      className={styles.button}
      href="https://wa.me/message/4BRHRNCVOSPFK1"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Swaddeep on WhatsApp"
    >
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path
          d="M16 3.5a12.5 12.5 0 0 0-10.9 18.62L3.5 28.5l6.55-1.55A12.5 12.5 0 1 0 16 3.5Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="m10.25 9.15-1.4 1.15c-.45.38-.6 1-.43 1.55a15.2 15.2 0 0 0 9.73 9.73c.55.17 1.17.02 1.55-.43l1.15-1.4-3.55-2.1-1.45 1.43a12.7 12.7 0 0 1-5.2-5.2l1.43-1.45-2.1-3.55Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}
