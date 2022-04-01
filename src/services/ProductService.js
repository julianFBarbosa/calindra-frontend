import HttpClient from "./utils/httpClient";

const httpClient = HttpClient("https://mystique-v2-americanas.juno.b2w.io");

const ProductService = {
  async listProducts(product) {
    return httpClient.get(`/autocomplete?content=${product}&source=nanook`);
  },
};

export default ProductService;
