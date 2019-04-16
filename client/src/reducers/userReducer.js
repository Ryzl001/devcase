export default (state = {}, action) => {
  switch (action.type) {
    case "REGISTER_USER":
      if (action.payload.statusText === "OK") {
        return { ...action.payload.data };
      }
      return { errors: { ...action.payload.data } };

    case "LOGIN_USER":
      if (action.payload.statusText === "OK") {
        return { ...action.payload };
      }
      return { errors: { ...action.payload.data } };

    default:
      return state;
  }
};
