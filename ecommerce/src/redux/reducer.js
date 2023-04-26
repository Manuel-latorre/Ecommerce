import { GET_PRODUCTS, GET_PRODUCT_DETAIL, DELETE_CART, FILTER } from "./action-types";

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

        default: 
        return{
            ...state
        }
    }


}

export default reducer;