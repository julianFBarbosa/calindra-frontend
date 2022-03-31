class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(path) {
    const response = await fetch(`${this.baseURL}${path}`);

    if (response.ok) {
      return response.json();
    }
  }
}

export default new HttpClient();
