// LoanMath.js

export const calculateBuyout = (value, balance, splitPercentage) => {
  // Apply a 6% haircut to simulate selling costs (realtor commissions, etc.)
  const adjustedValue = value * 0.94;
  const equity = adjustedValue - balance;

  return equity > 0 ? equity * (splitPercentage / 100) : 0;
};

export const calculatePayment = (principal, annualRate, months) => {
  if (principal <= 0 || annualRate <= 0 || months <= 0) return 0;
  const r = annualRate / 100 / 12;
  const n = months;
  return principal * ((r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
};
