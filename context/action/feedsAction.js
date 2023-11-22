export const SET_FEEDS = (feeds) =>{
    return {
        type: "SET_FEEDS",
        feeds: feeds,
    };
};

export const SET_FEEDS_NULL = (initailState) =>{
    return {
        type: "SET_FEEDS_NULL",
        feeds: initailState,
    };
}