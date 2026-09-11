"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import styles from "./contact-form.module.css";

export function ContactForm() {
  const [resumeName, setResumeName] = useState("");

  function handleResumeChange(event: ChangeEvent<HTMLInputElement>) {
    setResumeName(event.target.files?.[0]?.name ?? "");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = `Discovery call request from ${formData.get("name")}`;
    const body = [
      `Name: ${formData.get("name")}`,
      `Email: ${formData.get("email")}`,
      `Phone number: ${formData.get("phone")}`,
      `Organisation: ${formData.get("organisation")}`,
      "",
      "Message:",
      String(formData.get("message")),
      ...(resumeName
        ? ["", `Resume selected: ${resumeName}`, "Please attach this file before sending."]
        : []),
    ].join("\n");

    window.location.href = `mailto:swaddeep99@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section className={styles.section} id="contact" aria-labelledby="contact-title">
      <div className={styles.intro}>
        <div className={styles.headingRow}>
          <span className={styles.plane} aria-hidden="true" />
          <h2 id="contact-title">HOLA!</h2>
        </div>
        <p>Just a call away</p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.twoColumns}>
          <label>
            <span>Name <small className={styles.requirement}>Required</small></span>
            <input name="name" type="text" autoComplete="name" required />
          </label>
          <label>
            <span>Email id <small className={styles.requirement}>Required</small></span>
            <input name="email" type="email" autoComplete="email" required />
          </label>
        </div>
        <div className={styles.twoColumns}>
          <label>
            <span>Phone number <small className={styles.requirement}>Required</small></span>
            <input name="phone" type="tel" autoComplete="tel" required />
          </label>
          <label>
            <span>Organisation <small className={styles.requirement}>Required</small></span>
            <input name="organisation" type="text" autoComplete="organization" required />
          </label>
        </div>
        <label>
          <span>Write to us <small className={styles.requirement}>Required</small></span>
          <textarea name="message" rows={7} required />
        </label>
        <label className={styles.fileField}>
          <span>Drop your resume.</span>
          <span className={styles.fileControl}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m8.5 12.5 6.9-6.9a3 3 0 0 1 4.2 4.2l-9.2 9.2a5 5 0 0 1-7.1-7.1l9.2-9.2" />
            </svg>
            <span>{resumeName || "Attach file"}</span>
            <input
              name="resume"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleResumeChange}
            />
          </span>
          <small>PDF, DOC or DOCX. Attach it again in your email app.</small>
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
