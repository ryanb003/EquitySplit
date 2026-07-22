// BuyoutResults.jsx
import React from "react";

const BuyoutResults = ({ buyoutAmount, newLoanAmount, newPayment }) => {
  const formatCurrency = (num) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(num);

  const boxStyle = {
    backgroundColor: "#f8fafc",
    padding: "16px",
    borderRadius: "8px",
    marginBottom: "16px",
    border: "1px solid #e2e8f0",
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3 style={{ marginTop: 0 }}>The Bottom Line</h3>

      <div style={boxStyle}>
        <p style={{ margin: 0, fontSize: "14px", color: "#64748b" }}>
          Cash to Departing Borrower
        </p>
        <h2 style={{ margin: "4px 0 0 0", color: "#0f172a" }}>
          {formatCurrency(buyoutAmount)}
        </h2>
        <small style={{ color: "#64748b" }}>*Based on true net equity</small>
      </div>

      <div style={boxStyle}>
        <p style={{ margin: 0, fontSize: "14px", color: "#64748b" }}>
          New Refinance Loan Amount
        </p>
        <h2 style={{ margin: "4px 0 0 0", color: "#0f172a" }}>
          {formatCurrency(newLoanAmount)}
        </h2>
        <small style={{ color: "#64748b" }}>
          *Pays off current balance + buyout cash + closing costs
        </small>
      </div>

      <div
        style={{
          ...boxStyle,
          backgroundColor: "#eff6ff",
          borderColor: "#bfdbfe",
        }}
      >
        <p style={{ margin: 0, fontSize: "14px", color: "#1d4ed8" }}>
          New Monthly P&I Payment
        </p>
        <h1 style={{ margin: "4px 0 0 0", color: "#1e3a8a" }}>
          {formatCurrency(newPayment)}
        </h1>
      </div>
    </div>
  );
};

export default BuyoutResults;
