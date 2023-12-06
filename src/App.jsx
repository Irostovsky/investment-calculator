function App() {
  return (
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
  );
}

export default App;
