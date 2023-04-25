import { GET_ALL, ADD_CART, DELETE_CART, FILTER } from "./action-types";

export const getAll = (products) => {
    return {type: GET_ALL, payload: products}
}

export const addCart = (product) => {
    return {type: ADD_CART, payload: product}
}

export const deleteCart = (product) => {
    return {type: DELETE_CART, payload: product}
}

export const filter = (categories) => {
    return {type: FILTER, payload: categories}
}