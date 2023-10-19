const InvestmentTable = props => {
    return(
        <div className="table-wrapper">
            <div className="table-responsive">
                <table className="table fs-sm fw-medium text-nowrap mb-0">
                    <thead>
                        <tr>
                            <th className="year bg-transparent border-0">Year</th>
                            <th className="total-savings bg-transparent border-0">Total Savings</th>
                            <th className="interest bg-transparent border-0">Interest (Year)</th>
                            <th className="total-interest bg-transparent border-0">Total Interest</th>
                            <th className="invested-capital bg-transparent border-0">Invested Capital</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.data.map( yearData => (
                            <tr key={yearData.year}>
                                <td className="year border-0">{yearData.year}</td>
                                <td className="total-savings border-0">{yearData.savingsEndOfTheYear}</td>
                                <td className="interest border-0">{yearData.yearlyInterest}</td>
                                <td className="total-interest border-0">{yearData.savingsEndOfTheYear - props.initialInvestment - yearData.yearlyContribution * yearData.year}</td>
                                <td className="invested-capital border-0">{props.initialInvestment + yearData.yearlyContribution * yearData.year}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default InvestmentTable;