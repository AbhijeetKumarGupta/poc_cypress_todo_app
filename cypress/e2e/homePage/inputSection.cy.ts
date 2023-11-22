import { INPUT_SECTION_IDS, INPUT_SECTION_VALIDATION_MESSAGES} from "../../../src/constants/testData/homePage/inputSection"

describe("It tests input section", () => {
  beforeEach("Visit base url",() =>{
    cy.visitHome()
  })

  // Visibility
  it("Tests - Add button and input field's visibility", () => {
    cy.getByTestId(INPUT_SECTION_IDS.ATD_BUTTON).should("be.visible")
    cy.getByTestId(INPUT_SECTION_IDS.ATD_INPUT_FIELD).should("be.visible")
  })

  // Actions
  it("Tests - Add button's clickability and Empty field validation", () => {
    cy.getByTestId(INPUT_SECTION_IDS.ATD_BUTTON).click()
    cy.getByTestId(INPUT_SECTION_IDS.ATD_ERROR_MESSAGE).contains(INPUT_SECTION_VALIDATION_MESSAGES.EMPTY_FIELD_SUBMIT)
  })
  it("Tests - Entering text into input field", () => {
    cy.fixture('inputSection').then(data => {
      cy.getByTestId(INPUT_SECTION_IDS.ATD_INPUT_FIELD).type(data?.todos?.[0])
      cy.getByTestId(INPUT_SECTION_IDS.ATD_INPUT_FIELD).should("contain.value", data?.todos?.[0])
      cy.getByTestId(INPUT_SECTION_IDS.ATD_INPUT_FIELD).clear()
    })
  })

})