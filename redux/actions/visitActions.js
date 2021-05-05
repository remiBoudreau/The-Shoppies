// Action Types
export const HAS_VISITED = "HAS_VISITED";

//
export const onVisit = () => {
  return (dispatch) => {
    dispatch({ type: HAS_VISITED });
  };
};
