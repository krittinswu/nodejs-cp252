/**
 * Class representing a single Expense entry.
 * @class
 */
class Expense {
  /**
   * Create an expense entry.
   * @constructor
   * @param {string} date - The date of the transaction (e.g., "2026-02-24").
   * @param {number} income - The amount of money received.
   * @param {number} expense - The amount of money spent.
   * @param {string} detail - Description or notes about the transaction.
   */
  constructor(date, income, expense, detail) {
    this.date = date;
    this.income = parseFloat(income) || 0;
    this.expense = parseFloat(expense) || 0;
    this.detail = detail || '';
  }
}

/**
 * Class managing a collection of expenses.
 * @class
 */
class ExpenseModel {
  /**
   * Initialize the expense model with an empty list.
   */
  constructor() {
    this.expenses = [];
  }

  /**
   * Add a new expense object to the list.
   * @param {Expense} expense - An instance of the Expense class.
   */
  add(expense) {
    this.expenses.push(expense);
  }

  /**
   * Get all expense records from the list.
   * @returns {Expense[]} An array of Expense objects.
   */
  getAll() {
    return this.expenses;
  }

  /**
   * Calculate the total income from all records.
   * @returns {number} The sum of all income values.
   */
  getTotalIncome() {
    return this.expenses.reduce((sum, exp) => sum + exp.income, 0);
  }

  /**
   * Calculate the total expenses from all records.
   * @returns {number} The sum of all expense values.
   */
  getTotalExpense() {
    return this.expenses.reduce((sum, exp) => sum + exp.expense, 0);
  }

  /**
   * Calculate the remaining balance (Income - Expense).
   * @returns {number} The current money left.
   */
  getMoneyLeft() {
    return this.getTotalIncome() - this.getTotalExpense();
  }
}

module.exports = { Expense, ExpenseModel };