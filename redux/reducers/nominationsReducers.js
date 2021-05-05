import {
  ADD_TO_NOMINATIONS,
  DELETE_FROM_NOMINATIONS,
} from "../actions/nominationsActions";

const initState = [];

const nominationsReducer = (state = initState, action) => {
  const nominations = state,
    movie = action.payload;

  if (action.type === ADD_TO_NOMINATIONS) {
    function isNominated(movie, nominations) {
      var i;
      for (i = 0; i < nominations.length; i++) {
        if (nominations[i] === movie) {
          return true;
        }
      }
      return false;
    }

    if (isNominated(movie, nominations)) {
      return nominations;
    } else {
      return [...nominations, movie];
    }
  }

  if (action.type === DELETE_FROM_NOMINATIONS) {
    const remainingNominations = (nominations, movie) =>
      nominations.filter((nomination) => nomination.id !== movie.id);
    return remainingNominations(nominations, movie);
  }

  return state;
};

export default nominationsReducer;
