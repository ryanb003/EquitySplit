// RefiInputs.jsx
import React from "react";

const RefiInputs = ({ state, handlers }) => {
  const {
    homeValue,
    currentBalance,
    splitPercentage,
    newRate,
    loanTerm,
    closingCosts,
  } = state;
  const {
    setHomeValue,
    setCurrentBalance,
    setSplitPercentage,
    setNewRate,
    setLoanTerm,
    setClosingCosts,
  } = handlers;

  const inputStyle = {
    display: "block",
    width: "100%",
    padding: "8px",
    marginBottom: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  };
  const labelStyle = {
    display: "block",
    marginBottom: "4px",
    fontWeight: "bold",
  };
  const helperStyle = {
    display: "block",
    fontSize: "12px",
    color: "#64748b",
    marginBottom: "8px",
    marginTop: "-12px",
  };

  return (
    <div style={{ padding: "20px", borderRight: "1px solid #eee" }}>
      <h3 style={{ marginTop: 0 }}>Scenario Inputs</h3>

      <label style={labelStyle}>Current Appraised Value ($)</label>
      <input
        type="number"
        style={inputStyle}
        value={homeValue}
        onChange={(e) => setHomeValue(Number(e.target.value))}
      />
      <small style={helperStyle}>
        *A 6% deduction is automatically applied to account for hypothetical
        selling costs.
      </small>

      <label style={labelStyle}>Current 1st Mtg Balance ($)</label>
      <input
        type="number"
        style={inputStyle}
        value={currentBalance}
        onChange={(e) => setCurrentBalance(Number(e.target.value))}
      />

      <label style={labelStyle}>Equity Split to Departing Borrower (%)</label>
      <input
        type="number"
        style={inputStyle}
        value={splitPercentage}
        onChange={(e) => setSplitPercentage(Number(e.target.value))}
      />

      <label style={labelStyle}>Estimated Refi Closing Costs ($)</label>
      <input
        type="number"
        style={inputStyle}
        value={closingCosts}
        onChange={(e) => setClosingCosts(Number(e.target.value))}
      />

      <label style={labelStyle}>New Cash-Out Refi Rate (%)</label>
      <input
        type="number"
        style={inputStyle}
        value={newRate}
        step="0.125"
        onChange={(e) => setNewRate(Number(e.target.value))}
      />

      <label style={labelStyle}>New Loan Term (Months)</label>
      <select
        style={inputStyle}
        value={loanTerm}
        onChange={(e) => setLoanTerm(Number(e.target.value))}
      >
        <option value={360}>30 Year (360 mos)</option>
        <option value={240}>20 Year (240 mos)</option>
        <option value={180}>15 Year (180 mos)</option>
      </select>
    </div>
  );
};

export default RefiInputs;
