class WineDetailPage{

    static Winetitle(){

        cy.xpath("//div[@class='mobile-column-4 tablet-column-8 desktop-column-6']//span[@class='vintage']").then((title) => {
            const text = title.text(); // Title text we are getting
            cy.log("The title we are getting is : "+text)   //Display the title
          });

    }
    static WineCountryDetail(){

        cy.get("[href='/wine-regions/california']").should('be.visible').then((country) => {
            const text = country.text(); // Country Text getting
            cy.log("The country we are getting is : "+text)   //Display the country
          });
    }


    static ValidateDetailofWine(){

        cy.go('back')

        cy.url().should('include', 'wine')
        
        cy.xpath("//div[@class='default-wine-card vintage-price-id-1564161']//span[@class='bold']").click()

        cy.get(".breadCrumbs .vintage").should('be.visible').then((newtitle) => {
            const text = newtitle.text(); // Title Text getting
            cy.log("The title we are getting is : "+text)   
          });

        cy.get("[href='/wine-countries/united-states']").should('be.visible').then((newcountry) => {
            const text = newcountry.text(); // Title Text getting
            cy.log("The country we are getting is : "+text)   
          });


    }
    


}

export default WineDetailPage