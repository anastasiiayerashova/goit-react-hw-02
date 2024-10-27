import s from './Options.module.css';
import { CiFaceSmile } from "react-icons/ci";
import { PiSmileySad, PiSmileyMelting } from "react-icons/pi";

export default function Options({ updateFeedback, resetFeedback, showFeedback}) {
    return (
        <div className={s.optionsDiv}>
            <button className={s.buttonG} onClick={() => {updateFeedback("good")}} >Good <CiFaceSmile className={s.smile} /></button>
            <button className={s.buttonN} onClick={() => { updateFeedback("neutral") }}>Neutral <PiSmileyMelting className={s.smile} /></button>
            <button className={s.buttonB} onClick={() => { updateFeedback("bad") }}>Bad <PiSmileySad className={s.smile} /></button>
            {showFeedback === true ? <button className={s.buttonR} onClick={resetFeedback}>Reset</button> : null}
        </div>
    )
}