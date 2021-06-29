export const createAction = (type,data,id) => {
    return {
        type,
        data,
        id:id
    }
}