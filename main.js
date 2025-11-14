function deposit(balance, amount) {
  if (typeof balance !== "number" || typeof amount !== "number") {
    throw new Error("Balance and amount must be numbers");
  }
  if (amount < 0) {
    throw new Error("Amount cannot be negative");
  }
  return balance + amount;
}

function withdraw(balance, amount) {
  if (typeof balance !== "number" || typeof amount !== "number") {
    throw new Error("Balance and amount must be numbers");
  }
  if (amount < 0) {
    throw new Error("Amount cannot be negative");
  }
  if (amount > balance) {
    throw new Error("Insufficient funds");
  }
  return balance - amount;
}

module.exports = { deposit, withdraw };
