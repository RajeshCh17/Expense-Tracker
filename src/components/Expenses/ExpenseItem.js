import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate'

const ExpenseItem = (props) => {
    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
            <h1>{props.title}</h1>
            <p className='expense-item__price'>Amount: {props.amount} INR</p>
            </div>
        </div>
    );
}


export default ExpenseItem;