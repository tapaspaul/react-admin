import { useState } from 'react';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import Card from '../../../UI/Card/Card';
const initialUserInput = {
    currentSavings: 10000,
    YearlySavings: 1200,
    expectedInterest: 7,
    investmentDuration: 10
}
const InvestmentForm = props => {
    const [userInput, setUserInput] = useState(initialUserInput);
    const submitHandler = e => {
        e.preventDefault();
        props.onCalculate(userInput);
    }
    const resetHandler = () => {
        setUserInput(initialUserInput);
    }
    const inputChangeHandler = (i, v) => {
        setUserInput(prevInput => {
            return{
                ...prevInput,
                [i]: v
            }
        });
    }
    return(
        <Card className="form-container">
            <form onSubmit={submitHandler}>
                <div className="form-group mb-4">
                    <div className="row">
                        <div className="col-md-6 mb-4 mb-md-0">
                            <label htmlFor="currentSavings" className="d-flex align-items-center gap-1 fw-medium mb-2">
                                <span className="d-block">Current Savings</span>
                                (<CurrencyRupeeOutlinedIcon className="fs-md" />)
                            </label>
                            <input type="number" onChange={e => inputChangeHandler('currentSavings', e.target.value)} id="currentSavings" className="form-control" placeholder="Enter The Amount" value={userInput.currentSavings} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="YearlySavings" className="d-flex align-items-center gap-1 fw-medium mb-2">
                                <span className="d-block">Yearly Savings</span>
                                (<CurrencyRupeeOutlinedIcon className="fs-md" />)
                            </label>
                            <input type="number" onChange={e => inputChangeHandler('YearlySavings', e.target.value)} id="YearlySavings" className="form-control" placeholder="Enter The Amount" value={userInput.YearlySavings} />
                        </div>
                    </div>
                </div>
                <div className="form-group mb-4">
                    <div className="row">
                        <div className="col-md-6 mb-4 mb-md-0">
                            <label htmlFor="expectedInterest" className="d-block fw-medium mb-2">Expected Interest ( % Per Year )</label>
                            <input type="number" onChange={e => inputChangeHandler('expectedInterest', e.target.value)} id="expectedInterest" className="form-control" placeholder="Enter The Amount" value={userInput.expectedInterest} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="investmentDuration" className="d-block fw-medium mb-2">Investment Duration (Years)</label>
                            <input type="number" onChange={e => inputChangeHandler('investmentDuration', e.target.value)} id="investmentDuration" className="form-control" placeholder="Enter Years" value={userInput.investmentDuration} />
                        </div>
                    </div>
                </div>
                <div className="action d-flex flex-wrap gap-3">
                    <button type="submit" className="btn btn-primary d-flex align-items-center gap-2">
                        <CalculateOutlinedIcon className="fs-lg" />
                        <span className="d-block">Calculate</span>
                    </button>
                    <button type="button" onClick={resetHandler} className="btn btn-gray-300">
                        <RefreshOutlinedIcon />
                    </button>
                </div>
            </form>
        </Card>
    );
}
export default InvestmentForm;