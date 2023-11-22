const initailState = {
    feeds: [],
}
const feedsReducer = (state = initailState,action) =>{

    switch(action.type){
        case 'SET_FEEDS':
        return {
            ...state,
            feeds : action.feeds
        }

        case 'SET_FEEDS_NULL':
            return {
                ...state,
                feeds : initailState
            }

            default :
            return state
    }
}

export default feedsReducer;