const initialState = {
  items: [],
  totalItems: 0
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
          totalItems: state.totalItems + 1
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
          totalItems: state.totalItems + 1
        };
      }
    case 'INCREASE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
        totalItems: state.totalItems + 1
      };
    case 'DECREASE_QUANTITY':
      const itemToDecrease = state.items.find(item => item.id === action.payload);
      if (itemToDecrease.quantity > 1) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
          ),
          totalItems: state.totalItems - 1
        };
      } else {
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload),
          totalItems: state.totalItems - 1
        };
      }
    case 'REMOVE_FROM_CART':
      const itemToRemove = state.items.find(item => item.id === action.payload);
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
        totalItems: state.totalItems - itemToRemove.quantity
      };
    default:
      return state;
  }
};

export default cartReducer;
