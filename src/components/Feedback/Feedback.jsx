import s from './Feedback.module.css';

export default function Feedback({ states, totalFeedback, positiveFeedback }) {
    const { good, neutral, bad } = states;
    return (
        <ul className={s.fdbList}>
            <li className={s.fdbGood}>Good: {good}</li>
            <li className={s.buttons}>Neutral: {neutral}</li>
            <li className={s.fdbBad}>Bad: {bad}</li>
            <li>Total: {totalFeedback}</li>
            <li className={s.fdbGood}>Positive: {positiveFeedback}%</li>
        </ul>
    )
}