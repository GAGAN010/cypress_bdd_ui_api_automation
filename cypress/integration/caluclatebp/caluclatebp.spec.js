/// <reference types="cypress" />

import HomeLoanBorrowPageActions from "../../pageobjects/pageactions/HomeLoanBorrowPageActions";
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

const borrowPage = new HomeLoanBorrowPageActions();

Given("User is at Home loan borrowing power calculator | ANZ Page", () => {
  borrowPage.navigateToURL();
  borrowPage
    .getTitle()
    .should("eq", "Home loan borrowing power calculator | ANZ");
});

When(
  "User enter Your details section with {string}, {string} and {string}",
  (apptp, nod, proptp) => {
    borrowPage.setYourDetails(apptp, nod, proptp);
  }
);
And(
  "User enter Your earnings section with {string} and {string}",
  (income, othincome) => {
    borrowPage.setYourEarnings(income, othincome);
  }
);
And(
  "User enter Your expenses section with {string}, {string}, {string}, {string} and {string}",
  (livingexp, hmloanrepay, othloanrepay, othcommit, cclimit) => {
    borrowPage.setYourExpenses(
      livingexp,
      hmloanrepay,
      othloanrepay,
      othcommit,
      cclimit
    );
  }
);

And("User clicks on Work out how much I could borrow button", () => {
  borrowPage.clickCalcBorrowPower();
});

Then(
  "User should be able see Borrowing estimate of {string} on the page",
  (estimatedbp) => {
    borrowPage.verifyBorrowEstimate(estimatedbp);
  }
);
And("User should be able see Start over button on the page", () => {
  borrowPage.isStartOverButtonVisible();
});

When("User clicks on the Start over Button", () => {
  borrowPage.clickStartOverButton();
});

Then(
  "User should see Your details section as ApplicationType: Single, NumberofDependants : 0 and Property you would like to buy: Home to live in",
  () => {
    borrowPage.getDefaultYourDetails();
  }
);
And(
  "User should see - Your earnings section with Income and Other Income : 0",
  () => {
    borrowPage.getdefaultYourEarnings();
  }
);
And(
  "User should see - Your expenses section with LivingExpenses, CurrentHomeLoan, OtherLoan,OtherCommitments,CCLimits : 0",
  () => {
    borrowPage.getdefaultYourExpenses();
  }
);
