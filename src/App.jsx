import { useState } from "react";
import { calculateInvestmentResults, formatter } from "./util/investment";
import UserInput from "./components/UserInput";

function App() {
  const [userInvestment, setUserInvestment] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleInputChange = (name, value) => {
    setUserInvestment((previousUserInvestment) => {
      return {
        ...previousUserInvestment,
        [name]: value,
      };
    });
  };

  const isValid = !isNaN(
    Object.values(userInvestment).reduce((sum, item) => sum + item, 0)
  );
  const result = calculateInvestmentResults(userInvestment);
  return (
    <>
      <div id="user-input">
        <div className="input-group">
          <UserInput
            label="Initial Investment"
            name="initialInvestment"
            value={userInvestment.initialInvestment}
            onChangeHandler={handleInputChange}
          />
          <UserInput
            label="Annual Investment"
            name="annualInvestment"
            value={userInvestment.annualInvestment}
            onChangeHandler={handleInputChange}
          />
        </div>
        <div className="input-group">
          <UserInput
            label="Expected Return"
            name="expectedReturn"
            value={userInvestment.expectedReturn}
            onChangeHandler={handleInputChange}
          />
          <UserInput
            label="Duration"
            name="duration"
            value={userInvestment.duration}
            onChangeHandler={handleInputChange}
          />
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
          {isValid &&
            result.map((item) => {
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
