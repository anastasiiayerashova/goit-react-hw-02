import s from './Options.module.css';

export default function Options({states, updateGood}) {
   console.log(states.good)
    return (
        <div className={s.optionsDiv}>
            <button className={s.buttons} onClick={updateGood}>Good: {states.good}</button>
            <button className={s.buttons}>Neutral: {states.neutral}</button>
            <button className={s.buttons}>Bad: {states.bad}</button>
        </div>
    )
}