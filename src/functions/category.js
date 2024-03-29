import axios from "axios";

export const getCategories = async () =>
  await axios.get(`${process.env.REACT_APP_API}/api/categories`);

export const getCategory = async (slug) =>
  await axios.get(`${process.env.REACT_APP_API}/api/category/${slug}`);

export const removeCategory = async (slug, authtoken) =>
  await axios.delete(`${process.env.REACT_APP_API}/api/category/${slug}`, {
    headers: {
      authtoken,
    },
  });

export const updateCategory = async (slug, category, authtoken) =>
  await axios.put(
    `${process.env.REACT_APP_API}/api/category/${slug}`,
    category,
    {
      headers: {
        authtoken,
      },
    }
  );

export const createCategory = async (category, authtoken) =>
  await axios.post(`${process.env.REACT_APP_API}/api/category`, category, {
    headers: {
      authtoken,
    },
  });
export const getCategorySubs = async (_id) =>
  await axios.get(`${process.env.REACT_APP_API}/api/category/subs/${_id}`);
