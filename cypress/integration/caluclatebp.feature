Feature: Caluclating Home Loan Borrow Power

    Background:
        Given User is at Home loan borrowing power calculator | ANZ Page

    Scenario Outline: Get Home Loan Borrow Power
        When User enter Your details section with "<ApplicationType>", "<NumberofDependants>" and "<Property>"
        And User enter Your earnings section with "<Income>" and "<OtherIncome>"
        And User enter Your expenses section with "<LivingExpenses>", "<CurrentHomeLoan>", "<OtherLoan>", "<OtherCommitments>" and "<CCLimits>"
        And User clicks on Work out how much I could borrow button
        Then User should be able see Borrowing estimate of "<EstimatedBP>" on the page
        And User should be able see Start over button on the page

        Examples:
            | ApplicationType | NumberofDependants | Property        | Income | OtherIncome | LivingExpenses | CurrentHomeLoan | OtherLoan | OtherCommitments | CCLimits | EstimatedBP |
            | Single          | 0                  | Home to live in | 80000  | 10000       | 500            | 0               | 100       | 0                | 10000    | $500,000    |

    Scenario Outline: Verify wether Start over button resets the form for a Single Applicant
        When User enter Your details section with "<ApplicationType>", "<NumberofDependants>" and "<Property>"
        And User enter Your earnings section with "<Income>" and "<OtherIncome>"
        And User enter Your expenses section with "<LivingExpenses>", "<CurrentHomeLoan>", "<OtherLoan>", "<OtherCommitments>" and "<CCLimits>"
        And User clicks on Work out how much I could borrow button
        Then User should be able see Start over button on the page
        When User clicks on the Start over Button
        Then User should see Your details section as ApplicationType: Single, NumberofDependants : 0 and Property you would like to buy: Home to live in
        And User should see - Your earnings section with Income and Other Income : 0
        And User should see - Your expenses section with LivingExpenses, CurrentHomeLoan, OtherLoan,OtherCommitments,CCLimits : 0

        Examples:
            | ApplicationType | NumberofDependants | Property        | Income | OtherIncome | LivingExpenses | CurrentHomeLoan | OtherLoan | OtherCommitments | CCLimits | EstimatedBP |
            | Single          | 0                  | Home to live in | 80000  | 10000       | 500            | 0               | 100       | 0                | 10000    | $500,000    |