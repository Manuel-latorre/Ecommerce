import { GET_ALL, ADD_CART, DELETE_CART, FILTER } from "./action-types";

const initialState = {
    myCart: [],
    allProducts: []
}

const reducer = (state = initialState, { type, payload }) => {

    switch( type ){

        case GET_ALL:
            return{
                ...state,
                
            }









        default: 
        return{
            ...state
        }
    }









}