/// <reference types="cypress" />
import HomeLoanBorrowPageElements from "../pageelements/HomeLoanBorrowPageElements";

class HomeLoanBorrowPageActions {
  constructor() {
    globalThis.borrowpageelement = new HomeLoanBorrowPageElements();
  }
  navigateToURL() {
    cy.visit("/");
  }

  getTitle() {
    return cy.title();
  }

  getDefaultYourDetails() {
    borrowpageelement.applicationTypeSingle().should("be.checked");
    borrowpageelement.applicationTypeJoint().should("not.be.checked");
    borrowpageelement.noOfDependants().should("have.value", "0");
    borrowpageelement.borrowTypeHome().should("be.checked");
    borrowpageelement.borrowTypeInvest().should("not.be.checked");
  }

  setYourDetails(applicationType, noOfDep, propType) {
    if (applicationType == "Single") {
      borrowpageelement.applicationTypeSingle().click();
    } else if (applicationType == "Joint") {
      borrowpageelement.applicationTypeJoint().click();
    }
    borrowpageelement.noOfDependants().select(noOfDep);
    if (propType == "") {
      borrowpageelement.borrowTypeHome().click();
    } else if ((propType = "")) {
      borrowpageelement.borrowTypeInvest().click();
    }
  }

  getdefaultYourEarnings() {
    borrowpageelement.primaryIncome().should("have.value", "0");
    borrowpageelement.otherIncome().should("have.value", "0");
  }

  setYourEarnings(income, otherIncome) {
    borrowpageelement.primaryIncome().type(income);
    borrowpageelement.otherIncome().type(otherIncome);
  }
  setYourExpenses(livingexp, hmloanrepay, othloanrepay, othcommit, cclimit) {
    borrowpageelement.livingExpense().type(livingexp);
    borrowpageelement.cuurentHomeLoan().type(hmloanrepay);
    borrowpageelement.loanRepayment().type(othloanrepay);
    borrowpageelement.otherCommitments().type(othcommit);
    borrowpageelement.totalCCLimit().type(cclimit);
  }
  getdefaultYourExpenses() {
    borrowpageelement.livingExpense().should("have.value", "0");
    borrowpageelement.cuurentHomeLoan().should("have.value", "0");
    borrowpageelement.loanRepayment().should("have.value", "0");
    borrowpageelement.otherCommitments().should("have.value", "0");
    borrowpageelement.totalCCLimit().should("have.value", "0");
  }
  clickCalcBorrowPower() {
    borrowpageelement.borrowingPower().click();
  }
  clickStartOverButton() {
    borrowpageelement.startOver().click();
  }

  isStartOverButtonVisible() {
    borrowpageelement.startOver().should("be.visible");
  }
  verifyBorrowEstimate(estimatedbp) {
    borrowpageelement.borrowingEstimate().should("have.text", estimatedbp);
  }
}

export default HomeLoanBorrowPageActions;
