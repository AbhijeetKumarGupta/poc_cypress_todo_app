import { DETAILS_SECTION_IDS } from "../../../src/constants/testData/detailsPage/detailsSection"
import { CARD_SECTION_IDS } from "../../../src/constants/testData/homePage/cardSection"

describe("It tests detail section", () => {
    beforeEach("Visit base url", () =>{
        cy.visitHome()
    })

    it("Tests - Details page", () => {
        cy.getByTestId(CARD_SECTION_IDS.TL_CARD).its(0).within(() => {
            cy.getByTestId(CARD_SECTION_IDS.TL_VIEW_BUTTON).click()
        })
        cy.location('pathname').then(($path) => {
            expect(Cypress.minimatch($path, `/poc_cypress_todo_app/detail/*`, { matchBase: true})).to.be.true
            cy.getByTestId(DETAILS_SECTION_IDS.TD_TASK_ID).invoke('text').then(($id) => {
                expect(`/poc_cypress_todo_app/detail/${$id}`).to.be.eq($path)
            })
        })
        cy.getByTestId(DETAILS_SECTION_IDS.TD_BACK_BUTTON).should("be.visible").should('be.enabled').click()
        cy.location('pathname').then(($path) => {
            expect(Cypress.minimatch($path, `/poc_cypress_todo_app/detail/*`, { matchBase: true})).to.be.false
        })
    })
})