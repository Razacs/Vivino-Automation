/// <reference types="cypress" />

import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'

//import LoginPageHRM from '../../../pages/OrangeHRMLoginPage/LoginPage'
import WinePage from '../../../pages/VivonoUI/WinePage'

Given('I successfully browse to the application',() =>{

    WinePage.loadHomePage()
    

})

Then('I should see the title of the page is {string}', pagetitle=>{

    WinePage.getTitle(pagetitle)
})


And('Get all the list with search keyword {string}', keyword=>{

    WinePage.SearchWine(keyword)
    cy.url().should('include','wine')
    WinePage.getAllListData()
})

And('I click on first Item',() =>{

    
    //WinePage.getAllListData()
    WinePage.ValidateFirstItem()
    WinePage.ClickonFirstItem()

})
