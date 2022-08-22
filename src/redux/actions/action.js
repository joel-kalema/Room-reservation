import * as actionType from './action_type';

export const getProduct = (payload) => ({
    type: actionType.GET_ROOMS,
    payload,
})

export const addToCart = (itemID) => ({
    type: actionType.ADD_TO_CART,
    payload: {
        id: itemID,
    }
})