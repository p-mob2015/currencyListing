export const remoteReducer = (typeBase, state, action) => {
  const START = typeBase;
  const SUCCESS = `${typeBase}_SUCCESS`;
  const FAILURE = `${typeBase}_FAILURE`;

  switch (action.type) {
    case START:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        error: null,
        data: action.result,
      };
    case FAILURE:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        error: action.error,
      };
    default:
      return state;
  }
}
