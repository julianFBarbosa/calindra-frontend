import HttpClient from "./utils/httpClient";

class ProductService {
  constructor() {
    this.httpClient = new HttpClient(
      "https://mystique-v2-americanas.juno.b2w.io"
    );
  }

  async listProducts(product) {
    return this.ttpClient.get(`/autocomplete?content=${product}&source=nanook`);
  }
}

export default new ProductService();
