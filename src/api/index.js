const BASE_URL = "https://jsonplaceholder.typicode.com";

export const API = {
  getTodos: async (params) => {
    try {
      const resp = await fetch(`${BASE_URL}/todos`);
      if (!resp.ok) throw new Error("Ошибка загрузки данных");
      const data = await resp.json();
      return data;
    } catch (err) {
      throw new Error(err.message);
    }
  },

  sendPost: async (params) => {
    try {
      const resp = await fetch(`${BASE_URL}/posts`, {
        method: "POST",
        body: JSON.stringify(params.body),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      console.log("resp.ok ==> ", resp.ok);
      if (!resp.ok) throw new Error("Ошибка создания поста");
      const data = await resp.json();
      return data;
    } catch (err) {
      throw new Error(err.message);
    }
  },
};
