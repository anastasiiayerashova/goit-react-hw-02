import { VscOpenPreview } from "react-icons/vsc";
import s from "./Notification.module.css";

export default function Notification() {
    return <p className={s.text}>No feedback yet...<VscOpenPreview className={s.book}/></p>
}