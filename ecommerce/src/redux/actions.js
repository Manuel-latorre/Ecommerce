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

export const addCart = (id) => {
    return {type: ADD_CART, payload: id}
}

export const deleteCart = (id) => {
    return {type: DELETE_CART, payload: id}
}

export const filter = (categories) => {
    return {type: FILTER, payload: categories}
}