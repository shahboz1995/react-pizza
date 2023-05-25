const initialState = {
  isLoading: false,
  allPizza: [],

}

const saveAllPizza = (state, allPizza = []) => {
  return {
    ...state,
    allPizza: allPizza,
  };
};

const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case `SAVE_ALL_PIZZA`:
      return saveAllPizza(state, action.payload);

    default:
      return state;
  }
};

export default pizzaReducer;