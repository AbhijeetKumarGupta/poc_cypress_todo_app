import { DETAILS_SECTION_IDS } from "../../../src/constants/testData/detailsPage/detailsSection"
import { CARD_SECTION_IDS, EMPTY_TL_MESSAGE } from "../../../src/constants/testData/homePage/cardSection"
import { INPUT_SECTION_IDS } from "../../../src/constants/testData/homePage/inputSection"
import { SEARCH_SECTION_IDS } from "../../../src/constants/testData/homePage/searchSection"

describe("It tests card section", () => {

    beforeEach("Visit base url",() =>{
        cy.visitHome()
    })

    it("Tests - Add, search and remove", () => {

        cy.fixture('inputSection').then(data => {

            // Add functionality
            cy.getByTestId(INPUT_SECTION_IDS.ATD_INPUT_FIELD).type(data?.todos?.[1])
            cy.getByTestId(INPUT_SECTION_IDS.ATD_BUTTON).click()
            cy.getByTestId(CARD_SECTION_IDS.TL_CARD).its(0).should("contain",data?.todos?.[1]).within(() => {
                cy.getByTestId(CARD_SECTION_IDS.TL_VIEW_BUTTON).should("be.disabled")
            })

            // Search functionality
            cy.getByTestId(SEARCH_SECTION_IDS.STD_INPUT_FIELD).type(data?.todos?.[1])
            cy.getByTestId(SEARCH_SECTION_IDS.STD_APPLY_BUTTON).click()
            cy.getByTestId(CARD_SECTION_IDS.TL_CARD).should(($card) => {
                expect($card.first()).to.contain(data?.todos?.[1])
            })
            cy.fixture('searchSection').then(searchData => {
                // Valid Search
                cy.getByTestId(SEARCH_SECTION_IDS.STD_INPUT_FIELD).clear().type(searchData?.validSearchText)
                cy.getByTestId(SEARCH_SECTION_IDS.STD_APPLY_BUTTON).click()
                cy.getByTestId(CARD_SECTION_IDS.TL_CARD_CONTAINER).should("not.contain", EMPTY_TL_MESSAGE)

                // Invalid Search
                cy.getByTestId(SEARCH_SECTION_IDS.STD_INPUT_FIELD).clear().type(searchData?.invalidSearchText)
                cy.getByTestId(SEARCH_SECTION_IDS.STD_APPLY_BUTTON).click()
                cy.getByTestId(CARD_SECTION_IDS.TL_CARD_CONTAINER).should("contain", EMPTY_TL_MESSAGE)
            })
            cy.getByTestId(SEARCH_SECTION_IDS.STD_INPUT_FIELD).clear()
            cy.getByTestId(SEARCH_SECTION_IDS.STD_APPLY_BUTTON).click()

            // Mark as done, open and remove functionality
            cy.getByTestId(CARD_SECTION_IDS.TL_CARD).its(0).within(()=>{
                cy.getByTestId(CARD_SECTION_IDS.TL_MARK_AS_DONE_BUTTON).should("be.enabled")
                cy.getByTestId(CARD_SECTION_IDS.TL_MARK_AS_OPEN_BUTTON).should("be.disabled")
                cy.getByTestId(CARD_SECTION_IDS.TL_MARK_AS_DONE_BUTTON).click()
                cy.getByTestId(CARD_SECTION_IDS.TL_MARK_AS_DONE_BUTTON).should("be.disabled")
                cy.getByTestId(CARD_SECTION_IDS.TL_MARK_AS_OPEN_BUTTON).should("be.enabled")
                cy.getByTestId(CARD_SECTION_IDS.TL_MARK_AS_OPEN_BUTTON).click()
                cy.getByTestId(CARD_SECTION_IDS.TL_MARK_AS_DONE_BUTTON).should("be.enabled")
                cy.getByTestId(CARD_SECTION_IDS.TL_MARK_AS_OPEN_BUTTON).should("be.disabled")
                cy.getByTestId(CARD_SECTION_IDS.TL_CARD_REMOVE_BUTTON).click()
            })
            cy.getByTestId(CARD_SECTION_IDS.TL_CARD).should("not.contain", data?.todos?.[1])
        })

         // View functionality
         cy.getByTestId(CARD_SECTION_IDS.TL_CARD).its(0).within(()=>{
            cy.getByTestId(CARD_SECTION_IDS.TL_VIEW_BUTTON).should("be.enabled").click()
            cy.location('pathname').then(($path) => {
                expect(Cypress.minimatch($path, `/poc_cypress_todo_app/detail/*`, { matchBase: true})).to.be.true
            })
        })
        cy.getByTestId(DETAILS_SECTION_IDS.TD_BACK_BUTTON).should("be.enabled").click()

    })

    it("Tests - Filter by status", () => {

        // Filter by status
        cy.getByTestId(SEARCH_SECTION_IDS.STD_DONE_RADIO_BUTTON).click()
        cy.getByTestId(SEARCH_SECTION_IDS.STD_APPLY_BUTTON).click()
        cy.getByTestId(CARD_SECTION_IDS.TL_CARD).each(($todoItem) => {
            cy.wrap($todoItem).within(() => {
                cy.getByTestId(CARD_SECTION_IDS.TL_MARK_AS_OPEN_BUTTON).should("be.enabled")
                cy.getByTestId(CARD_SECTION_IDS.TL_MARK_AS_DONE_BUTTON).should("be.disabled")
            })
        })
        cy.getByTestId(SEARCH_SECTION_IDS.STD_OPEN_RADIO_BUTTON).click()
        cy.getByTestId(SEARCH_SECTION_IDS.STD_APPLY_BUTTON).click()
        cy.getByTestId(CARD_SECTION_IDS.TL_CARD).each(($todoItem) => {
            cy.wrap($todoItem).within(() => {
                cy.getByTestId(CARD_SECTION_IDS.TL_MARK_AS_DONE_BUTTON).should("be.enabled")
                cy.getByTestId(CARD_SECTION_IDS.TL_MARK_AS_OPEN_BUTTON).should("be.disabled")
            })
        })
        cy.getByTestId(SEARCH_SECTION_IDS.STD_ALL_RADIO_BUTTON).click()
        cy.getByTestId(SEARCH_SECTION_IDS.STD_APPLY_BUTTON).click()
    })
})