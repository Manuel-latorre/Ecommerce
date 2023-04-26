import axios from 'axios'
import { GET_PRODUCTS, GET_PRODUCT_DETAIL, ADD_CART, DELETE_CART, FILTER } from "./action-types";


export const getProducts = () => {
    return async (dispatch) => {
        const response = (await axios('https://fakestoreapi.com/products')).data;
        return dispatch({type: GET_PRODUCTS, payload: response});
    }
}

export const getProductDetail = (product) => {
    return {type: GET_PRODUCT_DETAIL, payload: product}
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