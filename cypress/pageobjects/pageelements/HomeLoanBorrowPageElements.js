/// <reference types="cypress" />
const APPLICATION_TYPE_SINGLE = "#application_type_single";
const APPLICATION_TYPE_JOINT = "#application_type_joint";
const NO_OF_DEPENDANTS = "select";
const BORROW_TYPE_HOME = "#borrow_type_home";
const BORROW_TYPE_INVEST = "#borrow_type_investment";
const PRIMARY_INCOME = "input[aria-labelledby=q2q1]";
const OTHER_INCOME = "input[aria-labelledby=q2q2]";
const LIVING_EXPENSE = "input[aria-labelledby=q3q1]";
const OTHER_LOAN_REPAYMENT = "input[aria-labelledby=q3q3]";
const CURR_HOME_LOAN_REPAYMENT = "input[aria-labelledby=q3q2]";
const OTHER_COMMITMENTS = "input[aria-labelledby=q3q4]";
const TOTAL_CC_LIMIT = "input[aria-labelledby=q3q5]";
const BORROW_CALC_BUTTON = "#btnBorrowCalculater";
const BORROWING_ESTIMATE = "#borrowResultTextAmount";
const START_OVER =
  ".borrow--homeloan--footer.clearfix div.borrow__result.text--white.clearfix div.box--right > button.start-over";

class HomeLoanBorrowPageElements {
  applicationTypeSingle() {
    return cy.get(APPLICATION_TYPE_SINGLE);
  }

  applicationTypeJoint() {
    return cy.get(APPLICATION_TYPE_JOINT);
  }

  noOfDependants() {
    return cy.get(NO_OF_DEPENDANTS);
  }
  borrowTypeHome() {
    return cy.get(BORROW_TYPE_HOME);
  }

  borrowTypeInvest() {
    return cy.get(BORROW_TYPE_INVEST);
  }

  primaryIncome() {
    return cy.get(PRIMARY_INCOME);
  }
  otherIncome() {
    return cy.get(OTHER_INCOME);
  }
  livingExpense() {
    return cy.get(LIVING_EXPENSE);
  }
  loanRepayment() {
    return cy.get(OTHER_LOAN_REPAYMENT);
  }
  cuurentHomeLoan() {
    return cy.get(CURR_HOME_LOAN_REPAYMENT);
  }
  otherCommitments() {
    return cy.get(OTHER_COMMITMENTS);
  }
  totalCCLimit() {
    return cy.get(TOTAL_CC_LIMIT);
  }

  borrowingPower() {
    return cy.get(BORROW_CALC_BUTTON);
  }

  borrowingEstimate() {
    return cy.get(BORROWING_ESTIMATE);
  }
  startOver() {
    return cy.get(START_OVER);
  }
}

export default HomeLoanBorrowPageElements;
