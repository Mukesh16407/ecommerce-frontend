import axios from "axios";

export const userCart = async (cart, authtoken) =>
  await axios.post(
    `${process.env.REACT_APP_API}/api/user/cart`,
    { cart },
    {
      headers: {
        authtoken,
      },
    }
  );

export const emptyUserCart = async (authtoken) =>
  await axios.delete(`${process.env.REACT_APP_API}/api/user/cart`, {
    headers: {
      authtoken,
    },
  });
export const getUserCart = async (authtoken) =>
  await axios.get(`${process.env.REACT_APP_API}/api/user/cart`, {
    headers: {
      authtoken,
    },
  });

export const saveUserAddress = async (authtoken, address) =>
  await axios.post(
    `${process.env.REACT_APP_API}/api/user/address`,
    { address },
    {
      headers: {
        authtoken,
      },
    }
  );
export const applyCoupon = async (authtoken, coupon) =>
  await axios.post(
    `${process.env.REACT_APP_API}/api/user/cart/coupon`,
    { coupon },
    {
      headers: {
        authtoken,
      },
    }
  );
// Wishlist
export const getWishlist = async (authtoken) =>
  await axios.get(`${process.env.REACT_APP_API}/api/user/wishlist`, {
    headers: {
      authtoken,
    },
  });

export const removeWishlist = async (productId, authtoken) =>
  await axios.put(
    `${process.env.REACT_APP_API}/api/user/wishlist/${productId}`,
    {},
    {
      headers: {
        authtoken,
      },
    }
  );

export const addToWishlist = async (productId, authtoken) =>
  await axios.post(
    `${process.env.REACT_APP_API}/api/user/wishlist`,
    { productId },
    {
      headers: {
        authtoken,
      },
    }
  );

export const createCashOrderForUser = async (
  authtoken,
  COD,
  couponTrueOrFalse
) =>
  await axios.post(
    `${process.env.REACT_APP_API}/api/user/cash-order`,
    { couponApplied: couponTrueOrFalse, COD },
    {
      headers: {
        authtoken,
      },
    }
  );
