// Action Types
export const ADD_TO_NOMINATIONS = "ADD_TO_NOMINATIONS";
export const DELETE_FROM_NOMINATIONS = "DELETE_FROM_NOMINATIONS";

//Add Nomination
export const addToNominations = (nomination, nominations, addToast) => {
  // Function determines if already nominated
  function isNominated(nomination, nominations) {
    var i;
    for (i = 0; i < nominations.length; i++) {
      if (nominations[i].id === nomination.id) {
        return true;
      }
    }
    return false;
  }
  // Prevent Nominating Twice
  if (isNominated(nomination, nominations)) {
    return (dispatch) => {
      addToast(`Oops! ${nomination.title} Is Already Nominated`, {
        appearance: "warning",
        autoDismiss: true,
      });
    };
    // Prevent further nominations after 5
  } else if (nominations.length === 5) {
    return (dispatch) => {
      addToast(`Oops! You already have 5 Nominations.`, {
        appearance: "error",
        autoDismiss: true,
      });
    };
  } else {
    return (dispatch) => {
      addToast(`Added ${nomination.title} To Nominations`, {
        appearance: "success",
        autoDismiss: true,
      });
      dispatch({ type: ADD_TO_NOMINATIONS, payload: nomination });
    };
  }
};

//Delete Nomination
export const deleteFromNominations = (nomination, addToast) => {
  return (dispatch) => {
    if (addToast) {
      addToast(`Removed ${nomination.title} From Nominations`, {
        appearance: "error",
        autoDismiss: true,
      });
    }
    dispatch({ type: DELETE_FROM_NOMINATIONS, payload: nomination });
  };
};
