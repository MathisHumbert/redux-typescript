import { ActionType } from '../action-type';
import { Action } from '../actions';

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

// interface Action {
//   type: string;
//   payload?: any;
// }

const reducer = (
  state: RepositoriesState = initialState,
  action: Action
): RepositoriesState => {
  if (action.type === ActionType.SEARCH_REPOSITORIES) {
    return { loading: true, error: null, data: [] };
  }
  if (action.type === ActionType.SEARCH_REPOSITORIES_SUCCESS) {
    return { loading: false, error: null, data: action.payload };
  }
  if (action.type === ActionType.SEARCH_REPOSITORIES_ERROR) {
    return { loading: false, error: action.payload, data: [] };
  }
  return state;
};
export default reducer;
