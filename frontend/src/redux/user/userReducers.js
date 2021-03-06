import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  VERIFY_REQUEST,
  VERIFY_SUCCESS,
  VERIFY_FAIL,
  ONBOARDING_FAIL,
  ONBOARDING_REQUEST,
  ONBOARDING_SUCCESS,
  EDIT_PASSWORD_REQUEST,
  EDIT_PASSWORD_SUCCESS,
  EDIT_PASSWORD_FAIL,
  GET_CHEFS_REQUEST,
  GET_CHEFS_SUCCESS,
  GET_CHEFS_FAIL,
  VERIFY_CHEF_REQUEST,
  VERIFY_CHEF_SUCCESS,
  VERIFY_CHEF_FAIL,
} from "./userTypes";

export const userRegisterReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_REQUEST:
      return { loading: true };
    case REGISTER_SUCCESS:
      return { loading: false, user: payload };
    case REGISTER_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};

export const chefListReducer = (state = { chefs: [] }, action) => {
  switch (action.type) {
    case GET_CHEFS_REQUEST:
      return { loading: true };
    case GET_CHEFS_SUCCESS:
      return { loading: false, chefs: action.payload };
    case GET_CHEFS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const chefVerifyReducer = (state = {}, action) => {
  switch (action.type) {
    case VERIFY_CHEF_REQUEST:
      return { loading: true };
    case VERIFY_CHEF_SUCCESS:
      return { loading: false, chef: action.payload, success: true };
    case VERIFY_CHEF_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userUpdateReducer = (state = { loading: false }, action) => {
  switch (action.type) {
    case EDIT_PASSWORD_REQUEST:
      return { loading: true, success: false };
    case EDIT_PASSWORD_SUCCESS:
      return { loading: false, user: action.payload.user, success: true };
    case EDIT_PASSWORD_FAIL:
      return { loading: false, error: action.payload, success: false };
    default:
      return state;
  }
};

export const userOnboardingReducer = (state = { loading: false }, action) => {
  switch (action.type) {
    case ONBOARDING_REQUEST:
      return { loading: true };
    case ONBOARDING_SUCCESS:
      return { loading: false };
    case ONBOARDING_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userLoginReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_REQUEST:
      return { loading: true };
    case LOGIN_SUCCESS:
      return { loading: false, user: payload.user, token: payload.token };
    case LOGIN_FAIL:
      return { loading: false, error: payload };
    case LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userVerifyReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case VERIFY_REQUEST:
      return { loading: true };
    case VERIFY_SUCCESS:
      return { loading: false, success: true };
    case VERIFY_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
