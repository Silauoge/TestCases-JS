describe('test downloads', () => {
  beforeEach(() => {
    cy.viewport('ipad-mini')
    cy.visit('https://nordlayer.com/')
    cy.get('.Hamburger__Button-sc-afj4c1-1 > :nth-child(1)').click()
    }) 

    it ('clicks on download', () => {
    cy.get('[href="/download/"] > .MuiBox-root').click({force: true})
    })

    it ('menu has 5 items', () => {
    cy.get('[href="/download/"] > .MuiBox-root').click({force: true})
    cy.get('#submenu').children().should('have.length',5)
    })

    it ('verify iOS', () => {
    cy.get('[href="/download/"] > .MuiBox-root').click({force: true})
    cy.get('#submenu-item-0').click()
    cy.get('[href="https://apps.apple.com/us/app/id1481884864/"]')
    .should('be.visible')
    //cy.get('.nord-col > .inline-block')
    //.invoke('attr', 'href')
    //.should('equal', 'https://apps.apple.com/us/app/id1481884864/')

    })

    it ('verify Android ', () => {
      cy.get('[href="/download/"] > .MuiBox-root').click({force: true})
      cy.get('#submenu-item-1').click()
      cy.get('[href="https://play.google.com/store/apps/details?id=com.nordvpn.android.teams"]')
      .should('be.visible')

    })
    
    it ('verify macOS ', () => {
      cy.get('[href="/download/"] > .MuiBox-root').click({force: true})
      cy.get('#submenu-item-2').click()
      cy.get('[href="https://apps.apple.com/us/app/id1488888843/"]')
      .should('be.visible')

    })

    it ('verify Windows ', () => {
      cy.get('[href="/download/"] > .MuiBox-root').click({force: true})
      cy.get('#submenu-item-3').click()
      cy.get('[href="https://downloads.nordlayer.com/win/latest/NordLayerSetup.exe"]')
      .should('be.visible')
      
    })

    it ('verify Linux ', () => {
      cy.get('[href="/download/"] > .MuiBox-root').click({force: true})
      cy.get('#submenu-item-4').click()
      cy.get('[href="https://downloads.nordlayer.com/linux/latest/nordlayer-latest_1.0.0_all.deb"]')
      .should('be.visible')
      cy.get('[href="https://downloads.nordlayer.com/linux/latest/nordlayer-latest-1.0.0-noarch.rpm"]')
      .should('be.visible')
    })

})

