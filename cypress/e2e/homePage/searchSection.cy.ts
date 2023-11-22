import { SEARCH_SECTION_IDS, STD_STATUS_RADIO_OPTIONS } from "../../../src/constants/testData/homePage/searchSection"

describe("It tests search section", () => {
    beforeEach("Visit base url", () => {
        cy.visitHome()
    })
    
    // Visibility
    it("Tests - Search button visibility", () => {
        cy.getByTestId(SEARCH_SECTION_IDS.STD_APPLY_BUTTON).should("be.visible")
    })
    it("Tests - Search fiels visibility", () => {
        cy.getByTestId(SEARCH_SECTION_IDS.STD_INPUT_FIELD).should("be.visible")
    })
    it("Tests - All radio button visibility", () => {
        cy.getByTestId(SEARCH_SECTION_IDS.STD_ALL_RADIO_BUTTON).should("be.visible")
    })
    it("Tests - Done radio button visibility", () => {
        cy.getByTestId(SEARCH_SECTION_IDS.STD_DONE_RADIO_BUTTON).should("be.visible")
    })
    it("Tests - Open radio button visibility", () => {
        cy.getByTestId(SEARCH_SECTION_IDS.STD_OPEN_RADIO_BUTTON).should("be.visible")
    })

    // Actions
    it("Tests - Entering text into search field", () => {
        cy.fixture('searchSection').then(data => {
            cy.getByTestId(SEARCH_SECTION_IDS.STD_INPUT_FIELD).type(data?.validSearchText)
            cy.getByTestId(SEARCH_SECTION_IDS.STD_INPUT_FIELD).should("contain.value", data?.validSearchText)
        })
    })
    it("Tests - Checking radio buttons clickability", () => {
        cy.getByTestId(SEARCH_SECTION_IDS.STD_ALL_RADIO_BUTTON).click().should("contain.value", STD_STATUS_RADIO_OPTIONS.ALL.value)
        cy.getByTestId(SEARCH_SECTION_IDS.STD_DONE_RADIO_BUTTON).click().should("contain.value", STD_STATUS_RADIO_OPTIONS.DONE.value)
        cy.getByTestId(SEARCH_SECTION_IDS.STD_OPEN_RADIO_BUTTON).click().should("contain.value", STD_STATUS_RADIO_OPTIONS.OPEN.value)
    })
})