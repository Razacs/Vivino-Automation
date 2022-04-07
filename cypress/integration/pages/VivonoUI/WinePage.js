class WinePage{



    static loadHomePage(){ //Load URL

        cy.visit('/')
        cy.url().should('include', 'vivino')
    }

    static getTitle(pagetitle){ //Validate the Page Title

        cy.xpath("//title[contains(.,'Vivino - Buy the Right Wine')]").invoke('text').then((text1)=>{

        expect(text1.trim()).to.equal(pagetitle)
    })
    }

    
    static SearchWine(keyword){

        cy.get("[name='q']").type(keyword).type('{enter}') // Type Search and click

    }

    static getAllListData(){ //Get all the list of detail page (ALL wines)

    cy.get('.card-lg')
    // .should('have.length', 1)
    .then(($els) => {
    // we get a list of jQuery elements
    // let's convert the jQuery object into a plain array
    return (
      Cypress.$.makeArray($els)
        // and extract inner text from each
        .map((el) => el.innerText)
    )
  })
  //.should('deep.equal', ['first', 'third', 'fourth'])

// let's use Lodash to get property "innerText"
// from every item in the array
    cy.log('**using Lodash**')
    cy.get('.card-lg')
    .should('have.length', 20)
    .then(($els) => {
    // jQuery => Array => get "innerText" from each
    return Cypress._.map(Cypress.$.makeArray($els), 'innerText')
  })
  //.should('deep.equal', ['first', 'third', 'fourth'])

    cy.log('**using Lodash to convert and map**')
    cy.get('.card-lg')
    .should('have.length', 20)
    .then(($els) => {
    expect(Cypress.dom.isJquery($els), 'jQuery input').to.be.true
    // Lodash can iterate over jQuery object
    return Cypress._.map($els, 'innerText')
  })
    .should('be.an', 'array')
  //.and('deep.equal', ['first', 'third', 'fourth'])

  //cy.get('.card-lg').then(($els) => Cypress._.map($els, 'innerText'))

    cy.get(".card-lg").then(function($els) { //save array in els
    cy.log($els.text())

   cy.get('.card-lg').then(($els) => Cypress._.map($els, 'innerText'))
    
    
    //Data format

})

const wineList = cy.xpath("(//span[@class='bold'][contains(.,'Red')])").should('be.visible')
if(wineList.should('not.be.empty')){
    const firstItem = cy.xpath("(//span[@class='bold'][contains(text(),'')])[1]").then(($el) => {
        const text = $el.text();
        cy.log("The text we are getting is : "+text)
        
      });
    }
else{

    cy.log("Search List is Empty || Element not found")


}
}


static ValidateFirstItem(){ //Validate Element Exist or not

    cy.xpath("//div[@class='default-wine-card vintage-price-id-1469195']//span[@class='bold']").should('be.visible') // First Element display
    cy.get(".vintage-price-id-1469195 [href='/wine-regions/california']").should('be.visible')

}


static ClickonFirstItem(){

    cy.xpath("//div[@class='default-wine-card vintage-price-id-1469195']//span[@class='bold']").click() // Type Search and click
    cy.xpath("(//span[@class='bold'][contains(text(),'')])[1]").click()

}

}

export default WinePage