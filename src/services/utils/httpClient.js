const httpClient = (baseURL) => {
  return {
    get: async (path) => {
      const request = await fetch(`${baseURL}${path}`);
      const response = await request.json();

      if (request.ok) {
        return response;
      }

      throw new Error(`Erro na api: ${response.message}`);
    },
  };
};

export default httpClient;
