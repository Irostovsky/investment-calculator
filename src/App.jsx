import { formatter } from "./util/investment";

function App() {
  return (
    <>
      <div id="user-input">
        <div className="input-group">
          <div>
            <label>Initial Investment</label>
            <input type="number" min="0" />
          </div>
          <div>
            <label>Annual Investment</label>
            <input type="number" min="0" />
          </div>
        </div>
        <div className="input-group">
          <div>
            <label>Expected Return</label>
            <input type="number" min="0" />
          </div>
          <div>
            <label>Duration</label>
            <input type="number" min="0" />
          </div>
        </div>
      </div>
      <table id="result" className="center">
        <thead>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{formatter.format(1000)}</td>
            <td>{formatter.format(1000)}</td>
            <td>{formatter.format(1000)}</td>
            <td>{formatter.format(1000)}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App;
