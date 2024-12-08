import axios from "axios";

const validateToken = async () => {
  try {
    const response = await axios.get(process.env.NEXT_PUBLIC_API, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Token validation failed:", error);
    throw error;
  }
};

const login = async (username, password) => {
  const res = await axios
    .post(
      process.env.NEXT_PUBLIC_API + "/auth/login",
      {
        username,
        password,
      },
      { withCredentials: true },
    )
    .then((res) => {
      return res;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
  return res;
};

const signup = async (username, password, email) => {
  const res = await axios
    .post(
      process.env.NEXT_PUBLIC_API + "/auth/signup",
      {
        username,
        password,
        email,
      },
      { withCredentials: true },
    )
    .then((res) => {
      return res;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
  return res;
};

module.exports = { validateToken, login };
