class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(path) {
    const request = await fetch(`${this.baseURL}${path}`);
    const response = await request.json();

    if (request.ok) {
      return response;
    }

    console.log("response", response);
    throw new Error(`Erro na api: ${response.message}`);
  }
}

export default HttpClient;
