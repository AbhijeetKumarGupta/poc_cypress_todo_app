import { DETAILS_SECTION_IDS } from "../../../src/constants/testData/detailsPage/detailsSection"
import { CARD_SECTION_IDS } from "../../../src/constants/testData/homePage/cardSection"
import { NUMBER_0_TO_255_REGEX } from "../../../src/constants/shared"

describe("It tests detail section", () => {
    beforeEach("Visit base url", () =>{
        cy.visitHome()
    })

    it("Tests - Details page", () => {
        cy.getByTestId(CARD_SECTION_IDS.TL_CARD).its(0).within(() => {
            cy.getByTestId(CARD_SECTION_IDS.TL_VIEW_BUTTON).click()
        })
        cy.location('pathname').should('match', NUMBER_0_TO_255_REGEX)
        cy.getByTestId(DETAILS_SECTION_IDS.TD_BACK_BUTTON).should("be.visible").should('be.enabled').click()
        cy.location('pathname').should('not.match', NUMBER_0_TO_255_REGEX)
    })
})