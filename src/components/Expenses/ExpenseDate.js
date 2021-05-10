import './ExpenseDate.css';

const ExpenseDate = (props) => {
    const day = props.date.toLocaleDateString('en-US',{day:'2-digit'})
    const month = props.date.toLocaleDateString('en-US',{month:'long'});
    const year = props.date.getFullYear();

    return(
        <div className='expense-date'>
            <p className='expense-date__month'>{month}</p>
            <p className='expense-date__day'>{day}</p>
            <p className='expense-date__year'>{year}</p>
        </div>
    );
}


export default ExpenseDate;