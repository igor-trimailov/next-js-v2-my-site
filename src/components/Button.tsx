"use client";
import styles from "./button.module.css";
import { FC } from "react";

interface ButtonInterface {
    text: string;
}

const Button: FC<ButtonInterface> = ({ text }) => {
    return <button className={styles.button}>{text}</button>;
};

export default Button;
