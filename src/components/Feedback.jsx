import s from './Feedback.module.css';

const Feedback = ({ feedback, total, positivePercentage }) => { 
    return (
        <div className={s.feedback}>
            <p style={{color: 'green'}}>Good: {feedback.good}</p>
            <p style={{ color: 'blue' }}>Neutral: {feedback.neutral}</p>
            <p style={{color: 'red'}}>Bad: {feedback.bad}</p>
            <p>Total: {total}</p>
            <p>Positive: {positivePercentage}%</p>
    </div>
    );
};

export default Feedback;