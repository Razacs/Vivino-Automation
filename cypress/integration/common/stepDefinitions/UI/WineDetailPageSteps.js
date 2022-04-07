/// <reference types="cypress" />

import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'

import WineDetailPage from '../../../pages/VivonoUI/WineDetailPage'

Then('Validate item detail',() =>{

    WineDetailPage.Winetitle()
    WineDetailPage.WineCountryDetail()
    
})

Then('Validate detail with another wine',() =>{

    WineDetailPage.ValidateDetailofWine()
    
    
})
