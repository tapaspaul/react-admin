import React from 'react';
import { useState } from 'react';
import InvestmentForm from './InvestmentForm/InvestmentForm';
import InvestmentTable from './InvestmentTable/InvestmentTable';
const InvestmentCalculator = props => {
    const [results, setResults] = useState(null);
    const calculateHandler = userInput => {
        const yearlyData = [];
        let currentSavings = userInput.currentSavings;
        const YearlySavings = userInput.YearlySavings;
        const expectedInterest = userInput.expectedInterest / 100;
        const investmentDuration = userInput.investmentDuration;
        for(let i = 0; i < investmentDuration; i++ ){
            const yearlyInterest = currentSavings * expectedInterest;
            currentSavings += yearlyInterest + YearlySavings;
            yearlyData.push({
                year: i + 1,
                yearlyInterest: yearlyInterest,
                savingsEndOfTheYear : currentSavings,
                yearlyContribution: YearlySavings
            });
        }
        setResults(yearlyData);
    }
    return(
        <div className="container-fluid px-3 px-md-4 py-3">
            <InvestmentForm onCalculate={calculateHandler} />
            { !results && <p className="alert d-table fs-md fw-medium px-3 py-2 bg-white mx-auto shadow border-0">No Investmeny Calculated yet.</p> }
            { results && <InvestmentTable data={results} initialInvestment={results.currentSavings} /> }
        </div>
    );
}
export default InvestmentCalculator;