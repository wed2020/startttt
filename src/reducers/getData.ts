import { GET_SUCCESS, getDataActions, LoadingType } from "../actions/types";

const initialState: LoadingType = {
  loading: true,
  data: [
    {
      _id: "",
      Haltestelle: "",
      adresse: "",
      Umstiegmöglischkeiten: "",
    },
  ],
};

export default function getDataReducer(
  state = initialState,
  action: getDataActions
): LoadingType {
  const { payload, type } = action;
  switch (type) {
    case GET_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    default:
      return state;
  }
}
