const sectionPrefix = 'search-todo'

export const SEARCH_SECTION_IDS = {
    STD_INPUT_FIELD : `${sectionPrefix}-input-field`,
    STD_APPLY_BUTTON : `${sectionPrefix}-apply-button`,
    STD_ALL_RADIO_BUTTON : `${sectionPrefix}-all-radio-button`,
    STD_DONE_RADIO_BUTTON : `${sectionPrefix}-done-radio-button`,
    STD_OPEN_RADIO_BUTTON : `${sectionPrefix}-open-radio-button`
}

export const STD_STATUS_RADIO_OPTIONS = {
    ALL : {
        title : 'All',
        value : '',
    },
    DONE : {
        title : 'Done',
        value : 'true',
    },
    OPEN : {
        title : 'Open',
        value : 'false',
    },
}