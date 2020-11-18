export const initialState = {
    bag: [],
    user: null
}

export const getBagTotal = (bag) => {
    return bag?.reduce((amount, item) => parseInt(item.price) + amount, 0);
}

const reducer = (state, action) => {
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'ADD_TO_BAG':
            return { 
                ...state,
                bag: [...state.bag, action.item]
             };
        case 'REMOVE_FROM_BAG':
            let newBag = [...state.bag];

            const index = state.bag.findIndex((bagItem) => bagItem.pid === action.pid);

            if(index >= 0){
                newBag.splice(index, 1);
            }
            else{
                console.warn("Can't remove product!!!!");
            }

            return { 
                ...state, 
                bag: newBag 
            };
        case 'CLEAR_BAG':
                return { 
                    ...state,
                    bag: []
                 };
        default:
            return state;
    }
}

export default reducer;