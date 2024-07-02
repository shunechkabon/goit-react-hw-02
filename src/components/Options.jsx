import s from './Options.module.css';

const Options = ({ updateFeedback, totalFeedback, onReset }) => {
    return (
        <div className={s.options}>
            <button onClick={() => updateFeedback('good')}>Good</button>
            <button onClick={() => updateFeedback('neutral')}>Neutral</button>
            <button onClick={() => updateFeedback('bad')}>Bad</button>
            {totalFeedback > 0 && <button onClick={onReset}>Reset</button>}
        </div>
    );
};

export default Options;