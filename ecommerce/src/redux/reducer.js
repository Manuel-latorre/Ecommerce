import { GET_PRODUCTS, GET_PRODUCT_DETAIL, ADD_CART, DELETE_CART, FILTER } from "./action-types";

const initialState = {
    products: [],
    product: {}
}

const reducer = (state = initialState, { type, payload }) => {

    switch( type ){

        case GET_PRODUCTS:
            return{
                ...state,
                products: payload
            }

        case ADD_CART:
            return {
                ...state,
                product: payload,
                products: payload
            }

        case DELETE_CART:
            return {
                ...state,
                products: payload
            }

        default: 
            return{
            ...state
        }
    }


}

export default reducer;