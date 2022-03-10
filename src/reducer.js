export const initialState = {
    basket: [],
    user: null
};

export const getBasketTotal = (basket) => 
    // sum items
    basket?.reduce((amount, item) => item.price + amount, 0)

const reducer = (state, action) => {

    console.log(action)
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        
        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: []
            }

        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                basketItem => basketItem.id === action.id
            );
            let newBasket = [...state.basket];
            if(index >= 0) {
                //Elimina un elemento desde el índice INDEX
                newBasket.splice(index, 1);
            } else {
                console.warn(`Cant remove product (id: ${action.id}) as its not in basket`)
            }
            return {
                ...state,
                basket: newBasket
            }

        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

        default:
            return state;
    }
}

export default reducer;