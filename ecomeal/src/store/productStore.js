// productStore.js
import { makeAutoObservable, runInAction } from "mobx";

class ProductStore {
  products = [];
  product = null;
  user = null;
  basket = [];
  loading = false;
  error = null;

  constructor() {
    makeAutoObservable(this);
  }

  fetchProducts = async () => {
    this.loading = true;
    this.error = null;

    try {
      const response = await fetch('http://127.0.0.1:3000/v1/products', {
        method: "get",
        headers: {
          "Content-Type": "application/json"
        },
      });
      const data = await response.json();

      // Изменения состояния должны происходить внутри action
      runInAction(() => {
        this.products = data.products;
        this.loading = false;
      });
    } catch (err) {
      runInAction(() => {
        this.error = err.message;
        this.loading = false;
      });
    }
  };

  fetchBasket = async () => {
    this.loading = true;
    this.error = null;

    try {
      const response = await fetch('http://127.0.0.1:3000/v1/basket', {
        method: "get",
        headers: {
          "Content-Type": "application/json"
        },
      });
      const data = await response.json();

      // Изменения состояния должны происходить внутри action
      runInAction(() => {
        this.basket = data.basket;
        this.loading = false;
      });
    } catch (err) {
      runInAction(() => {
        this.error = err.message;
        this.loading = false;
      });
    }
  };

  fetchUser = async (id) => {
    this.loading = true;
    this.error = null;

    try {
      const response = await fetch(`http://127.0.0.1:3000/v1/user/${id}`, {
        method: "get",
        headers: {
          "Content-Type": "application/json"
        },
      });
      const data = await response.json();

      // Изменения состояния должны происходить внутри action
      runInAction(() => {
        this.user = data.user;
        this.loading = false;
      });
    } catch (err) {
      runInAction(() => {
        this.error = err.message;
        this.loading = false;
      });
    }
  };

  fetchProductById = async (id) => {
    this.loading = true;
    this.error = null;
    this.product = null;

    try {
      const response = await fetch(`http://127.0.0.1:3000/v1/product/${id}`, {
        method: "get",
        headers: {
          "Content-Type": "application/json"
        },
      });
      const data = await response.json();

      if (response.ok) {
        runInAction(() => {
          this.product = data.product;
          this.loading = false;
        });
      } else {
        throw new Error(data.error || 'Failed to fetch product');
      }
    } catch (err) {
      runInAction(() => {
        this.error = err.message;
        this.loading = false;
      });
    }
  };
}

const productStore = new ProductStore();
export default productStore;
