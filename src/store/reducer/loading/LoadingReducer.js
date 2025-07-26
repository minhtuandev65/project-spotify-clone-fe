import { DISPlAY_LOADING, HIDE_LOADING } from "@/types/loading/LoadingTypes";

const initialState = {
  isLoading: false,
};
export const LoadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPlAY_LOADING: {
      return { ...state, isLoading: true };
    }
    case HIDE_LOADING: {
      return { ...state, isLoading: false };
    }
    default: {
      return { ...state };
    }
  }
};
