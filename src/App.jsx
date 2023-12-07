import { useState } from "react";
import { calculateInvestmentResults, formatter } from "./util/investment";

function App() {
  const [userInvestment, setUserInvestment] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleInputChange = (event, key) => {
    setUserInvestment((previousUserInvestment) => {
      return {
        ...previousUserInvestment,
        [key]: parseFloat(event.target.value),
      };
    });
  };

  const result = calculateInvestmentResults(userInvestment);
  return (
    <>
      <div id="user-input">
        <div className="input-group">
          <div>
            <label>Initial Investment</label>
            <input
              type="number"
              min="0"
              value={userInvestment.initialInvestment}
              onChange={(event) =>
                handleInputChange(event, "initialInvestment")
              }
            />
          </div>
          <div>
            <label>Annual Investment</label>
            <input
              type="number"
              min="0"
              value={userInvestment.annualInvestment}
              onChange={(event) => handleInputChange(event, "annualInvestment")}
            />
          </div>
        </div>
        <div className="input-group">
          <div>
            <label>Expected Return</label>
            <input
              type="number"
              min="0"
              value={userInvestment.expectedReturn}
              onChange={(event) => handleInputChange(event, "expectedReturn")}
            />
          </div>
          <div>
            <label>Duration</label>
            <input
              type="number"
              min="0"
              value={userInvestment.duration}
              onChange={(event) => handleInputChange(event, "duration")}
            />
          </div>
        </div>
      </div>
      <table id="result" className="center">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {result.map((item) => {
            return (
              <tr key={item.year}>
                <td>{item.year}</td>
                <td>{formatter.format(item.valueEndOfYear)}</td>
                <td>{formatter.format(item.interest)}</td>
                <td>{formatter.format(item.totalInterest)}</td>
                <td>{formatter.format(item.investedCapital)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
