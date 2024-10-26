import s from './Description.module.css';

export default function Description() {
    return (
        <div className={s.descDiv}>
            <h1 className={s.descTitle}>Sip Happens Café</h1>
            <p className={s.descText}>Please leave your feedback about our service by selecting one of the options below.</p>
        </div>
    )
}