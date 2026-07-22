import React, { useState } from "react";
import RefiInputs from "./RefiInputs";
import BuyoutResults from "./BuyoutResults";
import { calculateBuyout, calculatePayment } from "./LoanMath";

export default function App() {
  const [homeValue, setHomeValue] = useState(450000);
  const [currentBalance, setCurrentBalance] = useState(250000);
  const [splitPercentage, setSplitPercentage] = useState(50);
  const [newRate, setNewRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(360);
  const [closingCosts, setClosingCosts] = useState(3500);

  const buyoutAmount = calculateBuyout(
    homeValue,
    currentBalance,
    splitPercentage
  );
  const newLoanAmount = currentBalance + buyoutAmount + closingCosts;
  const newPayment = calculatePayment(newLoanAmount, newRate, loanTerm);

  const handlers = {
    setHomeValue,
    setCurrentBalance,
    setSplitPercentage,
    setNewRate,
    setLoanTerm,
    setClosingCosts,
  };

  return (
    <div
      style={{
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        maxWidth: "900px",
        margin: "40px auto",
        backgroundColor: "#ffffff",
        boxShadow:
          "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      {/* Updated Header Section */}
      <div
        style={{
          backgroundColor: "#004280",
          backgroundImage: "linear-gradient(to right, #004280, #0059b3)",
          color: "white",
          padding: "24px 32px",
          borderBottom: "4px solid #002e59",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: "24px",
            fontWeight: "600",
            letterSpacing: "-0.5px",
          }}
        >
          Equity Buyout Analyzer
        </h2>
      </div>

      {/* Main Content Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "450px",
          backgroundColor: "#f8fafc",
        }}
      >
        <RefiInputs
          state={{
            homeValue,
            currentBalance,
            splitPercentage,
            newRate,
            loanTerm,
            closingCosts,
          }}
          handlers={handlers}
        />
        <BuyoutResults
          buyoutAmount={buyoutAmount}
          newLoanAmount={newLoanAmount}
          newPayment={newPayment}
        />
      </div>
    </div>
  );
}
