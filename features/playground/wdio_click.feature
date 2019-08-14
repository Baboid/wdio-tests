#
# FILE NAME: wdio_click
# DESCRIPTION: Nema fuxo
# AUTHOR: Ivan Babic (IB)
# CREATED: 13-Aug-2019
# NOTES:
#
Feature: Contact us feature

    Scenario: Click the contact us link and input the contacts
        When I click on the Contact us link
        #Then I should be presented with the Contact us page
        When I input the info for "mentol" and click on the Submit button
        Then I should should be presented with a message