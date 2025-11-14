const assert = require("assert");
const { deposit, withdraw } = require("./main");

try {
  // 1. Deposit increases balance correctly
  assert.strictEqual(deposit(0, 100), 100);

  // 2. Withdraw decreases balance correctly
  assert.strictEqual(withdraw(100, 40), 60);

  // 3. Deposit negative amount → should throw
  assert.throws(() => deposit(50, -20), /negative/);

  // 4. Withdraw more than balance → should throw
  assert.throws(() => withdraw(20, 50), /Insufficient/);

  // 5. FORCE A FAILURE (assignment requirement)
  assert.strictEqual(deposit(10, 10), 999); // WRONG ON PURPOSE

  console.log("All tests passed!");
} catch (error) {
  console.error("Test failed:", error.message);
  process.exit(1);
}
