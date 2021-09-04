import axios from "axios";
import { useState } from "react";

export const GetProduct = async () => {
  const products = await axios.get("http://localhost:3003/product");
  return products;
};

export const GetProductByProductId = (products, productId) => {
  debugger;
  return products.find((product) => product.id === productId) || null;
};
export const Validation = (product) => {
  debugger;
  let error = {};
  if (product.name === "") error.name = "Product Name cannot be null";
  if (product.color === "") error.color = "Color cannot be null";
  if (product.company === "") error.company = "Company cannot be null";
  if (product.size === "") error.size = "Size cannot be null";
  // if (product.image === null) error.image = "Please Select Image";
  if (isNaN(product.quantity)) {
    error.quantity = "Quantity must be a number";
  } else if (product.quantity === null) {
    error.quantity = "Quantity cannot be null";
  }
  if (isNaN(product.price)) {
    error.price = "Price must be a number";
  } else if (product.price === null) {
    error.price = "Price cannot be null";
  }

  return error;
};

export const saveChanges = async (product) => {
  // const fd = new FormData();
  // const i = fd.append("image", product.image, product.image.name);
  // product.image = i;
  debugger;
  product.id
    ? await axios
        .put(`http://localhost:3003/product/${product.id}`, product)
        .then((res) => {
          console.log(res);
        })
    : await axios.post("http://localhost:3003/product", product);
  return product;
};

export const deleteProductById = async (Id) => {
  debugger;
  const id = await axios.delete(`http://localhost:3003/product/${Id}`);
  return id;
};

export const getProductById = async (ID) => {
  const product = await axios.get(`http://localhost:3003/product/${ID}`);
  return product;
};

export const customerValidation = (customer) => {
  let error = {};
  if (customer.customerName === "") error.customerName = "Name Is Required";

  if (isNaN(customer.mobileNo)) {
    error.mobileNo = "Mobile Number must be a number";
  } else if (customer.mobileNo === null) {
    error.mobileNo = "Mobile Number Is Required";
  }
  return error;
};

export const saveOrder = async (bill) => {
  debugger;
  await axios.post("http://localhost:3003/orders", bill);
  return bill;
};

export const updatedAllItems = async (items) => {
  debugger;
  if (items.length > 0) {
    await items.forEach((i) => {
      axios.put(`http://localhost:3003/product/${i.id}`, i);
    });
  }
};

export const getHistory = async () => {
  debugger;
  const history = await axios.get(`http://localhost:3003/orders`);
  return history;
};

export const deleteHistoryById = async (Id) => {
  debugger;
  const id = await axios.delete(`http://localhost:3003/orders/${Id}`);
  return id;
};
