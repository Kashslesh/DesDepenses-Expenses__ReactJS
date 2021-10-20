import './ExpenseDate.css';
function ExpenseDate(props) {
  // const language = navigator.language;
  // const month = props.date.toLocaleString(language, { month: 'long' });
  // const day = props.date.toLocaleString(language, { day: '2-digit' });
  // const year = props.date.getFullYear();
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}
export default ExpenseDate;
