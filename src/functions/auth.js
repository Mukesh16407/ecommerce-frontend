import axios from "axios";

export const createOrUpdateUser = async (authtoken) => {
  return await axios.post(
    `${process.env.REACT_APP_API}/api/create-or-update-user`,
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
};

export const postCurrentUser = async (authtoken) => {
  return await axios.post(
    `${process.env.REACT_APP_API}/api/current-user`,
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
};

export const currentAdmin = async (authtoken) => {
  return await axios.post(
    `${process.env.REACT_APP_API}/api/current-admin`,
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
};
