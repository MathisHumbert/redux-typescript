interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

interface SearchRepositoriesAction {
  type: ActionType.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface SearchRepositoritesErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoritesErrorAction;

enum ActionType {
  SEARCH_REPOSITORIES = 'search_repositories',
  SEARCH_REPOSITORIES_SUCCESS = 'search_repositories_success',
  SEARCH_REPOSITORIES_ERROR = 'search_repositories_error',
}

// interface Action {
//   type: string;
//   payload?: any;
// }

const reducer = (
  state: RepositoriesState,
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
